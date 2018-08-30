const express = require("express");
const router = express.Router();

const controller = require("./controller/index");
const authToken = require("../auth/auth-token");
// const authPassword = require('../')

/* GET home page. */
router.get("/verifytoken", authToken.verifyTokenAsMerchants, authToken.valid);

router.get("/", controller.show);
router.get("/search", controller.searchMerchants);
router.post("/login", authToken.verifyLogin, controller.login);
router.get("/logout", controller.logout);
router.put(
  "/edit-profile/:id",
  authToken.verifyTokenAsMerchants,
  controller.editProfile
);
router.post("/register/", controller.register);
router.delete(
  "/delete-account/:id",
  authToken.verifyTokenAsMerchants,
  controller.deleteAccount
);

router.get('/reviews',controller.showReviews)
router.post('/add-reviews',controller.addReviews)

module.exports = router;
