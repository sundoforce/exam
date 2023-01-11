import React from 'react';
import QuizListContainer from '../components/quizzes/ExamList';
import Header from "../common/Header";
import Disqus from "../components/common/Disqus";

const QuizListPage = () => {
    return (
        <>
            {/*<HeaderContainer />*/}
            <Header/>
            <QuizListContainer />
            <Disqus/>
            {/*<PaginationContainer />*/}
        </>
    );
};

export default QuizListPage;