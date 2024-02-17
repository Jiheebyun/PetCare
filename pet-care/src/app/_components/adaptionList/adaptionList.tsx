


import React from "react";

import classes from "./adaptionList.module.css";
import Image from "next/image";

export default function AdaptionList(){
    return(
        <>
            <div className={classes.listWrapper}>
                <div className={classes.listImgContainer}>
                    <div className={classes.petImgBox}>
                        <Image 
                            src={'/img/dog.png'} 
                            width={256} 
                            height={243} 
                            alt="pet"
                        ></Image>
                    </div>                    
                </div>


                <div className={classes.listInfoContainer}>
                    <div className={classes.petnameContainer}>
                        <span>코코</span>
                        <span>남</span>
                    </div>
                    <span>나이</span>
                    <span>구조된날: 2024.01.22</span>

                </div>

            </div>
        </>
        
    )
}