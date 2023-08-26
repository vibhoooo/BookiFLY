const express = require("express");
const router = express.Router();
const validateTokenHandlerUser = require("../middlewares/validateTokenHandlerUser");
const { signupUser } = require("../controllers/userControllers");
const { loginUser } = require("../controllers/userControllers");
const { selectSourceDestination } = require("../controllers/userControllers");
const { selectFlight } = require("../controllers/userControllers");
const { selectSeat } = require("../controllers/userControllers");
router.route(
	"/signup"
).post(
	signupUser
);
router.route(
	"/login"
).post(
	loginUser
);
router.route(
	"/selectSD"
).post(
	validateTokenHandlerUser,
	selectSourceDestination
);
router.route(
	"/selectFlight"
).post(
	validateTokenHandlerUser,
	selectFlight
);
router.route(
	"/selectSeat"
).post(
	validateTokenHandlerUser,
	selectSeat
);
module.exports = router;