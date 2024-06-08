"use client"

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import classes from './page.module.css';
// import UserEditModal from "./";
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'


export default function Interests() {
    const [ isInputModal, setIsInputModal ] = useState(false);
    const [ inputTitle, setInputTitle ] = useState('');
    const [ userData, setUserData ] = useState({});
    const router = useRouter();
    // const userID = useParams<{ tag: string; item: string }>();
    const userID = 'userid'

    const inputModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        setInputTitle(target.innerText);
        setIsInputModal(true); 
    };

    const fetchUserProfileData = async () => {
        const URL = `http://localhost:3000/api/useredit/${userID}`;
        try {
            const response = await axios.get( URL, {});
            const fetchData = response?.data.data[0];
            setUserData(fetchData);
        }
        catch (err) {
            console.error(err);
        }
    };

    //유저세션을 확인하여 로그인이 되어있는지 확인, 로그인이 되어있지 않으면 이페이지에 접근 x 
    useEffect(()=>{
        fetchUserProfileData();
    },[])

    return (
        <>
            <div className={classes.userEditWrapper}>
                <h1>THIS IS Interested List's Page       
                </h1>
                {/* <div className={classes.userImageContainer}>
                    <div className={classes.imageSection}>
                        <div className={classes.image}>
                            <span>J</span>
                        </div>
                    </div>
                </div> */}
                {/* <div className={classes.userProfileEditContainer}>
                    <h1>프로필</h1>
                    <span>프로필은 입양에 도움이 될수 있도록 반려견 또는 반려묘 입양을 원하시는 분들에 대한 입양처에 제공되는 기본정보입니다.</span>

                    <div className={classes.userProfileInputContianer}>
                    
                    </div>
                    <div className={classes.userIntroWrapper}>
                        <h2>자기소개</h2>
                        <div className={classes.userIntroContainer}>
                            <span> 자기 소개를 넣어주세요 !</span>
                            <span
                                className={classes.userIntroInput}
                                onClick={inputModalHandler}
                            > 자기소개 작성하기</span>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* {isInputModal ?
                (<UserEditModal
                    inputTitle ={inputTitle}
                    setIsInputModal={setIsInputModal}
                    isInputModal={isInputModal}
                    userData={userData}
                    setUserData={setUserData}
                 ></UserEditModal>)
                : null} */}
        </>
    )
}
