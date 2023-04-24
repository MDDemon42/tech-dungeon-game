import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <Link to={'settings'}>
                Adjust settings
            </Link>
            <button>
                Start adventure!
            </button>
        </div>
    )
}

export default MainPage