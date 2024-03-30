


import React from "react";
import classes from './page.module.css';


export default function UserEdit () {
    return (
        <>
            <div className={classes.userEditWrapper}>
                <div className={classes.userImageContainer}>
                    <div className={classes.imageSection}>
                        <div className={classes.image}>
                            <span>J</span>
                        </div>
                    </div>
                </div>
                <div className={classes.userProfileEditContainer}>
                    <h1>프로필</h1>
                    <span>프로필은 입양에 도움이 될수 있도록 반려견 또는 반려묘 입양을 원하시는 분들에 대한 입양처에 제공되는 기본정보입니다.</span>
                    <h2>second</h2>
                </div>
            </div>
        </>
    )
}