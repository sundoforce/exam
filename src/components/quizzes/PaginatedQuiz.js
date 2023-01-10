import React, { useState, useEffect } from 'react';

function PaginatedQuiz() {
    // Declare state variables to store the quiz data and the current page number
    const [quizData, setQuizData] = useState(null);
    const [page, setPage] = useState(1);

    // Use the useEffect hook to retrieve the quiz data from the API when the component mounts
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://cbt-api.sdk.xyz/api/quiz/randoms/1/10');
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
    const numPages = Math.ceil(quizData.length / 10);

    // Function to handle the "Previous" button click
    function handlePrevious() {
        setPage((prevPage) => prevPage - 1);
    }

    // Function to handle the "Next" button click
    function handleNext() {
        setPage((prevPage) => prevPage + 1);
    }

    // Render the quiz questions and pagination controls
    return (
        <div>
            {quizData.slice((page - 1) * 10, page * 10).map((question) => {
                // Render the quiz questions as before
            })}
            {page > 1 && <button type="button" onClick={handlePrevious}>Previous</button>}
            {page < numPages && <button type="button" onClick={handleNext}>Next</button>}
        </div>
    );
}

export default PaginatedQuiz;
