const mongoose = require("mongoose");
const seatSchema = mongoose.Schema(
	{
		seatNumber: {
			type: Number
		},
		pnr: {
			type: String
		},
		basePrice: {
			type: Number
		}
	}
);
module.exports = mongoose.model(
	"Seat",
	seatSchema
);