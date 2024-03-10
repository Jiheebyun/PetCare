
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";



interface User {
    id: number;
    loginStatus: string;
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

        const user = (await authResponse.json())[0];// handlers에서 보낸응답.
        console.log(user.loginStatus)
        if (authResponse.ok) {

          return user
        } else {

          return null
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
      session.user = token.user;

      if (token.user.loginStatus === "Y") {
        return session
      }
      if (token.user.loginStatus === "N"){
        return null
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
//무언가 데이터를 넘겨주고 싶으면 jwt 토큰에 데이터를 유지하고 session 에서 처리해주면 된다
//과정
//1.providers 내부의 async authorize 에 인증을 실행
//2.callbacks의 jwt 함수가 실행
//3.callbacks의 session 함수가 실행
//참고: https://velog.io/@dosomething/Next-auth-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84