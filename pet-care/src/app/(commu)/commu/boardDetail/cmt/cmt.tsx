// Cmt.tsx
"use client"
import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import styles from './cmt.module.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Link from 'next/link';
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import postDataJson from '../../../../_components/tempDataCmt.json';
import {useRouter  } from 'next/navigation';

interface postDataType {
  id: number,
  user: string,
  text: string,
  date: string,
  like: number,
  cmt: number,
}

const postData:postDataType[] = postDataJson;

export default function Cmt() {
const router = useRouter();
const [text, setText] = useState('');
const [file, setFile] = useState<File | null>(null);



const handleFileChange = (event:any) => {
  if (event.target.files && event.target.files.length > 0) {
    const selectedFile = event.target.files[0];
    // console.log("Selected file: ", selectedFile);//ok
    setFile(selectedFile); // 상태 업데이트 요청
  }
  else {
    setFile(null);
  }
  console.log("file!: ", file);//비동기라 지금은 null이지만 하단에서 찍어보면 잘 나옴.
};

//msw가 사용할 데이터 api엔드포인트에 보내기
const handleSubmit = async (event:any) => {
  event.preventDefault();
  // console.log("왜안돼:");//ok
  try{ 
    // const id = 12;
    // const user = "test";
    // const date = "1분전";
    // const like = 0;
    // const cmt = 0;

    const formData = new FormData();

    const data ={
      id: 12,
      user:"test",
      date: "1분전",
      like:0,
      cmt:0,
      text:text
    }
    // console.log("1");//ok

    // JSON 데이터를 문자열로 변환하여 FormData에 추가
    formData.append('json', JSON.stringify({data}));
    
    // Blob 객체에 data를 json으로 변환한뒤 담는다.
    // const blob = new Blob([JSON.stringify(data)], {
    //   type: 'application/json',
    // });
    // formData.append('json', blob);
    
    // console.log("blob에 잘 담겼는지? ");//ok
    // console.log("blob: "+JSON.stringify(blob));//{}

    //FormData 객체는 내부적으로 특수한 형태로 데이터를 관리하고 있어, JSON.stringify()를 호출해도 데이터를 변환할 수 없고, 빈 객체 {}를 반환
    // console.log("formData: "+JSON.stringify(formData));//{}

    // 파일이 있는 경우에만 추가
    if (file) {
      formData.append('file', file);
      // console.log('file: '+ file);//ok
    }
      
    // // FormData 객체의 내용을 출력
    formData.forEach((value, key) => {
      console.log("format+forEach: "+`${key}: ${value}`);
    });
    //json: {"id":12,"user":"test","text":"ddddd","date":"1분전","like":0,"cmt":0}


    // const response = await axios.post('http://localhost:9090/api/cmtCreate', {id, user, date, like, cmt, text, file});
    const response = await axios.post('http://localhost:9090/api/cmtCreate', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('response!: '+ response);//x
    if(response.status === 200){
      console.log("왜안되냐")
      localStorage.setItem('recentCmt', JSON.stringify(response.data));
      router.push(`/commu/cmtDetail_text/${response.data.id}`);
      //데이터를 mongoDB에 추가하는 작업이 필요.
      console.log("response.data.id입니다.:"+response.data.id);//ok
    }
  } catch (error) {
    console.log("error났다: ", error); //오류
  }
}

  const [showReplyBox, setShowReplyBox] = useState(false);
  const replyBoxRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(replyBoxRef, () => { setShowReplyBox(false)});

  const [openReplyBoxId, setOpenReplyBoxId] = useState(null);
  const toggleReplyBox = (commentId:any): void => {
    setShowReplyBox((prev: boolean) => !prev);
    setOpenReplyBoxId(openReplyBoxId === commentId ? null : commentId)
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (text.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [text]);

   // 입력창에 텍스트가 변경될 때 호출될 함수
   const handleInputChange = (event:any) => {
    setText(event.target.value);
  };

  // console.log("file!: ", file); //ok
  return (
    <div className={styles.articleComments}>
      <h3>댓글 0</h3>

      <div className={styles.writeArea}>
        <div className={styles.form}>
          <div id="comment_apply" style={{ display: 'block' }}>
            <div className={styles.replyArea}>
              <form onSubmit={handleSubmit} id="comment_fo" name="comment_fo" encType="multipart/form-data">
                <div className={styles.replyIng}>
                  <span className={styles.attachFile}>
                    <label htmlFor="inpfile">
                      <i className={styles.blind}>파일 첨부하기</i>
                      <CameraAltIcon/>
                    </label>
                    <input id="inpfile" type="file" name="file" accept="image/gif, image/jpeg, image/png" multiple onChange={handleFileChange} />
                  </span>
                  <div className={styles.txtara}>
                    <textarea value={text} id="content" name="content" onChange={handleInputChange} placeholder="댓글을 남겨주세요." />
                  </div>
                  <div className={styles.fncUx}>
                    <div className={styles.hideItem}>
                      <ul className={styles.list}>
                        <li>
                          <div className={styles.hidecompanyItem}>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.btnGroup}>
                      <button type="button" className={styles.btnCncl}>취소</button>
                      <button type="submit" disabled={isButtonDisabled} className={styles.btnPost}>등록</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글리스트 */}
      <div className={styles.commentsList}>
            {postData.map((comment) => (
                <div key={comment.id.toString()} id={comment.id.toString()} className={`${styles.wrapComment} ${styles.commentArea}`}>
                  {/* 왜 id는 number 타입이면 오류? --> id는 항상 string이어야한다.*/}
                    <p className={styles.name}>
                        <Link href="/kr/company/LG%20HelloVision/"className={styles.point}>
                          {comment.user}
                        </Link>
                    </p>
                    <p className={styles.cmtTxt}>{comment.text}</p>
                    <div className={styles.wrapInfo}>
                        <span className={styles.date}>
                            {comment.date}
                        </span> 
                        <Link href="/like"className={styles.like}>
                          {comment.like}
                        </Link>
                        <Link href="/comments"className={styles.cmt}>
                          {comment.cmt}
                        </Link>

                        {/*  더보기 버튼 설명 */}
                        <div className={styles.infoFnc}>
                            <div className={styles.moreWp}>
                                    <span style={{ display: 'none' }}>
                                        <div className={`${styles.lyMore} ${styles.popper}`}>
                                            <div className={styles.tip}></div>
                                            <ul className={styles.typeIcons}>
                                                <li>
                                                    <Link href="/write-comment">
                                                            <span className={`${styles.ico} ${styles.icoComment}`}>
                                                                <em className="blind">write comment</em>
                                                            </span>
                                                            대댓글 쓰기
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </span>

                                    {/* 더보기 아이콘 */}
                                    <Link  href=""className={`${styles.more} ${styles.on}`} 
                                    onClick={(event) => { event.preventDefault(); toggleReplyBox(comment.id.toString()); }}
                                   >
                                      {/* 더보기 내부 박스 */}
                                      {/* {showReplyBox ? */}
                                      {showReplyBox && openReplyBoxId === comment.id.toString()?
                                        <div  ref={replyBoxRef}className={styles.replyBox}  >
                                            대댓글 달기
                                          </div>
                                      :null}
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    </div>
  );
}

