

"use client"



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";

import classes from "./page.module.css";
import Image from "next/image";
import DetailListIMG from "./_components/detailListIMG/DetailListIMG";

import tempData from "../../../_components/ tempData.json";

export default function listDatail({ params }: { params: string }){
    const [ userData, setUserData ] = useState([]);
    const userID = 'userid'
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

    console.log(tempData)
    const fetchUserProfileData = async () => {
        const URL = `http://localhost:3000/api/useredit/${userID}`;
        try {
            const response = await axios.get( URL, {});
            const fetchData: any = [response?.data.data[0]];
            setUserData(fetchData);
        }
        catch (err) {
            console.error(err);
        }
    };
    useEffect(()=>{
        fetchUserProfileData();
    },[])

    console.log(userData)

    /**
     * extractTextTitle()
     *
     * @param {string} content 유기견 정보에서 intrcn_cn 값
     * @return {string} text만 추출하여 Title으로 사용
     */
    const extractTextTitle = () => {
        const content = `<p>﻿<span style="font-size: 11pt;">사람을 좋아하는 작은 바둑이 강아지 계피예요~</span></p><p><span style="font-size: 11pt;"><br></span></p><p id="SE-b9ef34af-8712-4f2e-83ce-d6dd4987c9f5" class="se-text-paragraph se-text-paragraph-align-left se-is-text-paragraph-block-selected" style="line-height: 1.6;"><span id="SE-5c7e7574-ef11-4c8c-a9fa-d0bc9d22cb20" class="se-ff-system se-fs15 __se-node"></span></p><p id="SE-2c9ce5f8-79a4-42f6-8c23-29c13abcc45e" class="se-text-paragraph se-text-paragraph-align-left se-is-text-paragraph-block-selected" style="line-height: 1.6;"><span id="SE-35a82a00-30b6-4dfc-88b8-59a6737d1618" class="se-ff-system se-fs15 __se-node">센터 입소당시 골반뼈가 다 튀어나와 보일정도로 너무 너무 마른 몸을 지녔던 계피는 </span></p><p id="SE-518f1024-eac9-4abe-978f-cc991cd5db06" class="se-text-paragraph se-text-paragraph-align-left se-is-text-paragraph-block-selected" style="line-height: 1.6;"><span id="SE-2542299b-43d4-4afc-84e1-f511a1fddc74" class="se-ff-system se-fs15 __se-node">열심히 밥먹고 살을 찌우기위해 노력중이랍니다!</span></p><p id="SE-518f1024-eac9-4abe-978f-cc991cd5db06" class="se-text-paragraph se-text-paragraph-align-left se-is-text-paragraph-block-selected" style="line-height: 1.6;"><span class="se-ff-system se-fs15 __se-node"><br></span></p><p id="SE-d8be06b5-e769-434d-b9df-637e531854e7" class="se-text-paragraph se-text-paragraph-align-left se-is-text-paragraph-block-selected" style="line-height: 1.6;"><span id="SE-520ae476-da1f-.....`;
        const regex = /<p\b[^>]*>(.*?)<\/p>/i;
        const match = content.match(regex);
        
        if (match) {
          let pContent = match[1];
          pContent = pContent.replace(/(<span\b)([^>]*)(style="[^"]*")([^>]*>)/gi, '$1$2$4');
          pContent = pContent.replace(/<\/?span[^>]*>/gi, '');
        
          return pContent
        } else {

          return <p>사랑스러운 댕댕이</p>
        }
    };

    const interestedHandler = () => {
        //api/adapt/[유기견 정보]
        //사용자의 아이디를 찾아서 해당 유기견의 정보를 db에 저장
        //interested_lists: [ { 유기견 정보 } ]
        //유기견, 또는 유기묘를 저장후에, 하트아이콘을 빨간색으로 표시 

        //api 통해서 가져오는 유기견 데이터에서 ANIMAL_NO라는 데이터를 유니크한 키로 사용이 가능할지 확인
        //만약 유니크한 키라면 ANIMAL_NO를 사용하여 사용자가 관심버튼을 눌렀는지 여부를 빨간색으로 표시가 가능할거 같음
        if(userData.length === 1){
            //몽고 db에 해당 유저아이디를 찾아 
            // interested_lists: [ { 유기견 정보 } ] 넣어줘야한다.
        };
        if(userData.length === 0){
            //user데이터가 존재하지 않으면 관심을 클릭할수 없음. -> 로그인, 또는 회원가입 요구 
        };
    };


    return (
        <>
           <div className={classes.listDatailWrapper}>
                <div className={classes.listDatailHeaderContainer}>
                    <h2>{ extractTextTitle() }</h2>
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