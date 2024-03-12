
"use client"
import React from "react";
import Image from "next/image";
import classes from "./MainlFilter.module.css";
import Link from "next/link";

export default function MainFilter () {


    const dogFilterHandler = () => {
        alert('DOG FILTER');
    };

    const catFilterHandler = () => {
        alert("CAT FILTER");
    }

    return (
        <>
        <div className={classes.mainFilterWrapper}>
            <div className={classes.dogFilterContainer} >
                <Link className={classes.dogFilterStyle} href={''}>
                    <Image src={'/img/dogIcon.png'} width={35} height={35} alt="dog" onClick={dogFilterHandler}></Image>
                    <span onClick={dogFilterHandler}>댕댕이</span>
                </Link>
            </div>
            <div className={classes.catFilterContainer}>
                <Link href={''}>
                    <Image src={'/img/catIcon.png'} width={35} height={35} alt="cat" onClick={catFilterHandler}></Image>
                    <span onClick={catFilterHandler}>냥냥이</span>
                </Link>

            </div>
        </div>
        
        </>



    )
}