import {http, HttpResponse, StrictResponse} from 'msw'
import {faker} from "@faker-js/faker";

const boards = [
  { id: 1, title: '게시글 1', content: '내용 1' },
  { id: 2, title: '게시글 2', content: '내용 2' },
  { id: 3, title: '게시글 3', content: '내용 3' },
];

interface BoardListRequestBody {
  title?: string;
  content?: string;
  status: number; // HTTP 상태 코드
  body?: string; // 응답 본문

}
console.log("boardListHandlers 실행")
export const boardListHandlers = [
  //요청을 가로채서 응답을줌
  http.get('/api/boardList', async({ request} )=> {
    // { request }란 : ctx 객체 안에 있는 request 속성. 
    // request에 포함사항
    // 1. HTTP 요청(req), 
    // 2. HTTP 응답(res), 
    // 3. MSW의 컨텍스트와 관련된 다양한 기능들을 포함하는 ctx 객체
    const data = await request.json() as BoardListRequestBody;
    const { title, content } = data;
    

    return HttpResponse.json({ title: title, content:content, id:1 })
    // const allowedMockupUser = {
    //   email: "test@test.com",
    //   password: "123123"
    // };

    // const checkEmail = email === allowedMockupUser.email ? true : false;
    // const checkPassword = password === allowedMockupUser.password ? true : false;
    // if(checkEmail && checkPassword){
      
    //   return HttpResponse.json([{ email: email, id:"Jihee", loginStatus:"Y" }, {
    //     headers: {
    //       'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
    //     },
    //   }])
    // } else {

    //   return HttpResponse.json([{ email: email, id:"Jihee", loginStatus:"N" }, {
    //     headers: {
    //       'Set-Cookie': '',
    //     },
    //   }])

    // }
  }),
];

