import applicationLogo from "../assets/quiz-logo.png";

const Header = () => {
    return (
        <header>
            <img src={applicationLogo} alt="Quiz Check List" />
            <h1>React Quiz</h1>
        </header>
    );
};

export default Header;
