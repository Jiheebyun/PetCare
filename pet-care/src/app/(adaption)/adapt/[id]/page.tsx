
"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { usePathname, useSearchParams, useSelectedLayoutSegment } from "next/navigation";

import classes from "./page.module.css";
import Image from "next/image";
import DetailListIMG from "./_components/detailListIMG/DetailListIMG";

import tempData from "../../../_components/ tempData.json";
import { stringify } from "querystring";


interface Params {
    id: string;
}

export default function listDatail({ params }: { params: Params }){
    const [ userData, setUserData ]: any = useState([]);
    const [ listData, setListData ]: any = useState({});
    const listContentData = tempData.DATA[0].intrcn_cn;
    const userID = 'userid'
    // const animalNo = params; // 추후에 ANIMAL_NO를 넘겨줘야함
    const animalNo: any  = params.id;
    const searchParams = useSearchParams();
    const list = searchParams.get('list');
    //https://mycodings.fly.dev/blog/2022-09-08-all-about-nextjs-image-component :: 이미지태그 
    const [ isHeartRed, setIsHeartRed ] = useState(false);

    const removeHtmlTags = (htmlString : string) => {
        return htmlString.replace(/<[^>]*>?/gm, ''); 
    };

    console.log(params)
    console.log(animalNo)
    console.log(list)


    
    const extractLocationHandler = () =>{
        const example =  "무화(마포센터-임시보호중)";
        const firstIndex = example.indexOf('(');
        const lastIndex = example.indexOf(')');
        const resultLocation = example.substring(firstIndex, lastIndex);

        return resultLocation
    };

    const fetchUserProfileData = async () => {
        const URL = `http://localhost:3000/api/useredit/${userID}`;
        try {
            const response = await axios.get( URL, {});
            const fetchData: any = [response?.data.data[0]];
            setUserData(fetchData[0]);
        }
        catch (err) {
            console.error(err);
        }
    };
    
    useEffect(() => {
        const executeFunctionsSequentially = async () => {
            await fetchUserProfileData();
        };

        executeFunctionsSequentially();
    }, []);

    useEffect(() => {
        const checkInterests = () => {
            console.log("Checking interests...");
            if (userData) {
                const interestedListCount: any = userData.interestedLists?.length;
                const interests: any = userData.interestedLists;
                const checkTohaveAnimals: any = interests?.filter((animal: any, idx: number)=>{
                    return animal.interested_id === animalNo
                }) 
                if(interestedListCount > 0 && checkTohaveAnimals.length === 1){
                    setIsHeartRed(true);
                };
            } else {
                console.log("userData or userData.interestedList is not available yet");
            }
        };
        if (userData) {
            checkInterests();
        }
    }, [userData]);

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
                            src={isHeartRed ? "/img/listDetail/fullHeart.png": "/img/listDetail/emptyHeart.png"}
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
                                        <label>이름: {listData.NM}</label>
                                    </div>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/footPrint.png'} alt="name" width={40} height={40}></Image>
                                        <label>나이: {listData.AGE} </label>
                                    </div>
                                </div>
                                <div className={classes.eachInfo}>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/detailDogIcon.png'} alt="name" width={40} height={40}></Image>
                                        <label>품종: {listData.breeds}</label>
                                    </div>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/footPrint.png'} alt="name" width={40} height={40}></Image>
                                        <label>성별: {listData.SEXDSTN} </label>
                                    </div>
                                </div>
                                <div className={classes.eachInfo}>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/detailWeightIcon.png'} alt="name" width={40} height={40}></Image>
                                        <label>체중: {`${listData.bdwgh}kg`}</label>
                                    </div>
                                    <div className={classes.info}>
                                        <Image src={'/img/listDetail/dateIcon.png'} alt="name" width={40} height={40}></Image>
                                        <label>입소일: {listData.ENTRNC_DATE} </label>
                                    </div>
                                </div>
                        </div>
                        <div className={classes.detailIntroContainer}>
                            <h2> 소개글 </h2>
                            <div className={classes.IntroContainer}>
                                <section className={classes.intro}>
                                    <p>
                                        { removeHtmlTags(listContentData) }
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