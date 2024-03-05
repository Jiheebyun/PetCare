


import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";

import classes from "./GoogleAuthBtn.module.css";
import Image from "next/image";

export default function GoogleAuthBtn (){
    // const { data: session } = useSession();
    // const router = useRouter();


    const onGoogleSubmit = () => {
        const response = signIn("google", { callbackUrl: "/" });

        console.log(response)
        
    };


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
                <button type="button" onClick={()=>{onGoogleSubmit();}}> 구글로 로그인하기</button>
            </div>
        </>
    )
}