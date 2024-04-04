



import React from "react"
import classes from "./UserEditModal.module.css"; 
import Image from "next/image";

export default function UserEditModal ({ isInputModal, setIsInputModal }: any): React.ReactElement{



    const closedInputModal = () => { 
        setIsInputModal(false);
    }

    return (
        <>
            {isInputModal ? 
            (<div className={classes.profileTextModalContainer}>
                    <div className={classes.TextInput}>
                        <div className={classes.cancelBtnContainer} onClick={closedInputModal}>
                        <Image 
                            src={'/img/cancelIcon.png'} 
                            alt="cancelButton" 
                            width={25} 
                            height={25}></Image>
                        </div>
                    </div>
            </div>)
            :null}
        </>
    )
}