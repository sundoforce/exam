import React from 'react';
import ReactDOM from 'react-dom';

function MultipleChoiceQuestion(props) {
    return (
        <div>
            <p>{props.prompt}</p>
            <form>
                {props.choices.map(choice => (
                    <div key={choice}>
                        <input type="radio" name={props.name} value={choice} />
                        {choice}
                    </div>
                ))}
            </form>
        </div>
    );
}

const test = {
    questions: [
        {
            type: 'multiple choice',
            prompt: 'You support a Node.js application running on Google Kubernetes Engine (GKE) in production. The application makes several HTTP requests to dependent applications. You want to anticipate which dependent applications might cause performance issues. What should you do?',
            name: 'capital',
            choices: ['Instrument all applications with Stackdriver Profiler.',
                'Instrument all applications with Stackdriver Trace and review inter-service HTTP requests.',
                'Use Stackdriver Logging to find dependent applications that are performing poorly.',
                'Modify the Node.js application to log HTTP request and response times to dependent applications.'
            ]
        }
    ]
};

function Test(props) {
    return (
        <form onSubmit={props.onSubmit}>
            {props.test.questions.map(question => {
                if (question.type === 'multiple choice') {
                    return (
                        <MultipleChoiceQuestion
                            key={question.name}
                            name={question.name}
                            prompt={question.prompt}
                            choices={question.choices}
                        />
                    );
                } else {
                    return null;
                }
            })}
            <button type="submit">Submit</button>
        </form>
    );
}

function App() {
    const handleSubmit = event => {
        event.preventDefault();
        // 제출 처리 코드
    };

    return <Test onSubmit={handleSubmit} test={test} />;
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
