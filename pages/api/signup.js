import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    const { firstName, lastName, email, phone, cpassword } = req.body;
    let user = new User({
      firstName,
      lastName,
      phone,
      email,
      password: CryptoJS.AES.encrypt(req.body.password, "secret123").toString(),
      cpassword,
    });
    await user.save();
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "invalid method" });
  }
};
export default connectDb(handler);
