
"use client"

import React, { useState } from "react";

import classes from "./adaptionList.module.css";
import ImAGE from "next/image";
import Link from "next/link";

export default function AdaptionList( { lists } :any){
    const {NM, AGE, SEXDSTN, ENTRNC_DATE, ANIMAL_NO, key } = lists;

    
    
    return(
        <>
            <div className={classes.listWrapper}>
                <div className={classes.listImgContainer}>
                    <Link href={`/adapt/${key}`}>
                        <div className={classes.petImgBox}>
                            <ImAGE 
                                src={'/img/dog.png'} 
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