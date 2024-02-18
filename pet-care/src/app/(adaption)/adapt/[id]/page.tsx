

"use client"

import React from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

import classes from "./page.module.css";
import Image from "next/image";

export default function listDatail({params}:any){
    const KEY = params
    console.log(KEY)

    return (
        <>
           <div className={classes.listDatailWrapper}>
                <div className={classes.listDatailHeaderContainer}>
                    <h2>활발하고 사람들에게 순한 코코</h2>
                    <div className={classes.heartContainer}>
                        <Image src={"/img/listDetail/emptyHeart.png"} width={17} height={17} alt="heart"></Image>
                        <span>저장</span>
                    </div>
                </div>

                <div>

                    <div> <h1> 이미지 부분</h1></div>
                </div>
           </div>
        </>
    )
}