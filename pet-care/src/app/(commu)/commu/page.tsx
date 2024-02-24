"use client";
import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PetsIcon from '@mui/icons-material/Pets';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Image from "next/image";

interface CommunityProps {
    freeBoardItems: { id: number, title: string }[];
}

export default function Community({ freeBoardItems }: CommunityProps) {
    return (
        <div className={styles.community}>
            <section className={styles.freeBoard}>
                <h2><PetsIcon/><Link href="">자유게시판</Link><a>더보기 {'>'}</a></h2>
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
                <h2><LibraryBooksIcon/><Link href="">펫케어 뉴스</Link><a>더보기 {'>'}</a></h2>
                <ul className={styles.news}>
                    <li className={styles.newsList}>
                        <a>
                            <div>
                                <span><strong>뿡빵이 자랑해요</strong></span>
                                <div className={styles.newsListDate}>2024.02.15</div>
                            </div>
                            <div className={styles.newListImg}><Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image></div>
                        </a>
                    </li>
                    <li className={styles.newsList}>
                        <a>
                            <div>
                                <span><strong>뿡빵이 자랑해요</strong></span>
                                <div className={styles.newsListDate}>2024.02.15</div>
                            </div>
                            <div className={styles.newListImg}><Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image></div>
                        </a>
                    </li>
                    <li className={styles.newsList}>
                        <a>
                            <div>
                                <span><strong>뿡빵이 자랑해요</strong></span>
                                <div className={styles.newsListDate}>2024.02.15</div>
                            </div>
                            <div className={styles.newListImg}><Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image></div>
                        </a>
                    </li>
                    <li className={styles.newsList}>
                        <a>
                            <div>
                                <span><strong>뿡빵이 자랑해요</strong></span>
                                <div className={styles.newsListDate}>2024.02.15</div>
                            </div>
                            <div className={styles.newListImg}><Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image></div>
                        </a>
                    </li>


                </ul>


{/*                 
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
                </div> */}
            </section>
        </div>
    );
}