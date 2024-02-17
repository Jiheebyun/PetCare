

import Image from "next/image";
import classes from "./page.module.css";
import Main from "./(adaption)/layout";
import MainNavBar from "./_components/navBar/NavBar";
import MainFilter from "./_components/mainFilter/MainFilter";
import MainAdaptionLists from "./_components/mainAdaptionLists/mainAdaptionLists";


export default function Home() {
    return (
        <>
            <div>
                <MainFilter></MainFilter>
            </div>

                <MainAdaptionLists></MainAdaptionLists>
        </>
  ); 
}
