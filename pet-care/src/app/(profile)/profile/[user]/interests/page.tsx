"use client"

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import classes from './page.module.css';
// import UserEditModal from "./";
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'


export default function Interests() {
    const [ isInputModal, setIsInputModal ] = useState(false);
    const [ inputTitle, setInputTitle ] = useState('');
    const [ userData, setUserData ]: any = useState([]);
    const [ userInterestedLists, setUserInterestedLists ] = useState([])
    const router = useRouter();
    // const userID = useParams<{ tag: string; item: string }>();
    const userID = 'userid'

    const inputModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        setInputTitle(target.innerText);
        setIsInputModal(true); 
    };


    //REF:  USER INFO를 가져오는 API를 따로 커스텀 Hook을 만들어 재사용하면 좋을꺼같음
    //MongoDb Data Format: 
    // {
    //     _id: new ObjectId('661a7d99644d507daa89e292'),
    //     userName: 'jihee',
    //     email: 'test@test.com',
    //     name: 'Jihee',
    //     password: '******',
    //     reg_date: 2024-04-20T00:00:00.000Z,
    //     status: 'ON',
    //     last_access: '',
    //     interested_lists: [ [Object] ] //  하나의 객체 = 하나의 관심리스트 
    // }
    const fetchUserProfileData = async () => {
        const URL = `http://localhost:3000/api/useredit/${userID}`;
        try {
            const response = await axios.get( URL, {});
            const fetchData = response?.data.data[0];
            setUserData(fetchData);
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const executeFunctionsSequentially = async () => {
            await fetchUserProfileData();
        };

        executeFunctionsSequentially();
    }, []);

    useEffect(() => {
        const checkInterests = () => {
            console.log("Checking interests...");
            if (userData) {
                console.log(userData)
                const interestedListCount: any = userData.interestedLists?.length;
                const interests: any = userData?.interestedLists;
                console.log(interestedListCount)
                console.log(interests)
                if(interestedListCount > 0){
                    setUserInterestedLists(interests);
                };
                if(interestedListCount === 0){
                    //   관심리스트가 비어있어요 !
                };
            } else {
                console.log("userData or userData.interestedList is not available yet");
            }
        };
        if (userData) {
            checkInterests();
        }
    }, [userData]);

    //TODO 유저세션을 확인하여 로그인이 되어있는지 확인, 로그인이 되어있지 않으면 이페이지에 접근 x 
    //TODO db에서 아이디에 있는 관리심리스트 db에서 사용자 아이디에 해당하는 데이터를 호출하여 불러와야한다. 
    useEffect(()=>{
        fetchUserProfileData();
    },[])
    
    console.log(userInterestedLists)

    return (
        <>
            <div className={classes.userEditWrapper}>
                <h1>관심리스트</h1>
                <div className={classes.listsContainer}>
                    <ul className={classes.lists}>
                        { userInterestedLists.length === 0 ? 
                            <h3 style={{margin: "200px"}}> 관심 리스트가 비어있어요 !</h3>
                            :
                            userInterestedLists.map(( data: any, idx: number )=>{
                                console.log(data)
                                return (
                                <li className={classes.list} key={idx}>
                                    <div className={classes.listImgContainer}>
                                        <img 
                                            className={classes.ImgStyle}
                                            src={`https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_4751.jpg`}
                                            style={{ width: "100%", height: "150px"}}
                                        ></img>
                                    </div>
                                    <div className={classes.listInfoContainer}>
                                        <span>{`${data.name}`}</span>
                                    </div>
                                </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </>
    )
};
