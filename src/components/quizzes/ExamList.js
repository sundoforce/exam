import React, { useState, useEffect } from 'react';

function Quiz() {
    // Declare state variables to store the quiz data and the user's selected answers
    const [quizData, setQuizData] = useState(null);
    const [answers, setAnswers] = useState({});
    const [page, setPage] = useState(1);


    // Use the useEffect hook to retrieve the quiz data from the API when the component mounts
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://cbt-api.sdk.xyz/api/quiz/randoms/1/200');
            const data = await response.json();
            setQuizData(data);
        }
        fetchData();
    }, []);

    // Render the quiz if the data has been retrieved, otherwise display a loading message
    if (!quizData) {
        return <p>Loading quiz...</p>;
    }

    // Calculate the number of pages based on the number of questions
    const numPages = Math.ceil(quizData.length / 1);

    // Function to handle the "Previous" button click
    function handlePrevious() {
        setPage((prevPage) => prevPage - 1);
    }

    // Function to handle the "Next" button click
    function handleNext() {
        setPage((prevPage) => prevPage + 1);
    }
    // Render the quiz questions
    return (
        <form>
            {/*{quizData.slice((page - 1) * 10, page * 10).map((question) => {*/}
            {quizData.slice((page - 1), page).map((question) => {
                return (
                    <div key={question.id}>
                        <h3>{question.title}</h3>
                        {question.passage_a && <p><input type="radio" name={question.id} value="A" checked={answers[question.id] === 'A'} onChange={handleChange} /> A. {question.passage_a}</p>}
                        {question.passage_b && <p><input type="radio" name={question.id} value="B" checked={answers[question.id] === 'B'} onChange={handleChange} /> B. {question.passage_b}</p>}
                        {question.passage_c && <p><input type="radio" name={question.id} value="C" checked={answers[question.id] === 'C'} onChange={handleChange} /> C. {question.passage_c}</p>}
                        {question.passage_d && <p><input type="radio" name={question.id} value="D" checked={answers[question.id] === 'D'} onChange={handleChange} /> D. {question.passage_d}</p>}
                        {question.passage_e && <p><input type="radio" name={question.id} value="E" checked={answers[question.id] === 'E'} onChange={handleChange} /> E. {question.passage_e}</p>}
                        {question.passage_f && <p><input type="radio" name={question.id} value="F" checked={answers[question.id] === 'F'} onChange={handleChange} /> F. {question.passage_f}</p>}
                        <button type="button" onClick={() => handleShowAnswer(question.id, question.answer)}>Show answer</button><br/>
                        {page > 1 && <button type="button" onClick={handlePrevious}>Previous</button>}
                        {page < numPages && <button type="button" onClick={handleNext}>Next</button>}
                    </div>
                );
            })}
            <button type="submit">Check answers</button>
        </form>
    );
    // Function to handle changes to the radio buttons
    function handleChange(event) {
        const { name, value } = event.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value
        }));
    }

    // Function to handle the "Show answer" button click
    function handleShowAnswer(questionId, correctAnswer) {
        // Enable the correct answer and highlight it in green
        correctAnswer.split('').forEach((answer) => {
            document.querySelector(`input[name="${questionId}"][value="${answer}"]`).disabled = false;
            document.querySelector(`input[name="${questionId}"][value="${answer}"]`).parentElement.style.color = 'green';
        });
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Compare the user's answers to the correct answers and display the results
        quizData.forEach((question) => {
            const userAnswer = answers[question.id];
            const correctAnswer = question.answer;
            // Check if the user's answer is correct
            if (correctAnswer.includes(userAnswer)) {
                // Highlight the correct answer in green
                document.querySelector(`input[name="${question.id}"][value="${userAnswer}"]`).parentElement.style.color = 'green';
            } else {
                // Highlight the incorrect answer in red
                document.querySelector(`input[name="${question.id}"][value="${userAnswer}"]`).parentElement.style.color = 'red';
            }
        });
    }
}

export default Quiz;
