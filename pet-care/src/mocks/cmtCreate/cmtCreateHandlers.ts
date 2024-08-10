import {http, HttpResponse} from 'msw'


interface CmtCreateRequestBody {
  id: number,
  user: string,
  text: string,
  date: string,
  like: number,
  cmt: number,
  file?:File
}
console.log("cmtCreateHandlers 실행!")


export const cmtCreateHandlers = [
  http.post('http://localhost:9090/api/cmtCreate', async ({ request }) => {
    
    try {
      //request.formData() 메소드는 fetch API를 통해 전송된 데이터를 처리할 때 사용하는 메소드입니다. 하지만 axios를 통해 전송된 FormData는 fetch API와는 다른 방식으로 처리됩니다. axios를 사용한 경우, 서버에서 데이터를 다르게 처리해야 할 수 있습니다.
      //request.formData()는 이 요청을 처리할 수 없을 가능성이 큽니다. 대신 request.json() 또는 다른 메소드를 사용해야 할 수도 있습니다.

    // const formData = await request.formData();//즉, 요건 사용할수 없음; 왜지?
    // const idValue = formData.get('id');

    const data = await request.json();//json형태로 받아보니 try절이 실행되긴함(catch절 실행이 안됨)
    
    // if (!data) {
    //     throw new Error('No JSON data provided');
    //   }

    // formData를 올바르게 타입 단언 (형식 확인)
    const formData = data as Record<string, any>; 
     const id = formData.id; //객체명이 id면 cmt파일로 id객체명으로 전송된다.
     const file = formData.file;

    console.error("??")//o
    console.error("id:"+id)//id:12
    console.error("file:"+file)//id:12
    return HttpResponse.json({ 
      id, file: file ? "File received" : "No file"
      // id, user, date, like, cmt, text
      // , file 
    }, {
      status: 200 // 응답 코드 설정
    });
    } catch (error) {
    console.error("????")//ok
    console.error("Error processing form data:", error);//Error processing form data: TypeError: Error: Unexpected end of form
    //       return HttpResponse.json({ error: "Error processing form data" }, {
    //         status: 500 
    //       });
    }
    }),
];

    // const formData = await request.formData(); // 이 부분은 Node.js 환경에서는 사용할 수 없음
    // req.body에서 텍스트 필드 데이터를 가져옵니다.

    //Node.js 환경에서는 formidable, multer와 같은 미들웨어를 사용하여 multipart/form-data 요청을 처리
    // const jsonString = formData.get('json') as string | null;
    
    // if (!jsonString) {
    //   throw new Error('No JSON data provided');
    // }
    // const parsedData = JSON.parse(jsonString) as CmtCreateRequestBody;
    // const { id} = parsedData;
 
    // const jsonString = formData.get('json') as string | null;
    //  if (!jsonString) {
    //   throw new Error('No JSON data provided');
    // }
    // const parsedData = JSON.parse(jsonString)as CmtCreateRequestBody;
    // const file = formData.get('file') as File | null;
    // const { id, user, date, like, cmt, text } = parsedData;
    






        // FormData 파싱
    
    //  formData.forEach((value, key) => {
      // console.log(`FormData key: ${key}, value:`, value);
    // });
    // const jsonBlob = formData.get('json') as Blob;
    // const jsonText = await jsonBlob.text();
    // const parsedFormData = JSON.parse(formData);
    // const data = JSON.parse(jsonText) as CmtCreateRequestBody;
    // const data = JSON.parse(parsedFormData.json) as CmtCreateRequestBody;
    // console.error("data:", data);




    //  console.error("Raw formData:", formData);//ok

       // FormData에서 각 필드를 추출
    // const id = Number(formData.get('id'));
    // const user = formData.get('user') as string;
    // const text = formData.get('text') as string;
    // const date = formData.get('date') as string;
    // const like = Number(formData.get('like'));
    // const cmt = Number(formData.get('cmt'));
    // const file = formData.get('file') as File;
      // console.log("id되냐: "+id);

    //  const parsedFormData = JSON.parse(formData);
    //  console.error("FormData 파싱됨:", parsedFormData);//ok

    //  if (!parsedFormData.json) {
    //    throw new Error('Missing json field in form data');//ok
    //  }

    //  const data = JSON.parse(parsedFormData.json) as CmtCreateRequestBody;
    //  console.error("data:", data);
    //  const file = parsedFormData.file || null;
    //  console.log("file 파싱됨: ", file); 
    // const { id, user, date, like, cmt, text } = data;





// export const cmtCreateHandlers = [
  
//   //http.post를 사용하여 http://localhost:9090/api/boardCreate 엔드포인트로 들어오는 POST 요청을 가로챕니다.
//   http.post('http://localhost:9090/api/cmtCreate', async({ request }) => {
//     //데이터 파싱. 요청 본문을 JSON으로 파싱하여 BoardCreateRequestBody 타입으로 저장
//     //핸들러 함수는 비동기 함수로 정의되어 있으며, request 객체를 매개변수로 받습니다.
//     const data = await request.json() as CmtCreateRequestBody; 
//     //데이터 추출
//     const id = await data?.id;
//     const user = await data?.user;  
//     const text = await data?.text; 
//     const date = await data?.date; 
//     const like = await data?.like; 
//     const cmt = await data?.cmt; 
//     // const file = await data?.file; 
   


//     return HttpResponse.json({ id, user, date, like, cmt, text }, {
//             status: 200 // 응답 코드 설정
//           });
//         }),
// ];
