import {http, HttpResponse} from 'msw'


interface BoardCreateRequestBody {
    title?: string;
    content?: string;
    id?:number;
    date:string;
    writer:string;
}
console.log("boardCreateHandlers 실행")

export const boardCreateHandlers = [
  
  http.post('http://localhost:9090/api/boardCreate', async({ request }) => {
    const data = await request.json() as BoardCreateRequestBody;
    const title = await data?.title;
    const content = await data?.content;
    const id = await data?.id; //클라이언트 측에서 랜덤값 받아옴 
    const date = new Date().toISOString().split('T')[0];
    const writer = await data?.writer;
    const read = 1
    const cmt =1
    const like =1
    console.log("?"+date); // 출력: "2024-03-28"




    return HttpResponse.json({ title, content, id, date, writer,read, cmt, like }, {
            status: 200 // 응답 코드 설정
          });
        }),
];