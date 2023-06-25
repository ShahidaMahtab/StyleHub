const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);
// mongoose.models = {};
export default mongoose.models.User || mongoose.model("User", UserSchema);
