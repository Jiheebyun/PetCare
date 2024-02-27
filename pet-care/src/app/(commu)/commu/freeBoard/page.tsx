
import Link from "next/link";
import PetsIcon from '@mui/icons-material/Pets';
import styles from "./page.module.css";
import Image from "next/image";
import {useEffect, useState } from "react";
export default function FreeBoard() {
    const [freeBoardList, setFreeBoardList] =useState([]);
   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(json => {
            setFreeBoardList(json); // 여기서 json을 setFreeBoardList 함수에 전달
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

    
    return (
       <div>
        <section className={styles.freeBoard}>
        <h2><PetsIcon/>자유게시판<button  className={styles.create}>글쓰기</button></h2>
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