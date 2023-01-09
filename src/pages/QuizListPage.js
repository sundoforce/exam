import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import QuizListContainer from '../containers/quizzes/QuizListContainer';
import PaginationContainer from '../containers/quizzes/PaginationContainer';
import Header from "../common/Header";

const QuizListPage = () => {
    return (
        <>
            {/*<HeaderContainer />*/}
            <Header/>
            <QuizListContainer />
            {/*<PaginationContainer />*/}
        </>
    );
};

export default QuizListPage;