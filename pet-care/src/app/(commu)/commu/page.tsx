
import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PetsIcon from '@mui/icons-material/Pets';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Image from "next/image";
import postDataJson from '../../_components/tempDataCommu.json';

interface postDataType {
    id : number; //오류. json파일엔 id값이 없기때문
    writer:string;
    title : string;
    content : string;
    date : string;
    read:number;
    cmt:number;
    like:number;
   }

export default function FreeBoard() {
    const postData:postDataType[] = postDataJson;
    return (
       <div>

       

          <section className={styles.freeBoard}>
      
            <h2><PetsIcon/><Link href="/commu/freeBoard">자유게시판</Link><Link href="/commu/freeBoard">더보기 {'>'}</Link></h2>
            {/* {postData.map((postData:any)=>{ 
             return(
                <div className={styles.freeBoardTable}>
                    <a>뿡빵이 자랑해요</a>
                    <a className={styles.bad}><ChatBubbleOutlineIcon />3</a>
                    <a className={styles.good}><ThumbUpOffAltIcon/>5</a>
                </div>
                )})} */}
                {postData
                .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)) // 날짜 내림차순 정렬
                .slice(0, 10) // 상위 10개 항목만 선택
                .map((postData) => (
                    <div key={postData.id} className={styles.freeBoardTable}>
                        <Link 
                        href={{
                            pathname: `/commu/boardDetail/${postData.id}`,
                            query: { id: `${postData.id}` },
                        }}
                       >{postData.title}</Link>
                      <Link 
                        href={{
                            pathname: `/commu/boardDetail/${postData.id}`,
                            query: { id: `${postData.id}` },
                        }}
                        ><div className={styles.bad}>
                            <ChatBubbleOutlineIcon />{postData.cmt}
                        </div>
                       </Link>
                        
                       <Link 
                        href={{
                            pathname: `/commu/boardDetail/${postData.id}`,
                            query: { id: `${postData.id}` },
                        }}
                        ><div className={styles.good}>
                            <ChatBubbleOutlineIcon />{postData.like}
                        </div>
                       </Link>

                       <Link 
                        href={{
                            pathname: `/commu/boardDetail/${postData.id}`,
                            query: { id: `${postData.id}` },
                        }}
                        ><div className={styles.good}>
                          {postData.date}
                        </div>
                       </Link>

                    </div>
                ))}
            </section>
        <section className={styles.freeBoard}>
        <h2><LibraryBooksIcon/>펫케어 뉴스</h2>
        <div className={styles.articleList}>
            <div className={styles.articleListPre} >
                <div className={styles.tit}>
                    <h3><Link href="">강아지 자랑</Link></h3>
                    <p className={styles.preTxt}><Link href="">얼른 귀엽다고 해줘</Link> </p>
                    <span className={styles.attachImg}>
                        <Link href="">
                    <Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image>
                        </Link></span>
                </div>
                <div className={styles.sub}>
                    <p className={styles.name}></p>
                    <div className={styles.wrapInfo}>
                       <Link href="">조회수</Link>
                       <Link href="">좋아요</Link>
                      <Link href="">댓글</Link>
                       <Link href="" className={styles.date}>2024.02.12</Link>
                    </div>
                </div>
            </div>
            <div className={styles.articleListPre} >
                <div className={styles.tit}>
                    <h3><Link href="">강아지 자랑</Link></h3>
                    <p className={styles.preTxt}><Link href="">얼른 귀엽다고 해줘</Link> </p>
                    <span className={styles.attachImg}>
                        <Link href="">
                    <Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image>
                        </Link></span>
                </div>
                <div className={styles.sub}>
                    <p className={styles.name}></p>
                    <div className={styles.wrapInfo}>
                       <Link href="">조회수</Link>
                       <Link href="">좋아요</Link>
                      <Link href="">댓글</Link>
                       <Link href="" className={styles.date}>2024.02.12</Link>
                    </div>
                </div>
            </div>
            <div className={styles.articleListPre} >
                <div className={styles.tit}>
                    <h3><Link href="">강아지 자랑</Link></h3>
                    <p className={styles.preTxt}><Link href="">얼른 귀엽다고 해줘</Link> </p>
                    <span className={styles.attachImg}>
                        <Link href="">
                    <Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image>
                        </Link></span>
                </div>
                <div className={styles.sub}>
                    <p className={styles.name}></p>
                    <div className={styles.wrapInfo}>
                       <Link href="">조회수</Link>
                       <Link href="">좋아요</Link>
                      <Link href="">댓글</Link>
                       <Link href="" className={styles.date}>2024.02.12</Link>
                    </div>
                </div>
            </div>
            <div className={styles.articleListPre} >
                <div className={styles.tit}>
                    <h3><Link href="">강아지 자랑</Link></h3>
                    <p className={styles.preTxt}><Link href="">얼른 귀엽다고 해줘</Link> </p>
                    <span className={styles.attachImg}>
                        <Link href="">
                    <Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image>
                        </Link></span>
                </div>
                <div className={styles.sub}>
                    <p className={styles.name}></p>
                    <div className={styles.wrapInfo}>
                       <Link href="">조회수</Link>
                       <Link href="">좋아요</Link>
                      <Link href="">댓글</Link>
                       <Link href="" className={styles.date}>2024.02.12</Link>
                    </div>
                </div>
            </div>

        </div>
        </section>

       </div>
    );
}