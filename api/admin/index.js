const express = require("express");
const router = express.Router();

const controller = require("./controller/index");
const authToken = require("../auth/auth-token");

router.get("/verifytoken", authToken.verifyTokenAsAdmin, authToken.valid);
router.get("/", authToken.verifyTokenAsAdmin, controller.show);
router.post("/login", authToken.verifyLogin, controller.login);
router.put(
  "/merchant/:id",
  authToken.verifyTokenAsAdmin,
  controller.updateMerchantStatus
);
router.get("/logout", controller.logout);

module.exports = router;
