const express = require("express");
const router = express.Router();
const validateTokenHandlerAdmin = require("../middlewares/validateTokenHandlerAdmin");
const roleHandler = require("../middlewares/roleHandler");
const { signupAdmin } = require("../controllers/adminControllers");
const { loginAdmin } = require("../controllers/adminControllers");
router.route(
	"/signup"
).post(
	signupAdmin
);
router.route(
	"/login"
).post(
	loginAdmin
);
module.exports = router;