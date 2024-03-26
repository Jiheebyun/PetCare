
import { NextResponse, NextRequest } from "next/server";
import axios from "axios"


export async function GET(req: NextRequest){
    const URL = `http://openapi.seoul.go.kr:8088/6e61476b4f63303036364e454a7441/json/TbAdpWaitAnimalView/1/15/`

    try {
        const response = await axios.get(URL);

        if(response){
            console.log(response);

            return NextResponse.json({
                data: response.data,
                error: false
            })
        }
        if(!response){

            return NextResponse.json({
                error: true,
                message: "Invalid Data"
            })
        };
    } catch (err) {
        console.error(err);
    }
}