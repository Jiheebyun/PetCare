
"use client"

import React, { useState } from "react";
import classes from './page.module.css';
import UserEditModal from "./_components/userEditModal/UserEditModal";


const profileTitle = [
    { titleName: "거주지" },
    { titleName: "거주형태(주택,아파트 etc)" },
    { titleName: "직업" },
    { titleName: "관심있는 반려동물" },
    { titleName: "관심있는 반려동물 종" },
    { titleName: "관심있는 반려동물 성별" },
    { titleName: "현재 반려동물 키우고 있는지 여부" },
    { titleName: "반려견/반려묘 경험" },
    { titleName: "하루에 반려견과 같이 있을 수 있는 시간" },
    { titleName: "하루에 반려견/반려묘와 산책을 할 수 있는 시간" },
];


export default function UserEdit () {
    const [ isInputModal, setIsInputModal ] = useState(false);

    const inputHandler = () =>{
        setIsInputModal(true);
    };

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

                    <div className={classes.userProfileInputContianer}>
                        {profileTitle.map((title, idx)=>{
                            return (
                                <div className={classes.profileInput} key={idx}>
                                    <span>{title.titleName}</span>
                                    <div className={classes.profileInputLines}></div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h2>자기소개</h2>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* <UserEditModal></UserEditModal> */}
        </>
    )
}