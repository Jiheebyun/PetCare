


import React from "react";

import classes from "./DetailListIMG.module.css";
import Image from "next/image";


export default function DetailListIMG () {
    return (
        <>
                <div className={classes.imageWrapper}>
                    <div className={classes.imageLeftSideContainer}>
                        <div className={classes.leftImgContainer}>
                            <Image
                                src={'/img/listDetail/dog1.png'}
                                alt="dog"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            ></Image>
                        </div>
                    </div>
                    <div className={classes.imageRightSideContainer}>
                        <div className={classes.rightTopImgContainer}>
                            <Image
                                src={'/img/listDetail/dog2.png'}
                                alt="dog"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            ></Image>

                        </div>
                        <div className={classes.rightBottomImgContainer}>
                            <Image
                                src={'/img/listDetail/dog3.png'}
                                alt="dog"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            ></Image>
                        </div>
                    </div>
                </div>
        </>
    )
}