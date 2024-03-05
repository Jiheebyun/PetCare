
"use client"
import React, { FormEvent, FormEventHandler, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'

import classes from "./LoginModal.module.css";
import Image from "next/image";
import GoogleAuthBtn from "../googleAuthBtn/GoogleAuthBtn";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { clearScreenDown } from "readline";

import {signIn, useSession} from "next-auth/react";



export default function LoginModal (){
    const loginModalRef = useRef(null);
    const [ message, setMessage ] = useState('');
    const {data: session, status} = useSession();
    const router = useRouter();



    console.log(session)
 

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


    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string; // 이메일 입력란의 값
        const password = formData.get('password') as string; // 비밀번호 입력란의 값

        try{
            await signIn('credentials', {email: email, password: password, redirect: false})
            router.replace('/')
            console.log('good')
        } catch(err) {
            console.error(err);
            setMessage('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
    };


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
                        <form onSubmit={onSubmit} className={classes.loginInputContainer}>
                            <input id={'email'} name="email" placeholder="이메일" type="email" autoComplete="on"></input>
                            <input id={'password'} name="password" placeholder="비밀번호" type="password" autoComplete="on"></input>
                            <button  
                                className={classes.loginInputBtn} 
                                type="submit"    
                            >계속</button>
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