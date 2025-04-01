import { useState, useCallback } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

const Question = ({ activeQuestionIndex, onNextQuestion }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const question = QUESTIONS[activeQuestionIndex];
    const correctAnswer = question.answers[0];

    let timer = 10000;
    if (selectedAnswer) {
        timer = 1000;
        if (selectedAnswer.isCorrect !== null) {
            timer = 2000;
        }
    }

    const onAnswerSelected = (answer) => {
        setSelectedAnswer({
            answer: answer,
            isCorrect: null,
        });

        setTimeout(() => {
            const answerObj = {
                answer: answer,
                isCorrect: answer === correctAnswer,
            };
            setSelectedAnswer(answerObj);

            setTimeout(() => {
                onNextQuestion(answerObj);
            }, 2000);
        }, 1000);
    };

    const onTimeOut = () => {
        onNextQuestion(null);
    };

    let answerState = "";

    if (selectedAnswer) {
        if (selectedAnswer.isCorrect === null) {
            answerState = "selected";
        } else {
            answerState = selectedAnswer.isCorrect ? "correct" : "wrong";
        }
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeOut={timer}
                onTimeOut={selectedAnswer == null ? onTimeOut : undefined}
                mode={answerState}
            ></QuestionTimer>
            <h2>{question.text}</h2>
            <Answers
                answers={question.answers}
                selectedAnswerText={selectedAnswer?.answer}
                answerState={answerState}
                onAnswerSelected={onAnswerSelected}
            ></Answers>
        </div>
    );
};

export default Question;
