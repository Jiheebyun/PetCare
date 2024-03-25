import {http, HttpResponse} from 'msw'


interface BoardCreateRequestBody {
    title?: string;
    content?: string;
    id?:string;
}
console.log("boardCreateHandlers 실행")
// export const boardCreateHandlers  = [
//   http.post('/api/boardCreate', async({ request }) => {
//     console.log("boardCreateHandlers post 실행")
//     const data = await request.json() as BoardCreateRequestBody;
//     const { title, content, id } = data;

//     return HttpResponse.json({ title: title, id: id, content: content }, {
//       status: 200 // 응답 코드 설정
//     });
//   }),
// ];

// export const boardCreateHandlers = [
  
//   http.post('/api/boardCreate', async({ request }) => {
//     const data = await request.json() as BoardCreateRequestBody;
//     const title = await data?.title;
//     const content = await data?.content;
//     const id = await data?.id;

//     return HttpResponse.json({ title: title, content: content, id: id }, {
//             status: 200 // 응답 코드 설정
//           });
//   }),
// ];

export const boardCreateHandlers = [
  http.post('http://localhost:9090/api/boardCreate', async ({ request }) => {
    return HttpResponse.text('Hello world!')
  })
  ,
]