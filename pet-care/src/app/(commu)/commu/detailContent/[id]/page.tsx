
import React from 'react';
import styles from "./page.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import { useRouter } from 'next/router';
import {
    usePathname,
    useRouter,
    useSearchParams,
    useSelectedLayoutSegment,
    useSelectedLayoutSegments,
    redirect,  
    notFound,
  } from 'next/navigation';
import { GetStaticProps, GetStaticPropsContext } from 'next';

interface Topic {
    id: number;
    title: string;
    author: string;
    date: string;
    views: number;
    comments: number;
  }
  
  interface Props {
    topics: Topic;
    // topics: Topic[];
  }
  
export default function DetailContent({ topics }: Props) {
    // const router = useRouter();
  
    // if (!topics) {
    //   return <div>Loading...</div>;
    // }
  
    
    return (
    <section className={styles.container} >
        <div className={styles.wrapperd} >
            <div className={styles.content} >
           
            <div className={styles.articleViewHead} >
                <h1>자유게시판</h1>
                {/* <h2>{topics.title}</h2> */}
                <h2>제목</h2>
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

// export async function generateStaticParams() {
//     // API를 호출하여 postId 목록을 가져옵니다.
//     const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const topics: Topic[] = await resp.json();
  
//     // postId 목록에서 params 객체의 배열을 생성합니다.
//     const paths = topics.map((topic) => ({
//       params: { postId: String(topic.id) }, // params로 사용할 수 있도록 String으로 변환합니다.
//     }));
  
//     return {
//       paths,
//       fallback: false,
//     };
//   }

// export async function generateMetadata({ params }: any) {
//   // params에는 동적으로 전달된 postId가 포함됩니다.
//   // params의 타입은 { [key: string]: string } 형태입니다.
//   const postId = params?.postId;

//   // postId에 해당하는 데이터를 가져오는 로직을 구현합니다.
//   // 여기서는 API를 통해 해당 id와 일치하는 데이터를 가져오도록 합니다.
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//   const topic: Topic = await resp.json();

//   return {
//     props: {
//       topic,
//     },
//   };
// }