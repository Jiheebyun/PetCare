import {http, HttpResponse, StrictResponse} from 'msw'



interface BoardCreateRequestBody {
    title?: string;
    content?: string;
    id?:number;
}

let nextId = 1;
console.log("handlers1 실행")
export const handlers = [
  //요청을 가로채서 응답을줌
  
  http.post('/api/boardCreate', async({ request }) => {
    console.log("handlers2 실행")
    const data = await request.json() as BoardCreateRequestBody;
    const { title, content } = data;
    const id = nextId++;

    return HttpResponse.json({ title: title, id: id, content: content }, {
      status: 200 // 응답 코드 설정
    });
  }),
];

