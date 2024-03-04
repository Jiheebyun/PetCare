



import React, {useRef, useEffect} from "react";
import classes from "./ProfileBtnModal.module.css";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { BloomFilter } from "next/dist/shared/lib/bloom-filter";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

interface Props {
    isProfileModal: boolean
    setIsProfileModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function ProfileBtnModal ({setIsProfileModal, isProfileModal}: Props): React.ReactElement {

    const modalRef = useRef(null);

    useOnClickOutside(modalRef, () => { setIsProfileModal(false)});

    const offModal = () =>{ setIsProfileModal(false) };

    return (
        <>
            <div className={classes.profileModalWrapper}>
                <ul className={classes.modalList} 
                    ref={modalRef} 
                >
                    <li>
                        <Link href={'/login'} className={classes.LinkStyle} onClick={offModal}>
                            <span>회원가입</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/login'} className={classes.LinkStyle} onClick={offModal}>
                            <span>로그인</span>
                        </Link>
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