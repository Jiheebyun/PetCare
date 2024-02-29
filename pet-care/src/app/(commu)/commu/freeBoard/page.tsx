import Link from "next/link";
import PetsIcon from '@mui/icons-material/Pets';
import styles from "./page.module.css";
import Image from "next/image";
import { setupServer } from 'msw/node'
// import { handlers } from './handlers'
// export const server = setupServer(...handlers)

export default async function FreeBoard() {
const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
const topics = await resp.json();

    
    return (
       <div>
       
        <section className={styles.freeBoard}>
        <h2><PetsIcon/>자유게시판<button  className={styles.create}>글쓰기</button></h2>
        <div className={styles.articleList}>

        {topics.map((topic:any)=>{
            return(
       
            <div key={topic.id} className={styles.articleListPre} >
                <div className={styles.tit}>
                    <h3><Link href="">{topic.title}</Link></h3>
                    <p className={styles.preTxt}><Link href="">{topic.body}</Link> </p>
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
            </div>)
        })}





        </div>
        </section>

       </div>
    );
}