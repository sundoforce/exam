import React, {useEffect, useState} from 'react';
import UtterancesComments from "../common/Utterance";
import Disqus, {DiscussionEmbed} from "disqus-react";
import {Helmet} from "react-helmet";
import Result from "../quizzes/ExamResult";

const Question = (props) => {

    const {question, handleChange, handleShowAnswer, answers, page, handleNext, handlePrevious, handleSubmit} = props;
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleQuestionSubmit = () => {
        handleSubmit(question.id, question.answer);
        setIsSubmitted(true);
    };

    // Filter the incorrect questions
    // const incorrectQuestions = quizData.filter(
    //     (question) => !correctAnswers.includes(question.id)
    // );
    return (<div key={question.id}>
        <Helmet>
            <title>{question.title}</title>
            <meta name="description" content={question.title}/>
        </Helmet>
        <h3>{page}. {question.title}</h3>
        <p>real question number: {question.id}</p>
        {question.passage_a &&
            <p><input type="radio" name={question.id} value="A" checked={answers[question.id] === 'A'}
                      onChange={handleChange}/> A. {question.passage_a}</p>}
        {question.passage_b &&
            <p><input type="radio" name={question.id} value="B" checked={answers[question.id] === 'B'}
                      onChange={handleChange}/> B. {question.passage_b}</p>}
        {question.passage_c &&
            <p><input type="radio" name={question.id} value="C" checked={answers[question.id] === 'C'}
                      onChange={handleChange}/> C. {question.passage_c}</p>}
        {question.passage_d &&
            <p><input type="radio" name={question.id} value="D" checked={answers[question.id] === 'D'}
                      onChange={handleChange}/> D. {question.passage_d}</p>}
        {question.passage_e &&
            <p><input type="radio" name={question.id} value="E" checked={answers[question.id] === 'E'}
                      onChange={handleChange}/> E. {question.passage_e}</p>}
        {question.passage_f &&
            <p><input type="radio" name={question.id} value="F" checked={answers[question.id] === 'F'}
                      onChange={handleChange}/> F. {question.passage_f}</p>}
        {question.description && <p> {question.description}</p>}
        {question.answer.length > 2 && <p> {question.answer}</p>}
        <button type="button" onClick={() => handleShowAnswer(question.id, question.answer)}>Show answer</button>
        {/*<UtterancesComments/>*/}
        {/*<DiscussionEmbed identifier={question.id} title={question.title} />*/}
        {/*{isSubmitted && <Result incorrectQuestions={incorrectQuestions}/>}*/}
    </div>);
};

export default Question;
