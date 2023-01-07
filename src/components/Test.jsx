import React, { useState, useEffect } from 'react';

function TestPage() {
    const [questions, setQuestions] = useState([]);
    function checkAnswer(correctAnswer) {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;

        if (selectedAnswer === correctAnswer) {
            document.querySelector(`input[value="${correctAnswer}"]`).checked = true;
        }
    }

    useEffect(() => {
        async function fetchQuestions() {
            const response = await fetch('https://cbt-api.sdk.xyz/api/quiz/randoms/1/2');
            const data = await response.json();
            setQuestions(data);
        }

        fetchQuestions();
    }, []);

    // Render the test questions
    return (
        <div>
            {questions.map(question => (
                <div key={question.title}>
                    <p>{question.title}</p>
                    <div>
                        <input type="radio" name="answer" value="A" />
                        {question.passage_a}
                    </div>
                    <div>
                        <input type="radio" name="answer" value="B" />
                        {question.passage_b}
                    </div>
                    <div>
                        <input type="radio" name="answer" value="C" />
                        {question.passage_c}
                    </div>
                    <button onClick={() => checkAnswer(question.answer)}>
                        Check Answer
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TestPage;
