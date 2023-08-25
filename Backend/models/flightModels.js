const mongoose = require("mongoose");
const Seat = require('./seatModels');
const flightSchema = mongoose.Schema(
	{
		type: {
			type: String,
			required: [
				true,
				"Please enter airplane type!"
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
		firstClass: {
			rows: Number,
			seatsInRow: Number,
			seats: [Seat],
			required: [
				true,
				"Please enter seat configuration for firstClass!"
			]
		},
		businessClass: {
			rows: Number,
			seatsInRow: Number,
			seats: [Seat],
			required: [
				true,
				"Please enter seat configuration for businessClass!"
			]
		},
		economyClass: {
			rows: Number,
			seatsInRow: Number,
			seats: [Seat],
			required: [
				true,
				"Please enter seat configuration for economyClass!"
			]
		}
	},
	{ 
		timestamps: true 
	}
);
module.exports = mongoose.model(
	"Flight",
	flightSchema
);