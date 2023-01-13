import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizIndex = (props) => {
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(1);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/devops?start=${start}&end=${end}`, { state: { start, end } });
    }

    return (
        <div>
            <input type="number" value={start} onChange={(e) => setStart(e.target.value)} placeholder="Start" min="1" max="1000"/>
            <input type="number" value={end} onChange={(e) => setEnd(e.target.value)} placeholder="End" min="1" max="1000" />
            <button onClick={handleClick}>Go to Result</button>
        </div>
    );
}

export default QuizIndex;
