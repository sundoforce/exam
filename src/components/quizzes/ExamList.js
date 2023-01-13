import React, {useState, useEffect} from 'react';
import Disqus from "../common/Disqus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Question from "../question/Question";


const Quiz = (props) => {

    // Declare state variables to store the quiz data and the user's selected answers
    const [quizData, setQuizData] = useState(null);
    const [answers, setAnswers] = useState({});
    const [page, setPage] = useState(1);
    const [start, SetStart] = useState(props.state?.start || 1);
    const [end, SetEnd] = useState(props.end?.end || 200);
    const [showAnswer, setShowAnswer] = useState({});
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // Use the useEffect hook to retrieve the quiz data from the API when the component mounts
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://cbt-api.sdk.xyz/api/quiz/randoms/${start}/${end}`);
                const data = await response.json();
                setQuizData(data);
            } catch (err) {
                console.log(err);
                // handle error
            }
        }

        fetchData();
    }, [start, end]);

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            handleNext();
        } else if (event.key === 'ArrowLeft' ) {
            handlePrevious();
        } else if (event.key === 'Enter') {
            handleShowAnswer();
        }
    };

// ...

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
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
    function handleChange(event) {
        const {name, value} = event.target;
        setAnswers((prevAnswers) => ({...prevAnswers, [name]: value}));
    }

    // Function to handle the "Show Answer" button click
    function handleShowAnswer(questionId, answer) {
        setShowAnswer((prevShowAnswer) => ({...prevShowAnswer, [questionId]: answer}));
    }

    // Function to handle the "Submit" button click
    function handleSubmit() {
        setIsQuizFinished(true);
    }
    // Render the quiz questions
    return (
        <form>
            {quizData.slice((page - 1), page).map((question) => {
                return <Question question={question} handleChange={handleChange} handleShowAnswer={handleShowAnswer} handleSubmit={handleSubmit} answers={answers} showAnswer={showAnswer} />
            })}
            {page > 1 && <button type="button" onClick={handlePrevious}>Previous</button>}
            {page < numPages && <button type="button" onClick={handleNext}>Next</button>}
            {/*<button type="submit">Check answers</button>*/}

        </form>
    );

    // Function to handle changes to the radio buttons
    function handleChange(event) {
        const {name, value} = event.target;
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
