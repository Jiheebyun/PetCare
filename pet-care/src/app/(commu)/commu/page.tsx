
import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PetsIcon from '@mui/icons-material/Pets';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Image from "next/image";
export default function FreeBoard() {
    return (
       <div>
          <section className={styles.freeBoard}>
                <h2><PetsIcon/><Link href="/commu/freeBoard">자유게시판</Link><Link href="/commu/freeBoard">더보기 {'>'}</Link></h2>
                <div className={styles.freeBoardTable}>
                    <a>뿡빵이 자랑해요</a>
                    <a className={styles.bad}><ChatBubbleOutlineIcon />3</a>
                    <a className={styles.good}><ThumbUpOffAltIcon/>5</a>
                </div>
                <div className={styles.freeBoardTable}>
                    <a>우리 3냥이 아깽이일때</a>
                    <a className={styles.bad}><ChatBubbleOutlineIcon />3</a>
                    <a className={styles.good}><ThumbUpOffAltIcon/>5</a>
                </div>
                <div className={styles.freeBoardTable}>
                    <a>빌라안 유기묘집 설치 캣맘 대처 어떻게 하나요?</a>
                    <a className={styles.bad}><ChatBubbleOutlineIcon />3</a>
                    <a className={styles.good}><ThumbUpOffAltIcon/>5</a>
                </div>
                <div className={styles.freeBoardTable}>
                    <a>빌라안 유기묘집 설치 캣맘 대처 어떻게 하나요?</a>
                    <a className={styles.bad}><ChatBubbleOutlineIcon />3</a>
                    <a className={styles.good}><ThumbUpOffAltIcon/>5</a>
                </div>
                <div className={styles.freeBoardTable}>
                    <a>빌라안 유기묘집 설치 캣맘 대처 어떻게 하나요?</a>
                    <a className={styles.bad}><ChatBubbleOutlineIcon />3</a>
                    <a className={styles.good}><ThumbUpOffAltIcon/>5</a>
                </div>
                <div className={styles.freeBoardTable}>
                    <a>빌라안 유기묘집 설치 캣맘 대처 어떻게 하나요?</a>
                    <a className={styles.bad}><ChatBubbleOutlineIcon />3</a>
                    <a className={styles.good}><ThumbUpOffAltIcon/>5</a>
                </div>
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