
import React, {useRef, useState} from "react"
import classes from "./UserEditModal.module.css"; 
import Image from "next/image";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import axios from "axios";

export default function UserEditModal ({ isInputModal, setIsInputModal, inputTitle }: any): React.ReactElement{
    const [ inputContent, setInputContent ] = useState({});
    const profileInputRef = useRef<HTMLDivElement>(null);

    const closedInputModal = () => { setIsInputModal(false); };
    useOnClickOutside( profileInputRef, ()=> setIsInputModal(false) );


    const saveHanlder = async () => {
        const URL = ''
        try {
            const response = await axios.post( URL, { inputContent } );
            console.log(response);

            if(!response.data.error){
                //데이터 저장 성공
            }
            if(response.data.error){
                // 데이터 저장실해
            }   
        } catch(err){
            console.error(err);
        }        
    };


    return (
        <>
            {isInputModal ? 
            (<div className={classes.profileTextModalContainer}>
                    <div ref={profileInputRef} className={classes.TextInput}>
                        <div className={classes.cancelBtnContainer} onClick={closedInputModal}>
                        <Image 
                            src={'/img/cancelIcon.png'} 
                            alt="cancelButton" 
                            width={25} 
                            height={25}></Image>
                        </div>
                        <h2> 
                        {inputTitle}
                        </h2>
                        <p> { '여기에 상세 설명이 입력됩니다.'}</p>
                        <div className={classes.answerInputContainer}>
                            <input></input>
                        </div>

                        <div className={classes.saveButtonContainer}>
                            <button onClick={saveHanlder}> 저장</button>
                        </div>
                    </div>
            </div>)
            :null}
        </>
    )
}