import { useRef } from "react";

const Answers = ({ answers, selectedAnswerText, answerState, onAnswerSelected }) => {
    let shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    const selectedAnswerIndex = shuffledAnswers.current.findIndex((answer) => answer === selectedAnswerText);

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer, index) => {
                const isSelected = index == selectedAnswerIndex;
                return (
                    <li key={index} className="answer">
                        <button
                            onClick={() => onAnswerSelected(answer)}
                            className={isSelected ? answerState : undefined}
                            disabled={!!selectedAnswerText}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};
export default Answers;
