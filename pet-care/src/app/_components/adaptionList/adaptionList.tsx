
"use client"

import React, { useState } from "react";

import classes from "./adaptionList.module.css";
import ImAGE from "next/image";
import Link from "next/link";

export default function AdaptionList( { lists } :any){
    const {NM, AGE, SEXDSTN, ENTRNC_DATE, ANIMAL_NO, key, intrcn_mvp_url } = lists;

    const extractYoutubeVideoID = (url: string) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match: any= url.match(regex);
        return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : `/img/dog.png`;
    };
//유기견 상세페이지에서 영상을 가져와야하기 때문에 아이디를 추출하여 따로 넣어줘야한다. 

    return(
        <>
            <div className={classes.listWrapper}>
                <div className={classes.listImgContainer}>
                    <Link href={`/adapt/${key}`}>
                        <div className={classes.petImgBox}>
                            <ImAGE 
                                src={ extractYoutubeVideoID(intrcn_mvp_url) } 
                                width={256} 
                                height={243} 
                                alt="pet"
                                property=""
                            ></ImAGE>
                        </div>       
                    
                    </Link>                   
                </div>
                <div className={classes.listInfoContainer}>
                    <div className={classes.petnameContainer}>
                        <Link href={`/adapt/${key}`}><span>{NM}</span></Link>
                        <span>{SEXDSTN}</span>
                    </div>
                    <Link href={`/adapt/${key}`}><span>{AGE}</span></Link>
                    <Link href={`/adapt/${key}`}><span>구조된날: {ENTRNC_DATE}</span></Link>
                </div>
            </div>
        </>
        
    )
}