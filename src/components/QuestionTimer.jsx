import { useState, useEffect } from "react";

const QuestionTimer = ({ timeOut, onTimeOut, mode }) => {
    const [remaingingTime, setRemaingingTime] = useState(timeOut);

    useEffect(() => {
        const timeOutRefrence = setTimeout(onTimeOut, timeOut);
        return () => {
            clearTimeout(timeOutRefrence);
        };
    }, [onTimeOut, timeOut]);

    useEffect(() => {
        const intervalRefrence = setInterval(() => {
            setRemaingingTime((prevState) => prevState - 10);
        }, 10);
        return () => {
            clearInterval(intervalRefrence);
        };
    }, [onTimeOut]);

    return <progress id="question-timer" max={timeOut} value={remaingingTime} className={mode ? "answered" : ""} />;
};

export default QuestionTimer;
