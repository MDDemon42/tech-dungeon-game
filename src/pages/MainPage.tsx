import { Link } from "react-router-dom";

function MainPage() {
    const startButtonListener = () => {
        window.open('#/game');
    }

    return (
        <div>
            <Link to={'settings'}>
                Adjust settings
            </Link>
            <button onClick={startButtonListener}>
                Start adventure!
            </button>
        </div>
    )
}

export default MainPage