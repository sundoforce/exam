import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import QuizList from './components/QuizList';
import QuizListPage from './pages/QuizListPage';
import Quiz from './components/Quiz';
// import Quiz2 from './components/Test2';
import Test from './components/Test';
import {Helmet} from "react-helmet";
// import Header from "./common/Header";

function App() {
    return (
        <BrowserRouter>
            <Helmet>
                <title>CBT-Computer Base Test</title>
            </Helmet>
            <div>
                <Routes>
                    <Route path="/" element={<QuizList />} />
                    <Route path="/quiz" element={<Test />} />
                    <Route path="/quiz1" element={<Quiz />} />
                    <Route path="/quizzes" element={<QuizListPage />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
