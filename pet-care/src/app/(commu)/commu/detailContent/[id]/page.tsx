"use client"
import React, { useEffect, useState } from 'react';
import styles from "./detailContent.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import postDataJson from '../../../../_components/tempDataCommu.json';
import { useSearchParams,useParams } from "next/navigation";
import Cmt from '../cmt/cmt'
export default function DetailContent(props:any) {
    
    const params = useSearchParams();
    const id =  props.params.id;

    console.log("ID??:", id); // ok
    console.log("Props:"+JSON.stringify(props));//Props:[object Object]


    // const { params } = props;
    // const id = params.id; // props에서 id 속성 가져오기
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/');

    // const posts = await response.json();
    // if (id !== null) { //이 예외처리 안해주면 오류나서 빌드가 안됨.
     // const post = posts.find((p: any) => p.id === parseInt(id));
    //}


    // URL에서 id 값을 정수로 변환하여 사용. id가 없거나, 변환할 수 없는 값이면 -1을 반환
    // const index = id ? parseInt(id, 10) - 1 : -1;
    // const post = postDataJson[index]; //ok

     // ID에 해당하는 게시물 데이터 찾기
     if (id !== null) { 
        if(id != 12){
            const selectedPost = postDataJson.find((p: any) => p.id === parseInt(id));
            console.log("selectedPost:"+JSON.stringify(selectedPost))
        
            if (selectedPost) {
                return (
                <section className={styles.container} >
                    <div className={styles.wrapperd} >
                        <div className={styles.content} >
                    
                        <div className={styles.articleViewHead} >
                            <h1>자유게시판</h1>
                            <h2>{selectedPost.title}</h2>
                            <div className={styles.name} ><span>{selectedPost.writer} </span></div>
                            <div className={styles.wrapInfo} >
                                <span className={styles.date} ><AccessTimeIcon/>{selectedPost.date}</span>
                                <span className={styles.pv} ><RemoveRedEyeIcon/>{selectedPost.read}</span>
                                <span className={styles.cmt} ><ChatBubbleIcon/>{selectedPost.cmt}</span>
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
                            <p className={styles.contentsTxt} >{selectedPost.content}</p>
                            <div className={styles.articleInfo} >
                                <div className={styles.article_info}>
                                <div className={styles.info}>
                                    <a className={styles.like}><ThumbUpOffAltIcon/>{selectedPost.like}</a>
                                    <a className={styles.cmt}><ChatBubbleIcon/>{selectedPost.cmt}</a>
                                </div>
                                
                                </div>
                            </div>
                    </div>
                    <div className={styles.articleComments} >
                        {/* <h3></h3> */}
                        <div className={styles.write_area} >
                            <div id={styles.btn_add_comment}>
                                <div className={styles.btn_reply} >
                                    <Cmt/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
                );
            }
          
        } 

        else if(id == 12){
            // Local Storage에서 데이터를 로드하고, null 체크를 수행
            const storedData = localStorage.getItem('recentPost');
            if (storedData) {
                const storedPost = JSON.parse(storedData);
                console.log('storedPost'+storedPost.title);
                const content = storedPost.content.replace(/<\/?p>/g, ''); //p태그 제거
                const selectedPost = {"title":storedPost.title,"writer":storedPost.writer, "content":content,"id":storedPost.id,"date":storedPost.date,"read":storedPost.read,"cmt":storedPost.cmt,"like":storedPost.like}

        
                return (
                <section className={styles.container} >
                    <div className={styles.wrapperd} >
                        <div className={styles.content} >
                    
                        <div className={styles.articleViewHead} >
                            <h1>자유게시판</h1>
                            <h2>{selectedPost.title}</h2>
                            <div className={styles.name} ><span>{selectedPost.writer} </span></div>
                            <div className={styles.wrapInfo} >
                                <span className={styles.date} ><AccessTimeIcon/>{selectedPost.date}</span>
                                <span className={styles.pv} ><RemoveRedEyeIcon/>{selectedPost.read}</span>
                                <span className={styles.cmt} ><ChatBubbleIcon/>{selectedPost.cmt}</span>
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
                            <p className={styles.contentsTxt} >{selectedPost.content}</p>
                            <div className={styles.articleInfo} >
                                <div className={styles.article_info}>
                                <div className={styles.info}>
                                    <a className={styles.like}><ThumbUpOffAltIcon/>{selectedPost.like}</a>
                                    <a className={styles.cmt}><ChatBubbleIcon/>{selectedPost.cmt}</a>
                                </div>
                                
                                </div>
                            </div>
                    </div>
                    <div className={styles.articleComments} >
                        {/* <h3></h3> */}
                        <div className={styles.write_area} >
                            <div id={styles.btn_add_comment}>
                                {/* <div className={styles.btn_reply} >댓글을 남겨주세요</div> */}
                                <Cmt/>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
                );
            }
        } 
}

}
