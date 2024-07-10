


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
    const { adaptionLists } = props;
    const mockupData: Data[] = tempData.DATA;

    return(
        <>
            <div className={classes.adaptionListsWrapper}>
                {mockupData.map((el: Data, idx: number)=>{
                    return <AdaptionList key = {idx} list={{...el, key: idx}}></AdaptionList>
                })}
            </div>
        </>
    )
};  






// getStaticProps 와  getServerSideProps, getInitialProps 차이 공부
// nextjs14에서는 위에 있는 것들을 지원하지 않음 .. ufck..
// 참고: https://stackoverflow.com/questions/75679649/cant-use-getstaticprop-in-next-js-13
// nextJs 14 -> generateStaticParams
