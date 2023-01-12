import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../common/Header";

const QuizList = () => {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        const fetchQuizData = async () => {
            const response = await fetch('https://cbt-api.sdk.xyz/api/quizs');
            const data = await response.json();
            setQuizData(data);
        }
        fetchQuizData();
    }, []);

    return (

        <div>
            <Header/>
            {quizData.map(quiz => (
                <div key={quiz.id}>
                    <Link to={`/exam/index`}>
                        <h2>{quiz.title}</h2>
                    </Link>
                    <p>{quiz.description}</p>
                </div>
            ))}
        </div>
    );
}

export default QuizList;
