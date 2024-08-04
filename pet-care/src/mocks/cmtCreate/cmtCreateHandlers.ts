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
    const formData = await request.formData();//요게 안되고 있음.
    // const formData = await request.formData(); // 이 부분은 Node.js 환경에서는 사용할 수 없음
    // req.body에서 텍스트 필드 데이터를 가져옵니다.

    //Node.js 환경에서는 formidable, multer와 같은 미들웨어를 사용하여 multipart/form-data 요청을 처리
    const jsonString = formData.get('json') as string | null;
    if (!jsonString) {
      throw new Error('No JSON data provided');
    }
    const parsedData = JSON.parse(jsonString) as CmtCreateRequestBody;
    const { id} = parsedData;

    console.error("??")//?
    // const jsonString = formData.get('json') as string | null;
    //  if (!jsonString) {
    //   throw new Error('No JSON data provided');
    // }
    // const parsedData = JSON.parse(jsonString)as CmtCreateRequestBody;
    // const file = formData.get('file') as File | null;
    // const { id, user, date, like, cmt, text } = parsedData;
    
const idValue = formData.get('id');
console.error("id:"+idValue)//x





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

      return HttpResponse.json({ 
        id
        // id, user, date, like, cmt, text
        // , file 
      }, {
        status: 200 // 응답 코드 설정
      });
    } catch (error) {
      console.error("????")//ok
      console.error("Error processing form data:", error);
//       return HttpResponse.json({ error: "Error processing form data" }, {
//         status: 500 
//       });
    }
  }),
];



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
