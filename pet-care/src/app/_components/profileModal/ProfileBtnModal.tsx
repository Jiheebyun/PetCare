



import React, {useRef, useEffect} from "react";
import classes from "./ProfileBtnModal.module.css";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { BloomFilter } from "next/dist/shared/lib/bloom-filter";

interface Props {
    isProfileModal: boolean
    setIsProfileModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function ProfileBtnModal ({setIsProfileModal, isProfileModal}: Props): React.ReactElement {

    const modalRef = useRef(null);

    //Hooks - Hooks 폴더를 따로 만들어 hooks만 관리할 예정입니다.
    const useOnClickOutside = (ref: any, handler:any) => {

        useEffect(() => {
                const listener = (e: Event): void => {
                    if (!ref.current || ref.current.contains(e.target)) {
                        return
                    };
                    handler(false);
                  };
                  document.addEventListener("click", listener);
                  return () => {
                    document.removeEventListener("click", listener);
                  };
        }, [ref, handler]);
    };

    useOnClickOutside(modalRef, () => { setIsProfileModal(false)});

    return (
        <>
            <div className={classes.profileModalWrapper}>
                <ul className={classes.modalList} 
                    ref={modalRef} 
                >
                    <li>
                        <Link href={'/'} className={classes.LinkStyle}>회원가입</Link>

                    </li>
                    <li>
                        <Link href={'/login'} className={classes.LinkStyle}>로그인</Link>
                    </li>
                    <li>
                    <Link href={'/'} className={classes.LinkStyle}>도움말 센터</Link>
                    </li>
                </ul>

            </div>
        
        </>
    )
}