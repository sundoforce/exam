import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import QuizList from './components/QuizList';
import QuizListPage from './pages/QuizListPage';
import Quiz from './components/Quiz';
import Quiz2 from './pages/ExamQuestion';
import Test from './components/Test';
import {Helmet} from "react-helmet";
import ExamUpload from "./pages/ExamUpload";
import ExamIndex from "./pages/ExamIndex";
// import Header from "./common/Header";

function App() {
    return (
        <BrowserRouter>
            <Helmet>
                <title>CBT::Computer Based Training</title>
            </Helmet>
            <div>
                <Routes>
                    <Route path="/" element={<QuizList />} />
                    <Route path="/quiz" element={<Test />} />
                    {/*<Route path="/devops/:start/:end" component={Quiz} />*/}
                    <Route path="/quiz1" element={<Quiz />} />
                    <Route path="/quizzes" element={<QuizListPage />} />
                    <Route path="/devops" element={<Quiz2 />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/load" element={<ExamUpload />} />
                    <Route path="/exam/index" element={<ExamIndex />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
