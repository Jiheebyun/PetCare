// Cmt.tsx
"use client"
import React, { useState,useEffect } from 'react';
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

  const toggleReplyBox = (e:any) => {
    console.log("toggleReplyBox")
    // 다른 요소의 이벤트를 방지
    e.stopPropagation(); //?
    // 대댓글 상자의 표시 상태를 토글
    setShowReplyBox(prev => !prev);
  };

  // 문서 클릭 시 대댓글 상자 숨기기
  const hideReplyBox = (event:any) => {
    //  // 이벤트가 특정 요소 내부에서 발생했는지 확인하여
    // // 바깥쪽 클릭인 경우에만 상태를 변경합니다.
    // if (event.target.closest(`.${styles.lyMore}`) === null) {
    //   setShowReplyBox(false);
    // }


    if (showReplyBox) {
      console.log(" hideReplyBox => if (showReplyBox)")
      setShowReplyBox(false);
    }
    console.log("hideReplyBox => if not (showReplyBox)")
  };

  // useEffect를 사용하여 이벤트 리스너 추가하기
  useEffect(() => {
    console.log("showReplyBox:"+showReplyBox)
    document.addEventListener('click', hideReplyBox);
    
    // 컴포넌트가 언마운트 될 때 이벤트 리스너 정리
    return () => {
        document.removeEventListener('click', hideReplyBox);
        console.log("showReplyBox:"+showReplyBox)
    };
  }, []);



  return (
    <div className={styles.articleComments}>
      <h3>댓글 0</h3>
      <div className={styles.writeArea}>
        <div id="btn_add_comment" style={{ display: 'none' }}>
          <div className={styles.replyArea}>
            <button type="button" className={styles.btnReply}>댓글을 남겨주세요.</button>
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
                    <textarea id="content" name="content" placeholder="댓글을 남겨주세요." />
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
                      <button type="button" disabled className={styles.btnPost}>등록</button>
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
                                    <Link href=""className={`${styles.more} ${styles.on}`}   onClick={toggleReplyBox}>
                                        {/* <a > */}
                                            {/* <i className="blind">메뉴 더보기</i> */}
                                        {/* </a> */}
                                    </Link>
                                   
                                    {/* 더보기  클릭후 박스 */}
                                    {showReplyBox && (
                                        <div className={styles.replyBox}>
                                           대댓글 달기
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    </div>
  );
}

