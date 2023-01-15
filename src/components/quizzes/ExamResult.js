const Result = ({correctAnswers, quizData}) => {
    const totalQuestions = quizData.length;
    const correctQuestions = correctAnswers.length;
    const percentage = (correctQuestions / totalQuestions) * 100;
    const incorrectQuestions = quizData.filter((question) => !correctAnswers.includes(question.id));
    return (<div>
        <p>You have answered {correctQuestions} out of {totalQuestions} questions correctly.</p>
        <p>Your percentage is {percentage}%</p>
        {incorrectQuestions.length > 0 && (<div>
            <h3>Incorrect Questions:</h3>
            {incorrectQuestions.map((question) => (<div key={question.id}>
                <h4>{question.title}</h4>
                <p>{question.passage_a}</p>
                <p>{question.passage_b}</p>
                <p>{question.passage_c}</p>
                <p>{question.passage_d}</p>
            </div>))}
        </div>)}
    </div>);
};

export default Result;