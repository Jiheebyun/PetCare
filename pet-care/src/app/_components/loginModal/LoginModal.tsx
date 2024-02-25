

import React from "react";

import classes from "./LoginModal.module.css";

export default function LoginModal (){
    //로그인 모달창 외에 부분을 클릭하면 로그인 모달 사라져야함.
    //path가 변경되면 로그인 모달이 사져라져야함. 
    //브라우저 화면이 작아졌을떄 모달창이 밀리는 현상 수정해야함.
    return(
        <>
                <div className={classes.loginContainer}>
                    <div className={classes.loginHeaderContainer}>

                    </div>
                    <div>
                        <form>

                            <label>이메일</label>
                            <input></input>

                            <label>비밀번호</label>
                            <input></input>

                        </form>
                    </div>
                </div>
        </>
        
    )
} 