


import React, { useState } from 'react';
import classes from './CircleProfileBtn.module.css';
import Image from 'next/image';
import Link from 'next/link';



export default function CircleProfileBtn (){
    return (
        <>
            <div className={classes.circleProfileBtnWrapper}>
                <div className={classes.circleProfileBtnContainer}>
                    <Link href={'/login'}>
                        <Image 
                            src={"/img/petCareLogo.png"}
                            alt={"logo"}
                            width={45} 
                            height={45}
                        ></Image>
                    </Link>
                </div>
            </div>
        </>
    )   
}



