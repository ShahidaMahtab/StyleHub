import connect from "@/middleware/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { email } = params;

  try {
    await connect();
    // Find cart items based on the id parameter
    const user = await User.findOne({ email: email }, { role: 1 });
    if (user) {
      /* 		console.log(user.role); */
      return NextResponse.json({ role: user.role });
    } else {
      // Handle case when user is not found
      return new NextResponse("User not found", { status: 404 });
    }
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
