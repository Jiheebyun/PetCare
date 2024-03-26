import {http, HttpResponse} from 'msw'


interface BoardListRequestBody {
    title?: string;
    content?: string;
    id?:number;
}
console.log("boardListHandlers 실행")

export const boardListHandlers = [
  
  http.post('http://localhost:9090/api/boardListHandlers', async({ request }) => {
    const data = await request.json() as BoardListRequestBody;
    const title = await data?.title;
    const content = await data?.content;
    const id = await data?.id; //클라이언트 측에서 랜덤값 받아옴 

    return HttpResponse.json({ title, content, id }, {
            status: 200 // 응답 코드 설정
          });
  }),
];