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

export const handlers = [
  //요청을 가로채서 응답을줌
  http.post('/api/login', () => {
    return HttpResponse.json([{name:"jihee", test:"test"}, {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    }])
  }),
];

