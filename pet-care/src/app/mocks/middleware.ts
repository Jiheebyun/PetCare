


export { auth as middleware } from "./auth";
// import { NextResponse, type NextRequest } from "next/server";


// //로그인이 되지 않았을떄, 되돌려보내는 함수
// export function backToLogin(request: NextRequest){
//     return NextResponse.redirect(new URL('/login', request.url))
// };

export const config = {
    matcher: ['/commu']
};