import React from 'react';
import UtterancesComments from "../common/Utterance";
import Disqus from "disqus-react";

const Question = (props) => {


    const {question, handleChange, handleShowAnswer, answers,  page , handleNext,handlePrevious } = props;

    return (
        <div  key={question.id}>
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
        </div>
    );
};

export default Question;
