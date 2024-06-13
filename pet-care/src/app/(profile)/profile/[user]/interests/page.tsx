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

    //TODO 유저세션을 확인하여 로그인이 되어있는지 확인, 로그인이 되어있지 않으면 이페이지에 접근 x 
    //TODO db에서 아이디에 있는 관리심리스트 db에서 사용자 아이디에 해당하는 데이터를 호출하여 불러와야한다. 
    useEffect(()=>{
        fetchUserProfileData();
    },[])

    return (
        <>
            <div className={classes.userEditWrapper}>
                <h1>관심리스트</h1>
                <div className={classes.listsContainer}>
                    <ul className={classes.lists}>
                        <li className={classes.list}>
                            <div className={classes.listImgContainer}>
                                <h1> 이미지</h1>
                            </div>
                            <div className={classes.listInfoContainer}>
                                <span>{"댕댕이이름"}</span>
                            </div>
                            
                        </li>
                        <li className={classes.list}>
                            <div className={classes.listImgContainer}>
                                <h1> 이미지</h1>
                            </div>
                            <div className={classes.listInfoContainer}>
                                <span>{"댕댕이이름"}</span>
                            </div>
                            
                        </li>
                        <li className={classes.list}>
                            <div className={classes.listImgContainer}>
                                <h1> 이미지</h1>
                            </div>
                            <div className={classes.listInfoContainer}>
                                <span>{"댕댕이이름"}</span>
                            </div>
                            
                        </li>
                        <li className={classes.list}>
                            <div className={classes.listImgContainer}>
                                <h1> 이미지</h1>
                            </div>
                            <div className={classes.listInfoContainer}>
                                <span>{"댕댕이이름"}</span>
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};
