
"use client"
import React, { useState } from "react";
import Image from "next/image";
import classes from "./MainlFilter.module.css";
import Link from "next/link";

export default function MainFilter (props: any) {
    const { isDogFilterOn, 
        setIsDogFilterOn, 
        isCatFilterOn, 
        setIsCatFilterOn, 
        setAdaptionData, 
        filteredDogList, 
        filteredCatList
    } = props;
    

    
    const dogFilterHandler = () => {
        setIsDogFilterOn(!isDogFilterOn);
    };

    const catFilterHandler = () => {
        setIsCatFilterOn(!isCatFilterOn);
    };

    return (
        <>
        <div className={classes.mainFilterWrapper}>
            <div className={classes.dogFilterContainer} >
                <Link className={classes.dogFilterStyle} href={''}>
                    <Image 
                        src={'/img/dogIcon.png'} 
                        width={35} 
                        height={35} 
                        alt="dog" 
                        onClick={dogFilterHandler}
                        className={isDogFilterOn ? classes.colored : ''}
                    ></Image>
                    <span 
                        className={isDogFilterOn ? classes.dogFilterOn : classes.dogFilterOff} 
                        onClick={dogFilterHandler}
                    >댕댕이</span>
                </Link>
            </div>
            <div className={classes.catFilterContainer}>
                <Link href={''}>
                    <Image 
                        src={'/img/catIcon.png'} 
                        width={35} 
                        height={35} 
                        alt="cat" 
                        onClick={catFilterHandler}
                        className={isCatFilterOn ? classes.colored : ''}
                    ></Image>
                    <span 
                        className={isCatFilterOn ? classes.catFilterOn : classes.catFilterOff}  
                        onClick={catFilterHandler}
                    >냥냥이</span>
                </Link>
            </div>
        </div>
        
        </>



    )
}