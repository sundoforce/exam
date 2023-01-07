import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizScreen = () => {
    const [quiz, setQuiz] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axios.get('https://cbt-api.sdk.xyz/api/quiz/randoms/1/10');
                setQuiz(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQuiz();
    }, []);

    if (!quiz) {
        return <div>Loading...</div>;
    }

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const handleCheckAnswer = () => {
        if (selectedAnswer === quiz.answer) {
            alert('Correct answer!');
        } else {
            alert('Incorrect answer');
        }
    };


    return (
        <div>
            <h1>Quiz</h1>
            {quiz.map((q, index) => (
                <div key={index}>
                    <h2>{q.title}</h2>
                    <div>
                        {q.passage_a && (
                            <div>
                                <input type="radio" name="passage" value={q.passage_a} />
                                <label>{q.passage_a}</label>
                            </div>
                        )}
                        {q.passage_b && (
                            <div>
                                <input type="radio" name="passage" value={q.passage_b} />
                                <label>{q.passage_b}</label>
                            </div>
                        )}
                        {q.passage_c && (
                            <div>
                                <input type="radio" name="passage" value={q.passage_c} />
                                <label>{q.passage_c}</label>
                            </div>
                        )}
                        {q.passage_d && (
                            <div>
                                <input type="radio" name="passage" value={q.passage_d} />
                                <label>{q.passage_d}</label>
                            </div>
                        )}
                        {q.passage_e && (
                            <div>
                                <input type="radio" name="passage" value={q.passage_e} />
                                <label>{q.passage_e}</label>
                            </div>
                        )}
                        {q.passage_f && (
                            <div>
                                <input type="radio" name="passage" value={q.passage_f} />
                                <label>{q.passage_f}</label>
                            </div>
                        )}
                    </div>
                    <p>Correct answer: {q.answer}</p>
                    <p>Answer choices: {q.answer_candidates}</p>
                    <p>{q.description}</p>
                    <button type="button">Check Answer</button>
                </div>
            ))}
        </div>
    );
};

export default QuizScreen;
