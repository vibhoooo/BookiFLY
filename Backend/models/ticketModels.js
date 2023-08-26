const mongoose = require("mongoose");
const ticketSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [
				true,
				"Please enter username!"
			]
		},
		email: {
			type: String,
			required: [
				true,
				"Please enter email!"
			]
		},
		origin: {
			type: String,
			required: [
				true,
				"Please enter airplane origin!"
			]
		},
		destination: {
			type: String,
			required: [
				true,
				"Please enter airplane destination!"
			]
		},
		type: {
			type: String,
			required: [
				true,
				"Please enter airplane type!"
			]
		},
		flightClass: {
			type: String,
			required: [
				true,
				"Please enter flightClass!"
			]
		},
		seatNumber: {
			type: Number,
			required: [
				true,
				"Please enter seatNumber!"
			]
		},
		pnr: {
			type: String,
			required: [
				true,
				"Please enter pnr!"
			]
		},
		basePrice: {
			type: Number,
			required: [
				true,
				"Please enter basePrice!"
			]
		}
	},
	{
		timestamps: true
	}
);
module.exports = mongoose.model(
	"Ticket",
	ticketSchema
);