const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModels");
const Flight = require("../models/flightModels");
const Seat = require("../models/seatModels");
// @desc Sign Up
// @route POST /admins/signup
// @access public
const signupAdmin = asyncHandler(
	async (req, res) => {
		const { adminname, email, password } = req.body;
		if(!adminname || !email || !password) {
			res
				.status(
					400
				);
			throw new Error(
				"All fields are mandatory!"
			);
		}
		const adminAvailable = await Admin.findOne(
			{
				email
			}
		);
		if(adminAvailable) {
			res
				.status(
					400
				);
			throw new Error(
				"Admin already registered!"
			);
		}
		const hashedPassword = await bcrypt.hash(
			password,
			10
		);
		const admin = await Admin.create(
			{
				adminname,
				email,
				password: hashedPassword
			}
		);
		if(admin) {
			res
				.status(
					201
				)
				.json(
					{
						admin_id: admin.id,
						admin_email: admin.email
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
// @route POST /admins/login
// @access public
const loginAdmin = asyncHandler(
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
		const admin = await Admin.findOne(
			{
				email
			}
		);
		if(admin && (await bcrypt.compare(password, admin.password))) {
			const accessToken = jwt.sign(
				{
					admin: {
						adminname: admin.adminname,
						admin_email: admin.email,
						admin_id: admin.id,
						role: "Admin"
					}
				},
				process.env.ACCESS_TOKEN_SECRET_ADMIN,
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
						role: "Admin"
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
// @desc Post a flight
// @route POST /admins/post
// @access private
const postFlight = asyncHandler(
	async (req, res) => {
		const { type, origin, destination, firstClass, businessClass, economyClass } = req.body;
		if(!type || !origin || !destination || !firstClass || !businessClass || !economyClass) {
			res
				.status(
					400
				);
			throw new Error(
				"All fields are mandatory!"
			);
		}		
		const flight = await Flight.create(
			{
				type,
				origin,
				destination,
				firstClass,
				businessClass,
				economyClass
			}
		);
		generateSeatsAndPNRs(flight);
		await flight.save();
		if(flight) {
			res
				.status(
					201
				)
				.json(
					{
						type,
						origin,
						destination,
						firstClass: flight.firstClass.seats,
						businessClass: flight.businessClass.seats,
						economyClass: flight.economyClass.seats
					}
				);
		}
		else {
			res
				.status(
					500
				);
			throw new Error(
				"Flight adding failed"
			);
		}
	}
);
const generateSeatsAndPNRs = (flight) => {
	const classes = ["firstClass", "businessClass", "economyClass"];
	for(const className of classes) {
		const classData = flight[className];
		const { rows, seatsInRow, basePrice } = classData;
		let seatNumber = 1;
		for (let row = 1; row <= rows; ++row) {
			for (let seatInRow = 1; seatInRow <= seatsInRow; ++seatInRow) {
				const seat = new Seat(
					{
						seatNumber,
						pnr: generatePNR(className, seatNumber),
						basePrice: basePrice
					}
				);
				flight[className].seats.push(seat);
				++seatNumber;
			}
		}
	}
};
const generatePNR = (className, seatNumber) => {
	const classPrefix = className.slice(0, 1).toUpperCase();
	const alphanumericChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let pnr = classPrefix + seatNumber;
	for (let i = 0; i < 6; ++i) {
		const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
		pnr += alphanumericChars.charAt(randomIndex);
	}
	return pnr;
};
module.exports = {
	signupAdmin,
	loginAdmin,
	postFlight
};