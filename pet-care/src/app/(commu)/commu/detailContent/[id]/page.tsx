"use client"
import React, { useEffect, useState } from 'react';
import styles from "./detailContent.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import postDataJson from '../../../../_components/tempDataCommu.json';
import { useSearchParams } from "next/navigation";

export default function DetailContent(props:any) {
    // console.log("Props:"+props); // props 객체 전체를 콘솔에 출력하여 확인
    const params = useSearchParams();
    const id =  params.get('id');
    // console.log("ID:", id); // ok
    // console.log("Props:"+props);//Props:[object Object]


    // const { params } = props;
    // const id = params.id; // props에서 id 속성 가져오기
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    // const posts = await response.json();
    // const post = posts.find((p: any) => p.id === parseInt(id));

    // URL에서 id 값을 정수로 변환하여 사용. id가 없거나, 변환할 수 없는 값이면 -1을 반환
    const index = id ? parseInt(id, 10) - 1 : -1;
    const post = postDataJson[index]; //ok
    // console.log("post"+JSON.stringify(post));//ok
        
    // post가 정의되지 않았거나, 유효하지 않은 인덱스를 참조할 경우
    if (!post || index < 0 || index >= postDataJson.length) {
        return <div>ID 값이 유효하지 않거나 게시물을 찾을 수 없습니다.</div>;
    }  
    console.log("title"+post.title);//ok
    return (
    <section className={styles.container} >
        <div className={styles.wrapperd} >
            <div className={styles.content} >
           
            <div className={styles.articleViewHead} >
                <h1>자유게시판</h1>
                <h2>{post.title}</h2>
                <div className={styles.name} ><span>{id} </span></div>
                <div className={styles.wrapInfo} >
                    <span className={styles.date} ><AccessTimeIcon/>{post.date}</span>
                    <span className={styles.pv} ><RemoveRedEyeIcon/>{post.read}</span>
                    <span className={styles.cmt} ><ChatBubbleIcon/>{post.cmt}</span>
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
                <p className={styles.contentsTxt} >{post.content}</p>
                <div className={styles.articleInfo} >
                    <div className={styles.article_info}>
                     <div className={styles.info}>
                        <a className={styles.like}><ThumbUpOffAltIcon/>{post.like}</a>
                        <a className={styles.cmt}><ChatBubbleIcon/>{post.cmt}</a>
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
