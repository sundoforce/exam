import React from 'react';
import QuizListContainer from '../containers/quizzes/QuizListContainer';
import Header from "../common/Header";
import UtterancesComments from "../components/common/Utterance";
import PaginatedQuiz from "../components/quizzes/PaginatedQuiz";


const QuizListPage = () => {
    return (
        <>
            {/*<HeaderContainer />*/}
            <Header/>
            <QuizListContainer />
            <PaginatedQuiz/>
            <UtterancesComments />

            {/*<PaginationContainer />*/}
        </>
    );
};

export default QuizListPage;