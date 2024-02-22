"use client"
import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";

interface CommunityProps {
    freeBoardItems: { id: number, title: string }[];
}

export default function Community( { freeBoardItems} :CommunityProps){
    return (
        <div className={styles.community}>
            <section className={styles.freeBoard}>
                <h2> <Link href="">자유게시판</Link></h2>
                <ul>
                    {/* {freeBoardItems.map(item => (
                        <li key={item.id}>
                            <Link href={`/freeBoard/${item.id}`}>
                                <a className={styles.link}>
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    ))} */}
<li>dd
    <Link href={''}>dd
    </Link>
</li>

                </ul>
            </section>

            <section className={styles.news}>
                <h2>최신 뉴스</h2>
                <ul>
                    {/* {newsItems.map(item => (
                        <li key={item.id}>
                            <Link href={`/news/${item.id}`}>
                                <a className={styles.link}>
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    ))} */}
<li>dd  
    <Link href={''}>dd
    </Link>
</li>

                </ul>
            </section>
        </div>
    );
}