
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {NextResponse} from "next/server";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/login',
    newUser: '/signIn',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log(credentials)
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.eamil,
            password: credentials.password,
          }),
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()
        console.log('user', user);
        return {
          email: user.eamil,
          message: "no"
        }
      },
    }),
  ]
});