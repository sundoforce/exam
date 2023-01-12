import React from 'react';
import Header from "../common/Header";
import QuizIndex from "../components/quizzes/QuizIndex";

const QuizListPage = () => {
    return (
        <>
            {/*<HeaderContainer />*/}
            <Header/>
            <QuizIndex />
            {/*<PaginationContainer />*/}
        </>
    );
};

export default QuizListPage;