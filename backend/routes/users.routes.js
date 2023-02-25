const express = require("express");
const usersRouter = express.Router();
const {
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
  register,
  login,
} = require("../controller/user.controller");
const { AdminRoleAuth } = require("../middleware/AdminRoleAuth");

// /users/register -- POST/user  ==> To register a new user.
usersRouter.post("/register", register);

// /users/login -- POST/user  ==> To login/generate a new token.
usersRouter.post("/login", login);

// /users -- GET/admin ==> To get user data.
usersRouter.get("/", AdminRoleAuth, getUser);

// /users/:id -- GET/admin ==> To get single user data.
usersRouter.get("/:id", getSingleUser);

// /users/:id -- PATCH/admin ==> To update single user data.
usersRouter.patch("/:id", updateUser);

// /users/:id -- DELETE/admin ==> To delete single user data.
usersRouter.delete("/:id", AdminRoleAuth, deleteUser);

module.exports = { usersRouter };
