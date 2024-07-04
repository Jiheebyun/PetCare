import {http, HttpResponse} from 'msw'


interface CmtCreateRequestBody {
  id: number,
  user: string,
  text: string,
  date: string,
  like: number,
  cmt: number,
}
console.log("cmtCreateHandlers 실행!")

export const cmtCreateHandlers = [
  
  //http.post를 사용하여 http://localhost:9090/api/boardCreate 엔드포인트로 들어오는 POST 요청을 가로챕니다.
  http.post('http://localhost:9090/api/cmtCreate', async({ request }) => {
    //데이터 파싱. 요청 본문을 JSON으로 파싱하여 BoardCreateRequestBody 타입으로 저장
    //핸들러 함수는 비동기 함수로 정의되어 있으며, request 객체를 매개변수로 받습니다.
    const data = await request.json() as CmtCreateRequestBody; 
    //데이터 추출
    const id = await data?.id;
    const user = await data?.user;  
    const text = await data?.text; 
    const date = await data?.date; 
    const like = await data?.like; 
    const cmt = await data?.cmt; 
    console.log("text"+text); 

    return HttpResponse.json({ id, user, date, like, cmt, text }, {
            status: 200 // 응답 코드 설정
          });
        }),
];