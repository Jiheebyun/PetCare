// Cmt.tsx
"use client"
import React, { useState,useEffect,useRef } from 'react';
import styles from './cmt.module.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Link from 'next/link';
export default function Cmt() {
  const [comments, setComments] = useState([
    { id: 1, text: '첫 번째 댓글입니다!' },
    { id: 2, text: '두 번째 댓글입니다!' }
  ]);

  //더보기 기능
  const [showReplyBox, setShowReplyBox] = useState(false);
  const toggleReplyBox = (): void => {
    console.log("toggleReplyBox");
    // setShowReplyBox(true);
    setShowReplyBox(prev => !prev);
  };

  // 문서 클릭 시 대댓글 상자 숨기기
  
  // const hideReplyBox = (event:any) => {
  //   // 바깥쪽 클릭인 경우에만 상태를 변경합니다.
  //   console.log("0");
  //   if (event.target.closest(`.${styles.lyMore}`) === null) {
  //     console.log("오ㅣ부클릭");
  //     setShowReplyBox((prev: boolean)=>!prev);
      
  //   }
    
  //   if (showReplyBox) {
  //     // setShowReplyBox(prev => !prev);
  //     setShowReplyBox(false);
  //   }
  // };

const moreIconRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const handleClick = (e:MouseEvent) => {
      if(moreIconRef.current && !moreIconRef.current.contains(e.target as Node)){
        // console.log("moreIconRef.current"+moreIconRef.current);
        // console.log("e.target as Node"+e.target);
        setShowReplyBox(false);
        // setShowReplyBox((prev: boolean)=>!prev);
      }
    }
    if (showReplyBox === true) {
      window.addEventListener('mousedown', handleClick);
    } else {
      window.removeEventListener('mousedown', handleClick);
    }


    window.addEventListener('mousedown', handleClick); //문제임
    return () => window.removeEventListener('mousedown', handleClick);
  }, [moreIconRef])


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
                <div key={comment.id} id="310682887" className={`${styles.wrapComment} ${styles.commentArea}`}>
                    <p className={styles.name}>
                        <Link href="/kr/company/LG%20HelloVision/"className={styles.point}>LG HelloVision
                            {/* <a ></a> */}
                        </Link>
                    </p>
                    <p className={styles.cmtTxt}>{comment.text}</p>
                    <div className={styles.wrapInfo}>
                        <span className={styles.date}>
                            {/* <i className="blind">작성일</i> */}
                            3일
                        </span> 
                        <Link href="/like"className={styles.like}>6
                            {/* <a > */}
                                {/* <i className="blind">좋아요수</i> */}
                                {/* 좋아요 */}
                            {/* </a> */}
                        </Link>
                        <Link href="/comments"className={styles.cmt}>
                            {/* <a > */}
                                {/* <i className="blind">대댓글</i> */}
                                6
                            {/* </a> */}
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
                                                        {/* <a> */}
                                                            <span className={`${styles.ico} ${styles.icoComment}`}>
                                                                <em className="blind">write comment</em>
                                                            </span>
                                                            대댓글 쓰기
                                                        {/* </a> */}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </span>

                                    {/* 더보기 아이콘 */}
                                    <Link  href=""className={`${styles.more} ${styles.on}`} onClick={(event) => { event.preventDefault(); toggleReplyBox(); }}>
                                      {showReplyBox && (
                                          <div className={styles.replyBox}  ref={moreIconRef}>
                                            대댓글 달기
                                          </div>
                                      )}
                                    </Link>
                                    {/* 더보기 내부 박스 */}
                            </div>
                        </div>



                    </div>
                </div>
            ))}
        </div>


    </div>
  );
}

