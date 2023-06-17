import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/middleware/mongoose";
import bcrypt from "bcryptjs";
import CryptoJS from "crypto-js";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        connect();

        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        const isPasswordMatched = await bcrypt.compare(password, decryptedPass);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
