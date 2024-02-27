import React from 'react';
import tempData from '../ tempData.json';

interface FreeBoardItem {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
}

const freeBoardItems: FreeBoardItem[] = [
    {
        id: 1,
        title: "첫 번째 글입니다",
        content: "첫 번째 글 내용입니다.",
        author: "사용자1",
        createdAt: "2022-02-21",
    },
    {
        id: 2,
        title: "두 번째 글입니다",
        content: "두 번째 글 내용입니다.",
        author: "사용자2",
        createdAt: "2022-02-22",
    },
    // 추가적인 게시글 데이터 추가
];

const FreeBoardPage: React.FC = () => {
    return (
        <div>
            <h1>자유게시판</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {freeBoardItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{item.author}</td>
                            <td>{item.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FreeBoardPage;
