"use client"
import React, { useEffect, useState } from 'react';
import {useRouter,useSearchParams  } from 'next/navigation';
import axios from 'axios';
import styles from './page.module.css';
import dynamic from 'next/dynamic'; // 다이나믹 임포트
import 'react-quill/dist/quill.snow.css'; // React Quill의 스타일 시트
import { useSession } from "next-auth/react"

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false // 서버사이드 렌더링 비활성화
  });

export default  function BoardCreate(props:any) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const { data: session} = useSession() // 로그인된 사용자 정보를 가져옴
  const writer = session?.user?.id

  const handleCategoryChange = (event:any) => {
    setCategory(event.target.value);
    console.log("category:"+category)
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
   
      const id = 12; //임시
      //HTTP POST 요청을 서버의 /api/boardCreate 엔드포인트로 보냄
      const response = await axios.post('http://localhost:9090/api/boardCreate', { id, title, content, writer,category });
      // -> 서버의 API 라우트로 이동 -> 서버 측에서는 /api/boardCreate 엔드포인트를 처리할 수 있는 코드가 필요 (클라이언트에서 전송된 데이터를 받아 처리하고, 필요에 따라 데이터베이스에 저장하거나 다른 작업을 수행한 후에 클라이언트에게 응답을 전송)
      // 서버로부터 응답 받은 후, 성공했을 때만 페이지 이동
      if (response.status === 200) {//ok
          // Local Storage에 저장
          localStorage.setItem('recentPost', JSON.stringify(response.data));
          // 상세 페이지로 이동
          router.push(`/commu/boardDetail/${response.data.id}`);
      
          console.log("response:"+JSON.stringify(response));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>글쓰기</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="ctg">카테고리 : </label>
      <select name="ctg" id="ctg" className={styles.selectContainer} onChange={handleCategoryChange}>
        <option value="select">선택</option>
        <option value="강아지">강아지</option>
        <option value="고양이">고양이</option>
      </select>
        <div className={styles.formGroup}>
          <label htmlFor="title">제목:</label><br/>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.lable}htmlFor="content">내용:</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                 {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean']
              ]
            }}
            style={{ height: '400px',marginBottom:'80px'}}
          />
        </div>
        <button type="submit" className={styles.button} >작성 완료</button>
      </form>
    </div>
  );
};