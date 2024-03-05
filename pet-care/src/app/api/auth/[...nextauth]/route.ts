import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";
import { GET, POST }from "@/auth";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            // clientId: process.env.GOOGLE_ID || "",
            // clientSecret: process.env.GOOGLE_SECRET || "",
        }),
    ],
});

export { GET, POST, handler};

