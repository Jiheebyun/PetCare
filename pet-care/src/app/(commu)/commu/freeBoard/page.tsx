// "use client"
import Link from "next/link";
import PetsIcon from '@mui/icons-material/Pets';
import styles from "./page.module.css";
import ImageInsert from "../../../_components/imageInsert"
import postDataJson from '../../../_components/tempDataCommu.json';
 interface postDataType {
  id : number; //오류. json파일엔 id값이 없기때문
  title : string;
  content : string;
  date : string;
  read:number;
  cmt:number;
  like:number;
 }
export default async function FreeBoard() {

const postData:postDataType[] = postDataJson;
    return (
       <div>
     
        <section className={styles.freeBoard}>
        <h2><PetsIcon/>자유게시판<Link href="/commu/boardCreate/"><button  className={styles.create}>글쓰기</button></Link></h2>
        <div className={styles.articleList}>
        
        {postData.map((postData:any)=>{ //postData필수. 안그럼 오류. map()사용할땐 각 배열 요소에 접근할 방법이 필요하기 때문
        // {topics.map((topic:any)=>{
            return(
            <div key={postData.id} className={styles.articleListPre} >
            {/* <div key={topic.id} className={styles.articleListPre} > */}
                <div className={styles.tit}>
                    <h3><Link 
                    // onClick={() =>handleClick(`${topic.id}`)} 
                    // href={
                    //     `/commu/detailContent/${topic.id}`
                    // }
                    href={{
                        pathname: `/commu/detailContent/${postData.id}`,
                        // query: { id: `${postData.id}` },
                      }}
                    // href={{
                    //     pathname: `/commu/detailContent/${topic.id}`,
                    //     query: { id: `${topic.id}` },
                    //   }}
                    >{postData.title}</Link></h3>
                    {/* >{topic.title}</Link></h3> */}
                    <p className={styles.preTxt}><Link href="">{postData.content}</Link> </p>
                    <span className={styles.attachImg}>
                        <Link href="">
                   
                    <ImageInsert src={"/img/dog.png"} alt="pet" width={80} height={80}/>
                    {/* <Image 
                                src={'/img/dog.png'} 
                                width={80} 
                                height={80} 
                                alt="pet"
                                property=""
                            ></Image> */}
                        </Link></span>
                </div>
                <div className={styles.sub}>
                    <p className={styles.name}></p>
                    <div className={styles.wrapInfo}>
                       <Link href="">조회수 {postData.read}</Link>
                       <Link href="">좋아요 {postData.like}</Link>
                      <Link href="">댓글 {postData.cmt}</Link>
                       <Link href="" className={styles.date}>{postData.date}</Link>
                    </div>
                </div>
            </div>)
        })}





        </div>
        </section>

       </div>
    );
}