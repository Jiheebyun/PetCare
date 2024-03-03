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

const User = [
  {id: 'jihee', nickname: 'JH', password: "123123"},
  {id: 'jihye', nickname: 'JH', password: "123123"},
];

const Posts = [];

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    })
  }),
];

