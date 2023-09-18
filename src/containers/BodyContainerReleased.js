import { useState } from 'react';
import questions from '../helpers/questions.json';
import BodyComponent from '../components/BodyComponentReleased';


function BodyReleasedContainer() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [songCombo, setSongCombo] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [end, setEnd] = useState(false)
    const questionKeys = Object.keys(questions.questions);
    const question = questions.questions[questionIndex]['question'];
    const answers = Object.values(questions.questions[questionIndex].answers);

    const handleSubmit = async (answer) => {
        const questionText = document.getElementById('question-text');
        const answerText = document.getElementsByClassName('answer-text');
        setSongCombo((prevCombo) => prevCombo + answer);
        setSelectedAnswer(null);
        const nextQuestionIndex = questionIndex + 1;

        if (nextQuestionIndex < questionKeys.length) {
            setTimeout(() => {
                setQuestionIndex(nextQuestionIndex)
                questionText.classList.toggle('change-on-submit');
                for (const answerElement of answerText) {
                    answerElement.classList.toggle('change-on-submit');
                };
            }, 1000)
            questionText.classList.toggle('change-on-submit');
            for (const answerElement of answerText) {
                answerElement.classList.toggle('change-on-submit');
            };
        } else {
            questionText.classList.toggle('change-on-submit');
            for (const answerElement of answerText) {
                answerElement.classList.toggle('change-on-submit');
            };
            setTimeout(() => {
                setEnd(true);
            }, 2000)
        }
    }

    if (end === false) {
        return (
            <BodyComponent
            question={question}
            answers={answers}
            onSubmit={handleSubmit}
            selectedAnswer={selectedAnswer}
            questionIndex={questionIndex}
            />
        )
    } else {
        return (
            <BodyComponent
                question={question}
                songName={questions['combinations'][songCombo]}
            />
        )
    }

}

export default BodyReleasedContainer;