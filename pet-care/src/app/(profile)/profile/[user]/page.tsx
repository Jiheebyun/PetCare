


import React from "react"
import classes from "./page.module.css"
import Link from "next/link"


export default function UserProfile (){



    return (
        <>
            <div className={classes.userProfileWrapper} >
                <div className={classes.profileTagWrapper}>
                    <div className={classes.userNameWrapper}>
                        <div className={classes.userNameLetterImgContainer}>

                        </div>
                        <div className={classes.userNameContainer}>
                            <span>User Name</span>

                        </div>
                    </div>

                    <div className={classes.userSignedInWrapper}>
                        <h2>1</h2>
                        <span>가입한지</span>
                    </div>
                </div>
                <div className={classes.profileDefailWrapper}>
                    <h2>User님, 소개</h2>
                    <Link href={'lwfj/useredit'}>
                        <button 
                            className={classes.userInfoEditBtn}
                        >프로필 수정하기</button>
                    </Link>
                    <div className={classes.userIntroduceContainer}>
                        <span>반려견 경험:</span>
                        <span>반려견과 같이 있을수 하루 시간:</span>
                        <span>하루에 반려견과 산책할수 있는 시간:</span>
                    </div>

                </div>
            </div>
            
        </>
    )
}