const mongoose = require("mongoose");
const seatSchema = mongoose.Schema(
	{
		seatNumber: {
			type: String,
		},
		pnr: {
			type: String,
		},
		basePrice: {
			type: String,
		}
	}
);
module.exports = mongoose.model(
	"Seat",
	seatSchema
);