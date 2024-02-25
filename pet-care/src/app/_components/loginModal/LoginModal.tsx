

import React from "react";

import classes from "./LoginModal.module.css";
import Image from "next/image";
import GoogleAuthBtn from "../googleAuthBtn/GoogleAuthBtn";

export default function LoginModal (){
    //로그인 모달창 외에 부분을 클릭하면 로그인 모달 사라져야함.
    //path가 변경되면 로그인 모달이 사져라져야함. 
    //브라우저 화면이 작아졌을떄 모달창이 밀리는 현상 수정해야함.
    return(
        <>
            <div className={classes.loginModalBackground}>
                <div className={classes.loginContainer}>
                    <div className={classes.loginHeaderContainer}>
                        <div className={classes.cancelIconContainer}>
                            <Image 
                                src={"/img/XIcon.png"} 
                                width={20} 
                                height={20} 
                                alt="x-indicator"
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