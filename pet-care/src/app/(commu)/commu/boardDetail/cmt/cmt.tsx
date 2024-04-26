// Cmt.tsx
"use client"
import React, { useState,useEffect,useRef } from 'react';
import styles from './cmt.module.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Link from 'next/link';
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export default function Cmt() {
  const [comments, setComments] = useState([
    { id: 1, text: '첫 번째 댓글입니다!' },
    { id: 2, text: '두 번째 댓글입니다!' }
  ]);
  //더보기 기능
  const [showReplyBox, setShowReplyBox] = useState(false);
  const replyBoxRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(replyBoxRef, () => { setShowReplyBox(false)});

  const [openReplyBoxId, setOpenReplyBoxId] = useState(null);
  const toggleReplyBox = (commentId:any): void => {
    setShowReplyBox((prev: boolean) => !prev);
    setOpenReplyBoxId(openReplyBoxId === commentId ? null : commentId)
  };


  // useEffect(() => {
  // // const handleClickOutside = (event:MouseEvent) => {
  //   function handleClickOutside(e: MouseEvent): void {
  //     // console.log("event.target : "+event.target)
  //     // console.log("replyBoxRef.current : "+replyBoxRef.current)
  //     //아이콘 클릭시 : event.target : http://localhost:3000/commu/boardDetail/1
  //     //외부영역 클릭시 : event.target : [object HTMLDivElement] / [object HTMLTextAreaElement] etc..

  //     console.log("replyBoxRef.current:"+replyBoxRef.current)
  //     //아이콘 클릭시 : replyBoxRef.current:http://localhost:3000/commu/boardDetail/1
  //     //외부영역 클릭시 : replyBoxRef.current:http://localhost:3000/commu/boardDetail/1
  //     // if (replyBoxRef.current && !replyBoxRef.current.contains(e.target as Node)) {
       
  //       if (replyBoxRef.current) {
  //       setShowReplyBox(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [replyBoxRef]); // 빈 의존성 배열을 사용하여 마운트 시에만 이벤트 리스너를 추가하도록 합니다.



  const [comment, setComment] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   // 입력창에 텍스트가 변경될 때 호출될 함수
   const handleInputChange = (event:any) => {
    setComment(event.target.value);
    console.log("comment"+comment);
    if (comment.trim()!== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    <div className={styles.articleComments}>
      <h3>댓글 0</h3>
      <div className={styles.writeArea}>
        <div id="btn_add_comment" style={{ display: 'none' }}>
          <div className={styles.replyArea}>
            <button type="button" className={styles.btnReply} >댓글을 남겨주세요.</button>
          </div>
        </div>
        <div className={styles.form}>
          <div id="comment_apply" style={{ display: 'block' }}>
            <div className={styles.replyArea}>
              <form id="comment_fo" name="comment_fo" encType="multipart/form-data">
                <div className={styles.replyIng}>
                  <span className={styles.attachFile}>
                    <label htmlFor="inpfile">
                      <i className={styles.blind}>파일 첨부하기</i>
                      <CameraAltIcon/>
                    </label>
                    <input id="inpfile" type="file" name="file" accept="image/gif, image/jpeg, image/png" />
                  </span>
                  <div className={styles.txtara}>
                    <textarea id="content" name="content"  onChange={handleInputChange} placeholder="댓글을 남겨주세요." />
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
                      <button type="button" disabled={isButtonDisabled} className={styles.btnPost}>등록</button>
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
            {comments.map((comment) => (
                <div key={comment.id.toString()} id={comment.id.toString()} className={`${styles.wrapComment} ${styles.commentArea}`}>
                  {/* 왜 id는 number 타입이면 오류? */}
                    <p className={styles.name}>
                        <Link href="/kr/company/LG%20HelloVision/"className={styles.point}>LG HelloVision
                        </Link>
                    </p>
                    <p className={styles.cmtTxt}>{comment.text}</p>
                    <div className={styles.wrapInfo}>
                        <span className={styles.date}>
                            3일
                        </span> 
                        <Link href="/like"className={styles.like}>6
                         
                        </Link>
                        <Link href="/comments"className={styles.cmt}>
                                6
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

