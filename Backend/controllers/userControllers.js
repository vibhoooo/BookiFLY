const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const Flight = require("../models/flightModels");
const Ticket = require("../models/ticketModels");
// @desc Sign Up
// @route POST /users/signup
// @access public
const signupUser = asyncHandler(
	async (req, res) => {
		const { username, email, password } = req.body;
		if(!username || !email || !password) {
			res
				.status(
					400
				);
			throw new Error(
				"All fields are mandatory!"
			);
		}
		const userAvailable = await User.findOne(
			{
				email
			}
		);
		if(userAvailable) {
			res
				.status(
					400
				);
			throw new Error(
				"User already registered!"
			);
		}
		const hashedPassword = await bcrypt.hash(
			password,
			10
		);
		const user = await User.create(
			{
				username,
				email,
				password: hashedPassword
			}
		);
		if(user) {
			res
				.status(
					201
				)
				.json(
					{
						user_id: user.id,
						user_email: user.email
					}
				);
		}
		else {
			res
				.status(
					500
				);
			throw new Error(
				"Registration falied!"
			);
		}
	}
);
// @desc Login
// @route POST /users/login
// @access public
const loginUser = asyncHandler(
	async (req, res) => {
		const { email, password } = req.body;
		if(!email || !password) {
			res
				.status(
					400
				);
			throw new Error(
				"All fields are mandatory!"
			);
		}
		const user = await User.findOne(
			{
				email
			}
		);
		if(user && (await bcrypt.compare(password, user.password))) {
			const accessToken = jwt.sign(
				{
					user: {
						username: user.username,
						user_email: user.email,
						user_id: user.id,
						role: "User"
					}
				},
				process.env.ACCESS_TOKEN_SECRET_USER,
				{
					expiresIn: "60m"
				}
			);
			res
				.status(
					200
				)
				.json(
					{
						accessToken,
						role: "User"
					}
				);
		}
		else {
			res
				.status(
					401
				);
			throw new Error(
				"Email or Password not valid!"
			);
		}
	}
);
// @desc Select source and destination
// @route POST /users/selectSD
// @access private
const selectSourceDestination = asyncHandler(
	async (req, res) => {
		const { origin, destination } = req.body;
		if(!origin || !destination) {
			res
				.status(
					400
				);
			throw new Error(
				"All fields are mandatory!"
			);
		}
		const flights = await Flight.find(
			{
				origin,
				destination
			}
		);
		if(flights) {
			const flightTypes = flights.map(flight => flight.type);
			if(flightTypes) {
				res
					.status(
						200
					)
					.json(
						flightTypes
					);
			}
			else {
				res
					.status(
						500
					);
				throw new Error(
					"No type found!"
				);
			}
		}
		else {
			res
				.status(
					500
				);
			throw new Error(
				"No flights found!"
			);
		}
	}
);
// @desc Select a flight
// @route POST /users/selectFlight
// @access private
const selectFlight = asyncHandler(
	async (req, res) => {
		const { type, flightClass } = req.body;
		if(!type || !flightClass) {
			res
				.status(
					400
				);
			throw new Error(
				"All fields are mandatory!"
			);
		}
		const flight = await Flight.findOne(
			{
				type
			}
		);
		if(flight) {
			if(flight[flightClass]) {
				const seatDistribution = flight[flightClass].seats;
				res
					.status(
						200
					)
					.json(
						seatDistribution
					);
			}
			else {
				res
					.status(
						500
					);
				throw new Error(
					"No class found!"
				);
			}
		}
		else {
			res
				.status(
					500
				);
			throw new Error(
				"No flight found!"
			);
		}
	}
);
// @desc Select a seat
// @route POST /users/selectSeat
// @access private
const selectSeat = asyncHandler(
	async (req, res) => {
		const { seatNumber, pnr } = req.body;
		if(!seatNumber || !pnr) {
			res
				.status(
					400
				);
			throw new Error(
				"All fields are mandatory!"
			);
		}
		const pnrClass = pnr.charAt(0).toLowerCase();
		let className;
		switch(pnrClass) {
			case "f":
				className = "firstClass";
				break;
			case 'b':
				className = "businessClass";
				break;
			case 'e':
				className = "economyClass";
				break;
			default: 
				res
					.status(
						400
					);
				throw new Error(
					"Invalid pnr!"
				);
		};
		const flight = await Flight.findOne(
			{
				[`${className}.seats.pnr`]: pnr,
			}
		);
		if(flight) {
			const seat = flight[className].seats.find((seat) => seat.pnr === pnr);
			if(seat) {
				const basePrice = seat.basePrice;
				const ticket = await Ticket.create(
					{
						username: req.user.username,
						email: req.user.user_email,
						origin: flight.origin,
						destination: flight.destination,
						type: flight.type,
						flightClass: className,
						seatNumber,
						pnr,
						basePrice,
					}
				);
				if(ticket) {
					res
						.status(
							201
						)
						.json(
							{
								username: req.user.username,
								email: req.user.user_email,
								origin: flight.origin,
								destination: flight.destination,
								type: flight.type,
								flightClass: className,
								seatNumber,
								pnr,
								basePrice,
							}
						)
				}
				else {
					res
						.status(
							500
						);
					throw new Error(
						"Ticket generation failed!"
					);
				}
			}
			else {
				res
					.status(
						500
					);
				throw new Error(
					"No seat found!"
				);
			}
		}
		else {
			res
				.status(
					500
				);
			throw new Error(
				"No flight found!"
			);
		}
	}
);
module.exports = {
	signupUser,
	loginUser,
	selectSourceDestination,
	selectFlight,
	selectSeat
};