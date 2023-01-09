import React from 'react';
import QuizListContainer from '../components/quizzes/ExamList';
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