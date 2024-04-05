
import React, {useRef} from "react"
import classes from "./UserEditModal.module.css"; 
import Image from "next/image";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export default function UserEditModal ({ isInputModal, setIsInputModal }: any): React.ReactElement{
    const profileInputRef = useRef<HTMLDivElement>(null);

    const closedInputModal = () => { setIsInputModal(false); };
    useOnClickOutside( profileInputRef, ()=> setIsInputModal(false) );

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
                    </div>
            </div>)
            :null}
        </>
    )
}