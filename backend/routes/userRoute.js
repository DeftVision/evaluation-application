const express = require("express");
const router = express.Router();
const { getUser, getUsers, updateUser, loginUser, deleteUser, registerUser} = require("../controllers/userController")

router.get("/users", getUsers)
router.get("/user/:id", getUser)

router.post("/register", registerUser)
router.post("?login", loginUser)


router.patch("/update/:id", updateUser)

router.delete("/delete/:id", deleteUser)


module.exports = router;


