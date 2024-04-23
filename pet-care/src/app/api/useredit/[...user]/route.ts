
import { NextResponse, NextRequest } from "next/server";
import { MongoClient } from "mongodb";


type ResponseData = {
  message: string
}
 
// profile/[userid]/useredit 페이지와 연결됨 몽고 db 연결
export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    const data: any = req.body;
    const URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PWD_KEY}@cluster0.2wxik4s.mongodb.net/`;

    const client = await MongoClient.connect(URL);
    const db = client.db('petCare');
    const userData = db.collection('users');
    
    const result = await userData.find().toArray();
    console.log(result)
    //예외처리 


    client.close(); // 데이터베이스 연결 차단
    return NextResponse.json({
      data: result,
  });
  }

}
