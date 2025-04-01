import QuizCompletedImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {
    const totalQuestions = userAnswers.length;
    const correctAnswers = Math.round(
        (userAnswers.filter((answer) => answer?.isCorrect).length / totalQuestions) * 100
    );
    const incorrectAnswers = Math.round(
        (userAnswers.filter((answer) => answer?.isCorrect == false).length / totalQuestions) * 100
    );
    const skippedAnswers = Math.round((userAnswers.filter((answer) => answer === null).length / totalQuestions) * 100);

    return (
        <div id="summary">
            <img src={QuizCompletedImage} alt="Trophy" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswers}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswers}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{incorrectAnswers}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    const question = QUESTIONS[index];
                    let cssClass = "user-answer";

                    if (answer === null) {
                        cssClass += " skipped";
                    } else {
                        cssClass += question.answers[0] === answer.answer ? " correct" : " wrong";
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{question.text}</p>
                            <p className={cssClass}>{answer ? answer.answer : "Skipped"}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Summary;
