import React, {useEffect, useState} from 'react';

const Quiz2 = ({ quiz }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    useEffect(() => {
        async function fetchQuestions() {
            const response = await fetch('https://cbt-api.sdk.xyz/api/quiz/randoms/1/2');
            const data = await response.json();
            setSelectedOption(data);
        }

        fetchQuestions();
    }, []);

    return (
        <form>
            <h2>{quiz.title}</h2>
            {quiz.map((q, index) => (
                <div key={index}>
                    <h2>{q.title}</h2>
                    <div>
                        <input type="radio" name={`passage-${index}`} value={q.passage_a} />
                        <label>{q.passage_a}</label>
                    </div>
                    <div>
                        <input type="radio" name={`passage-${index}`} value={q.passage_b} />
                        <label>{q.passage_b}</label>
                    </div>
                    <div>
                        <input type="radio" name={`passage-${index}`} value={q.passage_c} />
                        <label>{q.passage_c}</label>
                    </div>
                    <div>
                        <input type="radio" name={`passage-${index}`} value={q.passage_d} />
                        <label>{q.passage_d}</label>
                    </div>
                    <div>
                        <input type="radio" name={`passage-${index}`} value={q.passage_e} />
                        <label>{q.passage_e}</label>
                    </div>
                    <div>
                        <input type="radio" name={`passage-${index}`} value={q.passage_f} />
                        <label>{q.passage_f}</label>
                    </div>
                    <p>Correct answer: {q.answer}</p>
                    <p>Answer choices: {q.answer_candidates}</p>
                    <p>{q.description}</p>
                </div>
            ))}
            <div>
                <input
                    type="radio"
                    name="passage"
                    value={quiz.passage_a}
                    checked={selectedOption === quiz.passage_a}
                    onChange={handleOptionChange}
                />
                <label>{quiz.passage_a}</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="passage"
                    value={quiz.passage_b}
                    checked={selectedOption === quiz.passage_b}
                    onChange={handleOptionChange}
                />
                <label>{quiz.passage_b}</label>
            </div>
            {/* Add additional radio buttons for passages C through F */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Quiz2;
