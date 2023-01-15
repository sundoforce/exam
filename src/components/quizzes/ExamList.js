import React, {useState, useEffect} from 'react';
import Question from "../question/Question";
import {useLocation} from 'react-router-dom';
import UtterancesComments from "../common/Utterance";
import Result from "./ExamResult";


const Quiz = (props) => {

    // Declare state variables to store the quiz data and the user's selected answers
    const location = useLocation();

    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(100);
    const [quizData, setQuizData] = useState(null);
    const [answers, setAnswers] = useState({});
    const [page, setPage] = useState(1);
    const [showAnswer, setShowAnswer] = useState({});
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setStart(parseInt(params.get('start'), 10) || 1);
        setEnd(parseInt(params.get('end'), 10) || 1);
    }, [location.search]);

    // Use the useEffect hook to retrieve the quiz data from the API when the component mounts
    useEffect(() => {
        console.log(start, end)

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

    // useEffect(() => {
    //     const queryParams = new URLSearchParams(props.location.search);
    //     setStart(queryParams.get('start') || 1);
    //     setEnd(queryParams.get('end') || 10);
    // }, [props.location.search]);

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            handleNext();
        } else if (event.key === 'ArrowLeft') {
            handlePrevious();
        }
    };


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
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

    // Function to handle the "Submit" button click
    function handleSubmit() {
        // Iterate through the quizData to check user's answers
        quizData.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                console.log(`Question ${index + 1} is correct!`);
                setCorrectAnswers((prevAnswers) => [...prevAnswers, index]);
            } else {
                console.log(`Question ${index + 1} is incorrect. The correct answer is ${question.answer}`);
            }
        });
    }


    // const handleQuestionSubmit = () => {
    //     handleSubmit(question.id, question.answer);
    //     setIsSubmitted(true);
    // };


    // Render the quiz questions
    return (<form>
        {quizData.slice((page - 1), page).map((question) => {
            return <Question question={question}
                             handleChange={handleChange}
                             handleShowAnswer={handleShowAnswer}
                // handleSubmit={handleQuestionSubmit}
                             handleSubmit={handleSubmit}
                             answers={answers}
                             showAnswer={showAnswer}
                             page={page}
            />
        })}
        {page > 1 && <button type="button" onClick={handlePrevious}>Previous</button>}
        {page < numPages && <button type="button" onClick={handleNext}>Next</button>}
        {/*<Result correctAnswers={correctAnswers} quizData={quizData}/>*/}
        <button type="submit">Check answers</button>
    </form>);

    // Function to handle changes to the radio buttons
    // function handleChange(event) {
    //     const {name, value} = event.target;
    //     setAnswers((prevAnswers) => ({
    //         ...prevAnswers,
    //         [name]: value
    //     }));
    // }

    function handleChange(event) {
        const {name, value} = event.target;
        const questionIndex = name;
        const userAnswer = value;
        setUserAnswers((prevAnswers) => {
            prevAnswers[questionIndex] = userAnswer;
            return [...prevAnswers];
        });
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
