
"use client"

import React, { useState } from "react";

import classes from "./adaptionList.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AdaptionList( { oneData } :any){
    const {nm, age, sexdstn, entrnc_date, key } = oneData;
    
    return(
        <>
            <div className={classes.listWrapper}>
                <div className={classes.listImgContainer}>
                    <Link href={`/adapt/${key}`}>
                        <div className={classes.petImgBox}>
                            <Image 
                                src={'/img/dog.png'} 
                                width={256} 
                                height={243} 
                                alt="pet"
                                property=""
                            ></Image>
                        </div>       
                    
                    </Link>                   
                </div>
                <div className={classes.listInfoContainer}>
                    <div className={classes.petnameContainer}>
                        <Link href={`/adapt/${key}`}><span>{nm}</span></Link>
                        <span>{sexdstn}</span>
                    </div>
                    <Link href={`/adapt/${key}`}><span>{age}</span></Link>
                    <Link href={`/adapt/${key}`}><span>구조된날: {entrnc_date}</span></Link>
                </div>
            </div>
        </>
        
    )
}