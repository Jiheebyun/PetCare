


import React from "react";

import classes from "./mainAdaptionsLists.module.css";
import AdaptionList from "../adaptionList/adaptionList";

import tempData from '../ tempData.json';
import { mock } from "node:test";


interface Root {
    DESCRIPTION: Description
    DATA: Data[]
  }
 interface Description {
    ADP_STTUS: string
    BREEDS: string
    TMPR_PRTC_STTUS: string
    AGE: string
    SPCS: string
    ANIMAL_NO: string
    BDWGH: string
    NM: string
    INTRCN_CN: string
    ENTRNC_DATE: string
    INTRCN_MVP_URL: string
    SEXDSTN: string
    TMPR_PRTC_CN: string
  }
 interface Data {
    tmpr_prtc_cn: string
    spcs: string
    age: string
    entrnc_date: string
    bdwgh: number
    animal_no: number
    intrcn_mvp_url: string
    adp_sttus: string
    breeds: string
    intrcn_cn: string
    tmpr_prtc_sttus: string
    sexdstn: string
    nm: string
  }

type AdaptionType = typeof tempData

export default function MainAdaptionLists () {
    const mockupData: Data[] = tempData.DATA;

    const specsFilter = (): [] => {
        return []
    };// context API 사용할지 상위 컴포넌트에서 필터를 해야할지 고려
    
    return(
        <>
            <div className={classes.adaptionListsWrapper}>
                {mockupData.map((el,idx)=>{
                    return <AdaptionList oneData={{...el, key: idx}}></AdaptionList>
                })}
            </div>
        </>
    )
}