import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { handlers } from './handlers';

const app = express();
const port = 9090;

app.use(cors({ 
    origin: 'http://localhost:3000', // 허용할 origin
    optionsSuccessStatus: 200, // Pre-flight 요청에 대한 응답 상태 코드
    credentials: true // 인증 정보를 포함한 요청 허용
  }));
//credentials: 인증 정보를 포함한 요청을 보내기 위함( 브라우저에서 서버로의 요청이 인증 토큰 등의 인증 정보를 포함)
//서버에서는 Access-Control-Allow-Credentials 헤더를 포함하여 요청에 대한 응답을 반환해야 함

app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
// OPTIONS 요청에 대한 처리
//브라우저는 실제 요청을 보내기 전에 사전 요청을 보내는것
app.options('*', cors());