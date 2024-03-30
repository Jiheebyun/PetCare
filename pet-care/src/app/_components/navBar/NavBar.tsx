
"use client"
import React, { useState, useEffect } from "react";


import classes from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

import { useRouter, useSelectedLayoutSegments } from 'next/navigation'
import ProfileBtnModal from "../profileModal/ProfileBtnModal";
import { useSession, getSession, signOut } from "next-auth/react";
import CircleProfileBtn from "../circleProfileBtn/CircleProfileBtn";

export default function MainNavBar() {
    const [ isProfileModal, setIsProfileModal ] = useState(false);
    const segment = useSelectedLayoutSegments();
    const isAdaptionDetail = segment[1] === "adapt" || segment[1] === "profile" ? true : false;
    const [ isBottomProfileBtn, setIsBottomProfileBtn ] = useState(false);
    const {data: session, status}: any = useSession();
    const firstLetterOfId: string | undefined = session?.user?.id.substr(0,1);

    const profileModalHandler = (): void => {
        setIsProfileModal((prev: boolean)=>!prev);
    };

    useEffect(()=>{
        async function checkSession() {
            const session = await getSession();
            if(session){
                setIsBottomProfileBtn(true);
            };
        };
        checkSession();
    }, [status]);



    return (
        <>
            {isAdaptionDetail ? null :
            (<div className={classes.headerWrapper}>
                <div className={classes.NavContainer}>
                    <div className={classes.logoContainer}>
                        <div>
                            <Link href={"/"}>
                                <Image 
                                    src={"/img/petCareLogo.png"}
                                    alt={"logo"}
                                    width={55} 
                                    height={55}
                                ></Image>
                            </Link>

                        </div>
                    </div>

                    <div className={classes.navbarContainer}>
                        <div className={classes.navMenuContainer}>
                            <Link href={'/'}>입양</Link>
                            <Link href={`/commu/`}>커뮤니티</Link> 
                        </div>
                    </div>
                    <div className={classes.profileContainer}>
                        <div className={classes.textContainer}>
                            <span>사지말고 펫케어에서 입양하세요</span>
                        </div>
                        <div 
                            className={classes.profileIconContainer} 
                            onClick={()=>profileModalHandler()} 
                        >
                            <Image
                                src={'/img/profileLines.png'}
                                alt="lines"
                                width={16}
                                height={16}
                            ></Image>
                            {session ? (<h2 className={classes.userProfileBtn}>{firstLetterOfId}</h2>):
                            (<Image 
                                src={'/img/profileIcon.png'} 
                                alt="profile" 
                                width={30} 
                                height={30}   
                            ></Image>)}
                        </div>
                    </div>
                </div>

                <div className={classes.searchContainer}>
                    <div className={classes.searchBox}>
                        <input></input>
                        <div className={classes.searchBtnBox}>
                            <Image src={'/img/searchIcon.png'} alt="search" width={16} height={16} ></Image>
                        </div>
                    </div>
                </div>
                {isBottomProfileBtn ? 
                    (<div className={classes.profileMenuMobileWrapper}>
                        <div className={classes.profileMenuMobileContainer}>
                            <ul className={classes.profileMenu}>
                                <li>
                                    <Link href={"/profile/userid"}><span>프로필</span></Link>
                                </li>
                                <li>
                                    <span>관신리스트</span>
                                </li>
                                <li>
                                    <span onClick={()=>{signOut()}}>로그아웃</span>
                                </li>
                                <li>
                                    <span>도움말센터</span>
                                </li>
                            </ul>
                        </div>
                    </div>)
                    :
                    (<CircleProfileBtn></CircleProfileBtn>)}
                {isProfileModal ? 
                    <ProfileBtnModal 
                        setIsProfileModal={setIsProfileModal}
                        isProfileModal={isProfileModal}
                    ></ProfileBtnModal>
                    : null}
            </div>
        )}
        </>
    )
}