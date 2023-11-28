const express = require("express");
const router = express.Router();
const {
  emailLogin,
  phoneLogin,
  getUserInfoByEmail,
  getUserByEmail,
  getUserByPhoneNumber,
  handleToken,
  getUserById,
  updateUser,
  deleteUser,
  SignUpUser,
  bringUsersData,
  checkPassword,
  sendResetPasswordConfirmationCode,
<<<<<<< HEAD
  bringSortedData,
  bringInvertedSortedData,
=======
  reniewToken,
>>>>>>> ac209c8b8d8f71f2dab31f40dbcd319e55e84d32
} = require("../controller/user.Controller");

// Define routes for user operations
router.get("/sort/:DataType",bringSortedData);
router.get("/invSort/:DataType",bringInvertedSortedData);
router.get("/getById/:id",getUserById)
router.post("/emailLogin", emailLogin);
router.post("/phoneLogin", phoneLogin);
router.post("/token", handleToken);
router.get("/BringUserData", bringUsersData);
router.get("/getInfoByMail/:email", getUserInfoByEmail);
router.post("/SignUpUser", SignUpUser);
router.get("/getOneByEmail/:email", getUserByEmail);
router.get("/getOneByPhone/:phoneNumber", getUserByPhoneNumber);

router.get("/getOne/:id", getUserById);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.post("/passwordCheck/:id", checkPassword);
router.post(
  "/sendResetPasswordConfirmationCode",
  sendResetPasswordConfirmationCode
);
router.post("/reniewToken", reniewToken);

module.exports = router;
