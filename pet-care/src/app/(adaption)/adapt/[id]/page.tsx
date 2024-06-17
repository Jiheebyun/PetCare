

"use client"



import React from "react";
import { useRouter } from "next/router";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";

import classes from "./page.module.css";
import Image from "next/image";
import DetailListIMG from "./_components/detailListIMG/DetailListIMG";

export default function listDatail({ params }: { params: string }){
    const KEY = params;
    console.log(KEY);
    //https://mycodings.fly.dev/blog/2022-09-08-all-about-nextjs-image-component :: 이미지태그 


    const extractLocationHandler = () =>{
        const example =  "무화(마포센터-임시보호중)";

        const firstIndex = example.indexOf('(');
        const lastIndex = example.indexOf(')');
        const resultLocation = example.substring(firstIndex, lastIndex);

        return resultLocation
    };

    const interestedHandler = () => {
        //사용자의 아이디를 찾아서 해당 유기견의 정보를 db에 저장
        //interested_lists: [ { 유기견 정보 } ]
        //유기견, 또는 유기묘를 저장후에, 하트아이콘을 빨간색으로 표시 

    };

    return (
        <>
           <div className={classes.listDatailWrapper}>
                <div className={classes.listDatailHeaderContainer}>
                    <h2>활발하고 사람들에게 순한 코코</h2>
                    <div className={classes.heartContainer} onClick={interestedHandler}>
                        <Image
                            src={"/img/listDetail/emptyHeart.png"}
                            width={17}
                            height={17}
                            alt="heart"
                        ></Image>
                        <span>관심</span>
                    </div>
                </div>
                <div>
                    <DetailListIMG></DetailListIMG>
                </div>
                <div className={classes.detailInfoWrapper}>
                    <div className={classes.detailInfoContainer}>
                        <div className={classes.detailContainer}>
                                <div className={classes.eachInfo}>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/detailHelloIcon.png'} alt="name" width={40} height={40}></Image>
                                        <label>이름: {"코코"}</label>
                                    </div>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/footPrint.png'} alt="name" width={40} height={40}></Image>
                                        <label>나이: {"2살 추정"} </label>
                                    </div>
                                </div>
                                <div className={classes.eachInfo}>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/detailDogIcon.png'} alt="name" width={40} height={40}></Image>
                                        <label>품종: {"리트리버"}</label>
                                    </div>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/footPrint.png'} alt="name" width={40} height={40}></Image>
                                        <label>성별: {"수컷"} </label>
                                    </div>
                                </div>
                                <div className={classes.eachInfo}>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/detailWeightIcon.png'} alt="name" width={40} height={40}></Image>
                                        <label>체중: {"25kg"}</label>
                                    </div>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/dateIcon.png'} alt="name" width={40} height={40}></Image>
                                        <label>입소일: {"2023-12-12"} </label>
                                    </div>
                                </div>
                        </div>
                        <div className={classes.detailIntroContainer}>
                            <h2> 소개글 </h2>
                            <div className={classes.IntroContainer}>
                                <section className={classes.intro}>
                                    <p>
                                        안녕하세요.
                                        제 이름은  찹쌀(동대문센터) 예요.

                                        찹쌀이의 새하얀 털을 보고 찹쌀떡이 떠올라 지어준 이름 찹쌀이입니다.



                                        찹쌀이는 사람을 무척 좋아하는 친근하고 사랑스러운 아이에요.



                                        쓰다듬어 주는 것도 좋아하고요,



                                        사람 손을 잘 타서 센터 선생님들과 자원봉사자분들의 예쁨을 듬뿍 받고 있는 찹쌀이에요.



                                        잘 놀고 있다가도 부르면 해맑게 달려와서 똘망똘망한 눈으로 바라본답니다:)



                                        손바닥을 내밀면 앞발을 척 하고 얹어주는 야무지고 똑똑한 찹쌀이에요.



                                        이렇게 매력적인 찹쌀이에도 아픈 사연이 있지요.



                                        찹쌀이는 전 주인이 이사를 가면서 반려동물을 키울 수 없는 집이라 하여 파양된 친구에요...



                                        그럼에도 불구하고 사람에게 항상 아낌없이 애정을 주는 아이에요.



                                        미안한 마음과 고마운 마음을 동시에 들게 하는 찹쌀이...



                                        찹쌀이는 사람뿐만 아니라 다른 강아지 친구들과도 잘 어울리며,



                                        활발하고 친화력이 좋아요.



                                        게다가 여기저기 돌아다니며 노즈워크를 하는, 궁금한 게 많은 호기심 대장이구요,



                                        신남을 표현하는 꼬리 프로펠러는 늘 기본 장착이고,



                                        시종일관 밝은 모습을 보여주는 매력적인 성격을 지녔답니다!



                                        사랑스런 찹쌀이의 평생가족을 기다립니다.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className={classes.contactContainer}>
                        <div className={classes.contactInfoContainer}>
                                <h4> 서울동물복지지원센터 </h4> 
                                {/* "nm":"무화(마포센터-임시보호중)"}, */}
                            <div className={classes.contactBtnContainer}>
                                <button type="button" >입양절차 알아보기</button>
                            </div>
                            <div className={classes.adviceContainer}> 
                                <p> 입양은 신중하게 !</p>
                                <p> 책임은 끝까지 !</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}