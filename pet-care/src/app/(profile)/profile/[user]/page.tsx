


import React from "react"
import classes from "./page.module.css"


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
                    </div>
                </div>
                <div className={classes.profileDefailWrapper}>

                </div>
            </div>
            
        </>
    )
}