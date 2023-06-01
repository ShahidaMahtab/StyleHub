import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      if (req.body.email == user.email && req.body.password == decryptedPass) {
        var token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
          },
          "jwtsecret",
          { expiresIn: "2d" }
        );
        // console.log(token);
        res.status(200).json({ success: true, token });
      } else {
        res.status(200).json({
          success: "false",
          error: "Invalid credentials",
        });
      }
    } else {
      res.status(200).json({
        success: false,
        error: "No user found",
      });
    }
  } else {
    res.status(400).json({ error: "invalid method" });
  }
};
export default connectDb(handler);
