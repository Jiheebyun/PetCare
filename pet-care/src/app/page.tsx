"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import classes from "./page.module.css";
import MainFilter from "./_components/mainFilter/MainFilter";
import MainAdaptionLists from "./_components/mainAdaptionLists/mainAdaptionLists";


interface Data {
    tmpr_prtc_cn: string
    SPCS: string
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


export default function Home() {
    const [ adaptionData, setAdaptionData ] = useState<Data[]>([]);
    const [ originalAdaptionData, setOriginalAdaptionData ] = useState<Data[]>([]);
    const [ isDogFilterOn, setIsDogFilterOn ] = useState(false);
    const [ isCatFilterOn, setIsCatFilterOn ] = useState(false);
    const filteredDogList = adaptionData?.filter(data => data?.SPCS === "DOG");
    const filteredCatList = adaptionData?.filter(data => data?.SPCS === "CAT");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetchAdaptionLists();
        setAdaptionData(data);
        setOriginalAdaptionData(data);
    }


    useEffect(()=>{
        if(isDogFilterOn === true){
            setAdaptionData(filteredDogList);
        };
        if(isCatFilterOn === true){
            setAdaptionData(filteredCatList);
        };
        if((isCatFilterOn && isDogFilterOn) && (!isCatFilterOn || !isDogFilterOn)){
            fetchData();
        }
    }, [isCatFilterOn, isDogFilterOn])
    
    console.log(isDogFilterOn)
    console.log(adaptionData)
        
    console.log(filteredDogList)
    //필터를 한 데이터가 존재하지 않으면 보여줄 페이지를 만들어야함
    return (
        <>
            <div>
                <MainFilter
                    isDogFilterOn = {isDogFilterOn}
                    setIsDogFilterOn = {setIsDogFilterOn}
                    isCatFilterOn = {isCatFilterOn}
                    setIsCatFilterOn = {setIsCatFilterOn}
                    adaptionData = {adaptionData}
                    setAdaptionData = {setAdaptionData}
                    filteredDogList = {filteredDogList}
                    filteredCatList = {filteredCatList}
                ></MainFilter>
            </div>

            <MainAdaptionLists
                adaptionData = {adaptionData}
            ></MainAdaptionLists>
        </>
  ); 
}


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
