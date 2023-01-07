import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import Quiz2 from './components/Test2';
import Test from './components/Test';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<QuizList />} />
                    <Route path="/quiz" element={<Test />} />
                    <Route path="/quiz1" element={<Quiz />} />
                    <Route path="/quiz2" element={<Quiz2 />} />
                    <Route path="/test" element={<Test />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
