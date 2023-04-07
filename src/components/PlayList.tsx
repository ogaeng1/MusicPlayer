import { Link } from "react-router-dom";
import "../styles/player.scss"

const PlayList = () => {

    return (
        <main className="player" style={{ backgroundImage: "url(/image/main.jpg)" }}>
            <Link to="/often" style={{ textDecoration: "none", color: "aliceblue" }}>
                <div className="first-player"><p>주인장이 좋아하는 노래</p></div>
            </Link>
            <div className="second-player">
                <p>추후 추가 예정인<br/>플레이 리스트..</p>
            </div>
            <div className="third-player">
                <p>추후 추가 예정인<br/>플레이 리스트..</p>
            </div>
        </main>
    )
}

export default PlayList;