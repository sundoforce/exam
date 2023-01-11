import React from 'react';
import Header from "../common/Header";
import Upload from "../components/quizzes/Upload";

const QuizListPage = () => {
    return (
        <>
            {/*<HeaderContainer />*/}
            <Header/>
            <div>
                시험 title<input/> <br/>
                시험 아이디(영문만가능)<input/> <br/>
                공개 / 비공개 <input/> <br/>
                CSV 파일을 업로드 하면 시험문제가 등록됩니다.<br/>
            </div>
            <Upload/>
            {/*<PaginationContainer />*/}
        </>
    );
};

export default QuizListPage;