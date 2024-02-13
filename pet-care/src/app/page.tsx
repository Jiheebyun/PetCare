import Image from "next/image";
import styles from "./page.module.css";
import Main from "./(adaption)/layout";


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>PET CARE</h1>
      <Main></Main>
    </main>
  ); 
}
