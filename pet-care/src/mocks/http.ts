import { createMiddleware } from '@mswjs/http-middleware';
import express,{ Request, Response } from 'express';
import cors from 'cors';
import { handlers } from './handlers';
import { boardCreateHandlers } from './boardCreate/boardCreateHandlers';
import { boardListHandlers } from './boardList/boardListHandlers';
import { cmtCreateHandlers } from './cmtCreate/cmtCreateHandlers';
import multer from 'multer';

const app = express();
const port = 9090;

const upload = multer();// Multer 설정

app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());
app.use(createMiddleware(...handlers, ...boardCreateHandlers, ...boardListHandlers, ...cmtCreateHandlers));

app.post('/api/cmtCreate', upload.none(), (req: Request, res: Response) => {// cmtCreate 핸들러에 Multer 적용
    const formData = req.body;
    console.log(formData);
    res.json({ message: 'Data received successfully', data: formData });
});
// 파일이 있을 수도, 없을 수도 있는 경우를 처리
// app.post('/api/cmtCreate', upload.fields([
//     { name: 'file', maxCount: 1 } // 'file' 필드의 파일 최대 1개 처리
// ]), (req, res) => {
//     const formData = req.body;
//     const file = req.files ? req.files['file'] : null;

//     console.log('Form Data:', formData);
//     if (file) {
//         console.log('File uploaded:', file);
//     } else {
//         console.log('No file uploaded');
//     }

//     res.json({ message: 'Data received successfully', data: formData, file });
// });
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));