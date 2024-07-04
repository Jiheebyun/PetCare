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

//msw가 사용할 데이터 api엔드포인트에 보내기
const handleSubmit = async (event:any) => {
  event.preventDefault();
  try{ 
    const id = 12;
    const user = "test";
    const date = "1분전";
    const like = 0;
    const cmt = 0;
    const response = await axios.post('http://localhost:9090/api/cmtCreate', {id, user, date, like, cmt, text});
    if(response.status === 200){
      localStorage.setItem('recentCmt', JSON.stringify(response.data));
      router.push(`/commu/cmtDetail_text/${response.data.id}`);
      //데이터를 mongoDB에 추가하는 작업이 필요.
      console.log("response.data.id입니다.:"+response.data.id);//ok
    }
  } catch (error) {
    console.log("error: ", error); //오류
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
                    <input id="inpfile" type="file" name="file" accept="image/gif, image/jpeg, image/png" />
                  </span>
                  <div className={styles.txtara}>
                    <textarea value={text} id="content" name="content"   onChange={handleInputChange} placeholder="댓글을 남겨주세요." />
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

