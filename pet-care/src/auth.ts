
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";




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
        console.log("auth.ts", credentials)

        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
        // const user = await authResponse.json(); // handlers에서 보낸응답.


        if (authResponse.ok) {
          const user = await authResponse.json();
          console.log("authResponse OK")
          return {
            user: {  // 수정된 부분: 사용자 정보는 user 속성에 할당되어야 함
              id: user.id, // 사용자의 ID
              name: user.name, // 사용자의 이름
              email: user.email, // 사용자의 이메일
            },
          };
        } else {
          // 실패했을 때는 null 또는 빈 객체를 반환
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 600, // 세션 만료 기간 설정 // 10분동안 세션 유지 
  },
  callbacks: {
    async session({ session, token }:{session: any , token: any}) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
    async jwt({ token, user }: {token: any, user: any}) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});