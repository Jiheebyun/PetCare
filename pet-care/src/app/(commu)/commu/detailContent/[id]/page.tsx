
import React from 'react';
import styles from "./page.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


export default function DetailContent() {
    return (
    <section className={styles.container} >
        <div className={styles.wrapperd} >
            <div className={styles.content} >
           
            <div className={styles.articleViewHead} >
                <h1>자유게시판</h1>
                <h2>강아지자랑</h2>
                <div className={styles.name} ><span>뽀삐 </span></div>
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
                <p className={styles.contentsTxt} >이번에 좀 큰집으로 이사를 가게 되어서 그동안 사진 촬영용으로 썼던 옷들을 정리하다가 랜덤박스로 판매해보려고 글을 올려봅니다~! 하의는 30,31 사이즈가 대부분이고 상의는 100-105사이즈로 이루어져 있고 스타일은 튀지 않으면서 이쁜 옷들로 제가 선별을 했습니다. 보세 옷은 일절 없고 </p>
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