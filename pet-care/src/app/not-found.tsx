


import React from "react";

import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {

    
  return (
    <div className={classes.notFoundWrapper}>
        <div className={classes.notFoundContentContainer}>
            <div className={classes.notFoundLeftContent}>
                <h1>OOPS !</h1>
                <div className={classes.warningIconContainer} >
                    <Image 
                        src={"/img/404Warning.png"} 
                        alt="warning"
                        width={300}
                        height={300}
                    ></Image>
                </div>
                <h2>ERROR : {"에러코드 404"}</h2>
                {/* Redirect Link */}
                <h4>Here are some helpful links instead:</h4>
                <Link href="/">Home</Link>
            </div>
        </div>
    </div>
  );
};
