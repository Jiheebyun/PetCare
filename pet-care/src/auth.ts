
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";



interface User {
    id: number;
    name: string;
    email: string;
}

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
      async authorize(credentials: Partial<Record<string, unknown>>, request: Request):  Promise<User | any> {
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            pwd: credentials.password,
          }),
        });


        if (authResponse.ok) {
          const user = await authResponse.json();// handlers에서 보낸응답.
          const email = await user.email;
          const loginStatus = await user.loginStatus;
          console.log("BBBBBBBBBBBBBBB");
          console.log(user)

          return user[0]
        } else {

          return null;
        };
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 600, // 세션 만료 기간 설정 // 10분동안 세션 유지 
  },
  callbacks: { // 데이터를 프론트쪽에 보내기 위해서 콜백을 사용하여 보내야한다. 
    async session({ session, token }:{session: any , token: any}) {
      const checkLoginStatus = token.user.loginStatus === "Y" ? true : false;
      console.log("THIS IS TOKEN BELOW")
      console.log(token)
      console.log("THIS IS SESSION BELOW")
      console.log(session);
      if (token && checkLoginStatus) {
              
        return session.user;
      };
      if (token && !checkLoginStatus){
        return {
          email: token.user.email,
          loginStatus: "N"
        }
      }
    },
    async jwt({ token, user }: {token: any, user: any}) {
      if (user) {
        token.user = user;
      };

      return token;
    },
  },
});