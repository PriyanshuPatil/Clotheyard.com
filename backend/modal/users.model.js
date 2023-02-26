const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: Number, required: true },
    date_of_birth: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: false, default: "Male" },
    admin: { type: Boolean, required: false, default: false },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("clotheyard_user", usersSchema);
module.exports = { UserModel };
