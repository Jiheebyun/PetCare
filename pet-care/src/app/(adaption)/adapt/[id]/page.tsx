

"use client"


""
import React from "react";
import { useRouter } from "next/router";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";

import classes from "./page.module.css";
import Image from "next/image";

export default function listDatail({ params }: { params: string }){
    const KEY = params;
    console.log(KEY);
    //https://mycodings.fly.dev/blog/2022-09-08-all-about-nextjs-image-component :: 이미지태그 
    return (
        <>
           <div className={classes.listDatailWrapper}>
                <div className={classes.listDatailHeaderContainer}>
                    <h2>활발하고 사람들에게 순한 코코</h2>
                    <div className={classes.heartContainer}>
                        <Image
                            src={"/img/listDetail/emptyHeart.png"}
                            width={17}
                            height={17}
                            alt="heart"
                        ></Image>
                        <span>저장</span>
                    </div>
                </div>
                <div className={classes.imageWrapper}>
                    <div className={classes.leftImgContainer}>
                        <Image
                            src={'/img/listDetail/dog1.png'}
                            alt="dog"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        ></Image>
                        
                    </div>
                    <div className={classes.midImgContainer}>
                        <Image
                            src={'/img/listDetail/dog2.png'}
                            alt="dog"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        ></Image>

                    </div>
                    <div className={classes.rightImgContainer}>
                        <Image
                            src={'/img/listDetail/dog3.png'}
                            alt="dog"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        ></Image>

                    </div>
                </div>
           </div>
        </>
    )
}