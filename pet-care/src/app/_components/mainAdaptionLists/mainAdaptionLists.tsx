


import React from "react";

import classes from "./mainAdaptionsLists.module.css";
import AdaptionList from "../adaptionList/adaptionList";


export default function MainAdaptionLists () {
    
    const mockupData = [
        {},
        {},
        {},
    ]

    
    return(
        <>
            <div className={classes.adaptionListsWrapper}>
                <AdaptionList></AdaptionList>
                <AdaptionList></AdaptionList>
                <AdaptionList></AdaptionList>
                <AdaptionList></AdaptionList>
                <AdaptionList></AdaptionList>
                <AdaptionList></AdaptionList>
                <AdaptionList></AdaptionList>
                <AdaptionList></AdaptionList>
            </div>
        </>
    )
}