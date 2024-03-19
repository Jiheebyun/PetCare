"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import styles from './page.module.css';
import dynamic from 'next/dynamic'; // 다이나믹 임포트
import 'react-quill/dist/quill.snow.css'; // React Quill의 스타일 시트

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false // 서버사이드 렌더링 비활성화
  });

export default  function BoardCreate(props:any) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  console.log("title:"+title)//ok
  console.log("content:"+content)//ok
  console.log("props:"+JSON.stringify(props))//ok //props:{"params":{},"searchParams":{}}
  
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    console.log("handleSubmit함수 실행")//ok

    try {
      // 제목과 내용을 서버에 전송
      const response = await axios.post('/api/boardCreate', { title, content });
      console.log("response:"+response)
      console.log("response.status:"+response.status)

      // 서버로부터의 응답을 확인하고 성공했을 때만 페이지 이동
      if (response.status === 200) { //x //404
        console.error('response.status === 200');
        router.push('/boardDetail/'); // 클라이언트 사이드 라우팅을 통한 페이지 이동
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>글쓰기</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">제목:</label>
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
          />
        </div>
        <button type="submit" className={styles.button} >작성 완료</button>
      </form>
    </div>
  );
};