import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    let activeQuestionIndex = userAnswers.length;
    let isCompleted = activeQuestionIndex === QUESTIONS.length;

    const onNextQuestion = useCallback(
        (answer) => {
            setUserAnswers((prevAnswers) => {
                return [...prevAnswers, answer];
            });
        },
        [activeQuestionIndex]
    );

    if (isCompleted) {
        return <Summary userAnswers={userAnswers}></Summary>;
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                activeQuestionIndex={activeQuestionIndex}
                onNextQuestion={onNextQuestion}
            ></Question>
        </div>
    );
};

export default Quiz;
