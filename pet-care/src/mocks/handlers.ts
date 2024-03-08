import {http, HttpResponse, StrictResponse} from 'msw'
import {faker} from "@faker-js/faker";

import teampData from "@/app/_components/ tempData.json";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
};

const UserResponse = [
  {id: 'jihee', nickname: 'JH', password: "123123"},
  {id: 'jihye', nickname: 'JH', password: "123123"},
];

const Posts = [];

interface LoginRequestBody {
  email?: string;
  pwd?: string;

  // 다른 필요한 속성들을 추가할 수 있습니다.
}

export const handlers = [
  //요청을 가로채서 응답을줌
  http.post('/api/login', async({ request }) => {
    const data = await request.json() as LoginRequestBody;
    const email = await data?.email;
    const password = await data?.pwd;
    

    const allowedMockupUser = {
      email: "test@test.com",
      password: "123123"
    };

    //DB connection을 통해서 DB에 있는 이메일과 비밀번호 일치를 확인하는 login구현
    //현재 Mockupdata를 사용하여 임시로 구현됨 
    const checkEmail = email === allowedMockupUser.email ? true : false;
    const checkPassword = password === allowedMockupUser.password ? true : false;
    if(checkEmail && checkPassword){
      
      return HttpResponse.json([{ email: email, id:"Jihee", loginStatus:"Y" }, {
        headers: {
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
        },
      }])
    } else {

      return HttpResponse.json([{ email: email, id:"Jihee", loginStatus:"N" }, {
        headers: {
          'Set-Cookie': '',
        },
      }])

    }
  }),
];

