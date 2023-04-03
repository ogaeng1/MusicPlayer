import { Link } from "react-router-dom";
import "../styles/player.scss"

const PlayList = () => {

    return (
        <main className="player">
            <Link to="/often">
                <div className="first-player"></div>
            </Link>
            <Link to="/sad">
                <div className="second-player"></div>            
            </Link>
            <Link to="/z">
                <div className="third-player"></div>
            </Link>
        </main>
    )
}

export default PlayList;