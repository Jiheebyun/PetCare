
"use client"

import React,{ useEffect, useState } from "react";
import classes from "./mainAdaptionsLists.module.css";
import AdaptionList from "../adaptionList/adaptionList";

import tempData from '../ tempData.json';
import { mock } from "node:test";
import axios from "axios";


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
    AGE: string
    ENTRNC_DATE: string
    bdwgh: number
    ANIMAL_NO: number
    intrcn_mvp_url: string
    adp_sttus: string
    breeds: string
    intrcn_cn: string
    tmpr_prtc_sttus: string
    SEXDSTN: string
    NM: string
  }

export default function MainAdaptionLists (props: any) {
    const [adaptionData, setAdaptionData] = useState<Data[]>([]);
    const specsFilter = (): [] => {
        return []
    };// context API 사용할지 상위 컴포넌트에서 필터를 해야할지 고려

    const mockupData: Data[] = tempData.DATA;

    // useEffect(() => {
    //     async function fetchData() {
    //       const data = await fetchAdaptionLists();
    //       setAdaptionData(data);
    //     }
    //     fetchData();
    //   }, []);

    return(
        <>
            <div className={classes.adaptionListsWrapper}>
                {mockupData.map((el: Data, idx: number)=>{
                    console.log(el)
                    return <AdaptionList lists={{...el, key: idx}}></AdaptionList>
                })}
            </div>
        </>
    )
};


async function fetchAdaptionLists() {
    const URL = `http://localhost:3000/api/adaptionlists`;
    try {
      const response = await axios.get(URL);
      return response.data.data.TbAdpWaitAnimalView.row;
    } catch (err) {
      console.error(err);
      return [];
    }
  }





// getStaticProps 와  getServerSideProps, getInitialProps 차이 공부
// nextjs14에서는 위에 있는 것들을 지원하지 않음 .. ufck..
// 참고: https://stackoverflow.com/questions/75679649/cant-use-getstaticprop-in-next-js-13
// nextJs 14 -> generateStaticParams
