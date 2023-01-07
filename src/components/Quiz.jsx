import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const [quizData, setQuizData] = useState({});

    useEffect(() => {
        const fetchQuizData = async () => {
            const response = await fetch('https://cbt-api.sdk.xyz/api/quiz/randoms/1/6');
            const data = await response.json();
            setQuizData(data);
        }
        fetchQuizData();
    }, []);

    return (
        <div>
            <h1>{quizData.title}</h1>
            {quizData.questions && quizData.questions.map(question => (
                <div key={question.id}>
                    <h2>{question.question}</h2>
                    {question.choices.map(choice => (
                        <div key={choice.id}>
                            <input type="radio" name={question.id} value={choice.id} />
                            <label>{choice.choice}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Quiz;
