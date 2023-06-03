// import NextResponse from "next/server";

// export const GET = async (request) => {
//   return new NextResponse("It works", { status: 200 });
// };
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
