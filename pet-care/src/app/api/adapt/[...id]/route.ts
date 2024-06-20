import { NextResponse, NextRequest } from "next/server";
import { MongoClient } from "mongodb";

type ResponseData = {
  message: string
}

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    const data: any = req.body;
    const userEmail: string = 'test@test.com';
    // 관심리스트를 누른 유기견의 정보, 유저 정보

    const URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PWD_KEY}@cluster0.2wxik4s.mongodb.net/`;
    let client;

    try {
      client = await MongoClient.connect(URL);
      const db = client.db('petCare');
      const userData = db.collection('users');
      
      const result = await userData.find({"email": userEmail}).toArray();

      console.log(result.length)

      if (result.length === 1) {
        const updateResult = await userData.updateOne(
            { email: userEmail },
            { $push: { 
                interested_lists: {
                    interested_id: "2342342",
                    img: "IMG",
                    name: "마루마루"
                }
            } as any }
        );

          console.log(updateResult)
      }

      if (result.length === 0 || result.length > 1) {
          // 예외처리 
      }

      return NextResponse.json({
        data: result,
      });
    } catch (error) {
      console.error('An error occurred:', error);
      return NextResponse.error();
    } finally {
      if (client) {
        client.close(); // 데이터베이스 연결 차단
      }
    }
  }
}
