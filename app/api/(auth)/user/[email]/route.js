import { NextResponse } from "next/server";
import connect from "@/middleware/mongoose";
import User from "@/models/User";

export const GET = async (request) => {
  const email = request.headers.get("email");
  console.log(email);
  console.log("sdsff");

  try {
    await connect();
    // Find the user based on the email parameter
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    return new NextResponse.json({ user });
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
