// "use client"
import React, { useEffect, useState } from 'react';
import styles from "./page.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


export default async function DetailContent(props:any) {
    // console.log("Props:", props); // props 객체 전체를 콘솔에 출력하여 확인
    const { params } = props;
    const id = params.id; // props에서 id 속성 가져오기
    console.log("ID:", id); // id 출력
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const posts = await response.json();
    const post = posts.find((p: any) => p.id === parseInt(id));

    console.log("post:"+JSON.stringify(post))
    console.log("?"+post.title)
    return (
    <section className={styles.container} >
        <div className={styles.wrapperd} >
            <div className={styles.content} >
           
            <div className={styles.articleViewHead} >
                <h1>자유게시판</h1>
                <h2>{post.title}</h2>
                <div className={styles.name} ><span>{id} </span></div>
                <div className={styles.wrapInfo} >
                    <span className={styles.date} ><AccessTimeIcon/>2024.01.01</span>
                    <span className={styles.pv} ><RemoveRedEyeIcon/>257</span>
                    <span className={styles.cmt} ><ChatBubbleIcon/>5</span>
                    <div className={styles.info_fnc} >
                        <a className={styles.mark}></a>
                        <div className={styles.moreWp}>
                            <span>
                                <span style={{display:"none"}}>
                                    <div className={styles.lyMore}>
                                        <ul className={styles.typeIcon}>
                                            <li>링크복사<a><span className={styles.ico} ></span></a></li>
                                            <li>퍼가기<a><span className={styles.ico} ></span></a></li>
                                        </ul>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>  
           </div>
           <div className={styles.articleViewContents} >
                <p className={styles.contentsTxt} >{post.body}</p>
                <div className={styles.articleInfo} >
                    <div className={styles.article_info}>
                     <div className={styles.info}>
                        <a className={styles.like}><ThumbUpOffAltIcon/>23</a>
                        <a className={styles.cmt}><ChatBubbleIcon/>5</a>
                     </div>
                       
                    </div>
                </div>
           </div>
           <div className={styles.articleComments} >
            <h3></h3>
            <div className={styles.write_area} >
                <div id={styles.btn_add_comment}>
                    <div className={styles.btn_reply} >댓글을 남겨주세요</div>
                </div>
            </div>
           </div>
           </div>
        </div>
    </section>
    );
}
