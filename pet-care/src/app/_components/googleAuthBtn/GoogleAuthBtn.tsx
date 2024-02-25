


import React from "react";

import classes from "./GoogleAuthBtn.module.css";
import Image from "next/image";

export default function GoogleAuthBtn (){
    return(
        <>
            <div className={classes.googleBtnContainer}>
                <Image 
                    src={"/img/googleIcon.png"} 
                    alt="googleIcon" 
                    width={20}
                    height={20}
                    className={classes.googleIcon}
                ></Image>
                <button type="button"> 구글로 로그인하기</button>
            </div>
        </>
    )
}