import GoogleProvider from 'next-auth/providers/google';
import { authOptions } from "@/app/lib/configs/auth/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);
// const handler = NextAuth({
//     providers: [

//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         })
//     ]
// })
export { handler as GET, handler as POST };
