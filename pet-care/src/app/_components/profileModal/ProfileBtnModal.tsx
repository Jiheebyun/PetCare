



import React from "react";
import classes from "./ProfileBtnModal.module.css";
import Link from "next/link";




export default function ProfileBtnModal () {


    return (
        <>
            <div className={classes.profileModalWrapper}>
                <ul className={classes.modalList}>
                    <li>
                        <Link href={'/'} className={classes.LinkStyle}>회원가입</Link>

                    </li>
                    <li>
                        <Link href={'/'} className={classes.LinkStyle}>로그인</Link>
                    </li>
                    <li>
                    <Link href={'/'} className={classes.LinkStyle}>도움말 센터</Link>
                    </li>
                </ul>

            </div>
        
        </>
    )
}