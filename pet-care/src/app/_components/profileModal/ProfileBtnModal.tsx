

"use client"

import React, {useRef, useEffect, useState} from "react";
import classes from "./ProfileBtnModal.module.css";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { BloomFilter } from "next/dist/shared/lib/bloom-filter";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { getSession, signOut } from "next-auth/react";

import { useSession } from "next-auth/react";

interface Props {
    isProfileModal: boolean
    setIsProfileModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function ProfileBtnModal ({setIsProfileModal, isProfileModal}: Props): React.ReactElement {
    const modalRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        async function checkSession() {
            const session = await getSession();
            setIsLoggedIn(!!session);
        };
        checkSession();
    }, []);

    useOnClickOutside(modalRef, () => { setIsProfileModal(false)});

    const offModal = () =>{ setIsProfileModal(false) };


    const handler = () =>{
        
    }

//input의 TextArea에 XSS공격을 방지하지 위해서, DomPurify를 사용하는것을 추천한다.
    return (
        <>
            <div className={classes.profileModalWrapper}>
                <ul className={classes.modalList} 
                    ref={modalRef} 
                >
                    <li>
                        {isLoggedIn ? 
                        (<Link href={'/profile/userid'} className={classes.LinkStyle} onClick={handler}>
                            <span>프로필</span>
                        </Link>)
                        :
                        (<Link href={'/login'} className={classes.LinkStyle} onClick={offModal}>
                            <span>회원가입</span>
                        </Link>)}
                    </li>
                    {isLoggedIn ? 
                    (<li>
                        <Link href={'/login'} className={classes.LinkStyle} onClick={handler}>
                        <span>관심리스트</span>
                        </Link>
                    </li>)
                    :
                    (null)}
                    <li>
                        {isLoggedIn ? 
                        (<Link href={'/login'} className={classes.LinkStyle} onClick={()=>{signOut()}}>
                            <span>로그아웃</span>
                        </Link>)
                        :
                        (<Link href={'/login'} className={classes.LinkStyle} onClick={offModal}>
                            <span>로그인</span>
                        </Link>)}
                    </li>
                    <li>
                        <Link href={'/'} className={classes.LinkStyle}>
                            <span>도움말 센터</span>
                        </Link>
                    </li>
                </ul>

            </div>
        
        </>
    )
}


// useSession을 사용하면 즉시 해당 세션과 로딩을 가져오고 세션 데이터가 가져와지면 세션과 로딩을 전부 변경할 .
// 수있다. 로그아웃해서 세션이 없다면 세션은 변경되지 않는다. 또 로딩도 변경되지 않고 유지된다.

// getSession은 새 요청을 보내서 최근 세션 데이터를 가져온다. 해당 요청에 대한 응답에 반응할 수 있다. 
// 그렇게하면 세션을 가져오는 동안 로딩 상태를 적절하게 관리하고 행동할 수 있다.

// ** useSession ** ReactJS hook that works only on client, 
// that returns states which helps you to update UI and 
// it's made on top of getSession

// ** getSession ** async function that read current cookies and returns session,
//  works both on Client and Server

