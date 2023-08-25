const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModels");
// @desc Sign Up
// @route POST /admins/signup
// @access public
const signupAdmin = asyncHandler(
	async (req, res) => {
		const { adminname, email, password } = req.body;
		if (!adminname || !email || !password) {
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
		if (adminAvailable) {
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
		if (admin) {
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
		if (!email || !password) {
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
		if (admin && (await bcrypt.compare(password, admin.password))) {
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
module.exports = {
	signupAdmin,
	loginAdmin
};