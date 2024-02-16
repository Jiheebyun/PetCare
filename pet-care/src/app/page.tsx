

import Image from "next/image";
import classes from "./page.module.css";
import Main from "./(adaption)/layout";
import MainNavBar from "./_components/navBar/NavBar";
import MainFilter from "./_components/mainFilter/MainFilter";


export default function Home() {
    return (
        <>
            <div>
                <MainFilter></MainFilter>
            </div>

            <h3>Content 부분입니다.</h3>
        </>
  ); 
}
