


import React from "react";
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
  interface Props{
    body: string;
    
  }

type AdaptionType = typeof tempData

export default function MainAdaptionLists (props: any) {
    const { lists } = props;
    console.log(lists)
    const mockupData: Data[] = tempData.DATA;

    const specsFilter = (): [] => {
        return []
    };// context API 사용할지 상위 컴포넌트에서 필터를 해야할지 고려

    console.log("dd")
    
    return(
        <>
            <div className={classes.adaptionListsWrapper}>
                {mockupData.map((el,idx)=>{
                    return <AdaptionList oneData={{...el, key: idx}}></AdaptionList>
                })}
            </div>
        </>
    )
};


export async function generateStaticParams() {
    const URL = `http://openapi.seoul.go.kr:8088/6e61476b4f63303036364e454a7441/json/TbAdpWaitAnimalView/1/15/`;
    try{
        const res = await axios.get(URL);
        const listsData = res.data;
        const adaptionLists = listsData.map((building: any) => ({
            params: {
              id: building.id.toString(),
            },
          }));
        console.log(adaptionLists);
        console.log("실행됨?")

        if(adaptionLists){

            return {
                props: {
                    lists: { adaptionLists },
                    revalidate: 1
                }
            }
        };
        if (!adaptionLists) {

            return { notFound: true }
        };

    } catch(err){
        console.log(err)
    }
};




// getStaticProps 와  getServerSideProps, getInitialProps 차이 공부
// nextjs14에서는 위에 있는 것들을 지원하지 않음 .. ufck..
// 참고: https://stackoverflow.com/questions/75679649/cant-use-getstaticprop-in-next-js-13
// nextJs 14 -> generateStaticParams
