"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import styles from './page.module.css';
import dynamic from 'next/dynamic'; // 다이나믹 임포트
import 'react-quill/dist/quill.snow.css'; // React Quill의 스타일 시트

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false // 서버사이드 렌더링 비활성화
  });

export default  function BoardCreate(props:any) {
    // const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    // try {
    //   const response = await axios.post('/api/boards', { title, content });
    //   console.log('게시글이 성공적으로 생성되었습니다.', response.data);
    //   // 게시글 생성 후 게시판 목록 페이지로 이동
    //   router.push('/boards');
    // } catch (error) {
    //   console.error('게시글 생성 중 오류가 발생했습니다:', error);
    // }
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
      </form>
      <button type="submit" className={styles.button}>작성 완료</button>
    </div>
  );
};