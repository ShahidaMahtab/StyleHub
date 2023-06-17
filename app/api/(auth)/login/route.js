import connect from "@/middleware/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

export async function POST(request) {
  try {
    await connect();
    const body = await request.json();
    let user = await User.findOne({ email: body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      if (body.email == user.email && body.password == decryptedPass) {
        var token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
          },
          "jwtsecret",
          { expiresIn: "2d" }
        );
        const tokenUser = body.email;
        const name = user.firstName;
        return NextResponse.json({ success: true, token, tokenUser, name });
      } else {
        return NextResponse.json({
          success: "false",
          error: "Invalid credentials",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        error: "No user found",
      });
    }
  } catch (err) {
    return new NextResponse("invalid method", { status: 400 });
  }
}
