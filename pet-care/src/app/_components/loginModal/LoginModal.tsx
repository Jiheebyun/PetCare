
"use client"
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'

import classes from "./LoginModal.module.css";
import Image from "next/image";
import GoogleAuthBtn from "../googleAuthBtn/GoogleAuthBtn";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { clearScreenDown } from "readline";



export default function LoginModal (){
    const loginModalRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const keyDown = (event: KeyboardEvent) => {
            const { key, ctrlKey } = event;
            if (key === "Escape") {
                router.back();
            };
        };

        window.addEventListener("keydown", keyDown);

        return () => window.removeEventListener("keydown", keyDown);
      }, []);

    
    useOnClickOutside(loginModalRef, () =>{ router.back() });
   
    const offLoginModalHandler = () =>{ router.back(); };


    return(
        <> 
            <div className={classes.loginModalBackground}>
                <div ref={loginModalRef} className={classes.loginContainer}>
                    <div className={classes.loginHeaderContainer}>
                        <div className={classes.cancelIconContainer}>
                            <Image 
                                src={"/img/XIcon.png"} 
                                width={20} 
                                height={20} 
                                alt="x-indicator"
                                onClick={offLoginModalHandler}
                            ></Image>
                        </div>
                        <h4> 로그인 또는 회원가입</h4>
                    </div>
                    <h2>펫케어에 오신 것을 환영합니다.</h2>

                    <div  className={classes.loginInputWrapper}>
                        <form className={classes.loginInputContainer}>
                            <input placeholder="이메일"></input>
                            <input placeholder="비밀번호"></input>
                            <button  className={classes.loginInputBtn} type="submit">계속</button>
                        </form>
                    </div>

                    <div className={classes.orLine}>
                        <span className={classes.orText}>또는</span>
                    </div>

                    <div>
                        <GoogleAuthBtn></GoogleAuthBtn>
                    </div>
                </div>
            </div>
        </>
        
    )
} 