import nodemailer from "nodemailer";
import Forgot from "@/models/Forgot";
import User from "@/models/User";
var CryptoJS = require("crypto-js");
export default async function handler(req, res) {
  if (req.body.sendMail) {
    let token = `fastsell`;
    let forgot = new Forgot({
      email: req.body.email,
      token: token,
    });

    let emailContent = `We have sent you this email in response to your request to reset your password on fastsell.com. 

    To reset your password, please follow the link below:

    <a href="http://localhost:3000/forgot?token=${token}">Click here to reset your password</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone. If you feel your password has been compromised, you can change it by going to your My Account Page and change your password.

    <br/><br/>`;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "kwsfastsell@gmail.com",
        pass: "lcsuhcogxlxlexky",
      },
    });

    let mailOptions = {
      from: "kwsfastsell@gmail.com",
      to: req.body.email,
      subject: "Reset password",
      html: emailContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ success: false, message: "Error sending email" });
      } else {
        console.log("Email sent: " + info.response);

        return res
          .status(200)
          .json({ success: true, message: "Password reset email sent" });
      }
    });
  } else {
    const { email, password } = req.body;
    console.log(email);
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }
    try {
      const user = await User.findOne({ email }).maxTimeMS(30000); // Increase timeout to 30 seconds

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      // const passwordMatch = await bcrypt.compare(prePass, user.password);
      // if (!passwordMatch) {
      //   return res
      //     .status(401)
      //     .json({ success: false, message: "Invalid previous password" });
      // }

      user.password = CryptoJS.AES.encrypt(password, "secret123").toString();
      await user.save();

      return res
        .status(200)
        .json({ success: true, message: "Password reset successful" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Error resetting password" });
    }
  }
}
