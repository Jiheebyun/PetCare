

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const {
  handlers: { GET, POST }, //Api Route
  auth,         //로그인 여부
  signIn,       //로그인 
} = NextAuth({ 
  providers: [GitHub],
})