import {http, HttpResponse} from 'msw'


interface BoardCreateRequestBody {
    title?: string;
    content?: string;
    id?:number;
    date:string;
    writer:string;
    category:string;
}
console.log("boardCreateHandlers 실행")

export const boardCreateHandlers = [
  
  //http.post를 사용하여 http://localhost:9090/api/boardCreate 엔드포인트로 들어오는 POST 요청을 가로챕니다.
  http.post('http://localhost:9090/api/boardCreate', async({ request }) => {
    //데이터 파싱. 요청 본문을 JSON으로 파싱하여 BoardCreateRequestBody 타입으로 저장
    //핸들러 함수는 비동기 함수로 정의되어 있으며, request 객체를 매개변수로 받습니다.
    const data = await request.json() as BoardCreateRequestBody; 
    //데이터 추출
    const title = await data?.title;
    const content = await data?.content;
    const id = await data?.id; //클라이언트 측에서 랜덤값 받아옴 
    const date = new Date().toISOString().split('T')[0];
    const writer = await data?.writer;
    const read = 1
    const cmt =1
    const like =1
    const category = await data?.category;
    // console.log("category"+category); // 출력: "2024-03-28"

    return HttpResponse.json({ title, content, id, date, writer,read, cmt, like, category }, {
            status: 200 // 응답 코드 설정
          });
        }),
];