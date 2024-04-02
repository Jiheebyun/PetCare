"use client"
import React, { useState } from 'react';
import Link from "next/link";
import PetsIcon from '@mui/icons-material/Pets';
import styles from "./page.module.css";
import ImageInsert from "../../../_components/imageInsert"
import postDataJson from '../../../_components/tempDataCommu.json';
import Image from 'next/image';
// import dogIcon from '/img/dogIcon.png'
 interface postDataType {
  id : number; //오류. json파일엔 id값이 없기때문
  title : string;
  content : string;
  date : string;
  read:number;
  cmt:number;
  like:number;
  category:string;
 }
export default function FreeBoard() {

const postData:postDataType[] = postDataJson;

const getImageSrc = (category:any) => {
    switch (category) {
      case '강아지':
        return '/img/dogIcon.png';
      case '고양이':
        return '/img/catIcon.png';

      default:
        return '/img/dogIcon.png';
    }
  };
  const [selectedCategory, setSelectedCategory] = useState('');

  const resetFilter = () => {
    setSelectedCategory('');
  }
  const handleCategoryClick = (category:any) => {
    setSelectedCategory(category);
  };
  //강아지, 고양이 필터
  const filteredPostData = selectedCategory
    ? postData.filter((post) => post.category === selectedCategory)
    : postData; //필터 선택 안됬을때는 전체 데이터 찍기


    return (
       <div>
        <section className={styles.freeBoard}>
        <h2>
            <PetsIcon/> <Link onClick={resetFilter} href="">자유게시판</Link> 
            <span className={styles.categoryFilterContainer}>
                <span><Link  onClick={() => handleCategoryClick('강아지')} href=""  className={`${styles.categoryFilter} ${selectedCategory === '강아지' ? styles.categoryFilterSelected : ''}`}>강아지</Link> </span>
                <span ><Link  onClick={() => handleCategoryClick('고양이')} href="" className={`${styles.categoryFilter} ${selectedCategory === '고양이' ? styles.categoryFilterSelected : ''}`}>고양이 </Link></span>
            </span>
            <Link href="/commu/boardCreate/">
                <button  className={styles.create}>글쓰기</button>
            </Link>
        </h2>
        <div className={styles.articleList}>
        {filteredPostData.map((postData:any)=>{ //postData필수. 안그럼 오류. map()사용할땐 각 배열 요소에 접근할 방법이 필요하기 때문
            return(
            <div key={postData.id} className={styles.articleListPre} >
                <span className={styles.categoryContainer}>
                   <span className={`${postData.category === '' ? styles.hidden :styles.category}`}>
                        <Link  onClick={() => handleCategoryClick(`${postData.category}`)}  href=""> 
                            <Image className={styles.icon}src={getImageSrc(postData.category)} alt="pet" width={20} height={20} />  {postData.category}
                        </Link>
                    </span>
                </span>
                <div className={styles.tit}>
                    <h3>
                        <Link 
                            href={{
                                pathname: `/commu/boardDetail/${postData.id}`,
                            }}
                            >{postData.title}
                        </Link>
                    </h3>


                    <p className={styles.preTxt}><Link href="">{postData.content}</Link> </p>
                    <span className={styles.attachImg}>
                        <Link href="">
                         <ImageInsert src={"/img/dog.png"} alt="pet" width={80} height={80}/>
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