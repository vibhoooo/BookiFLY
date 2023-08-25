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
			basePrice: Number,
			seats: [Seat.schema],
			isRequired: { 
				type: Boolean, 
				default: true 
			}
		},
		businessClass: {
			rows: Number,
			seatsInRow: Number,
			basePrice: Number,
			seats: [Seat.schema],
			isRequired: {
				type: Boolean,
				default: true
			}
		},
		economyClass: {
			rows: Number,
			seatsInRow: Number,
			basePrice: Number,
			seats: [Seat.schema],
			isRequired: {
				type: Boolean,
				default: true
			}
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