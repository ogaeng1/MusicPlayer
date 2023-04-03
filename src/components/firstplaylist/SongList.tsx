import "./songlist.scss";
import { musicData } from "../../data/music";

const SongList = () => {
    return (
        <div className="list-wrap">
            <ul>
                {musicData.map((item, idx) => (
                    <li className="item" key={idx}>
                        <img src={item.image} alt="" />
                        <div className="item-info">
                            <p className="item-title">{item.title}</p>
                            <p className="item-artist">{item.artist}</p>
                        </div>
                    </li>
                ))}
                <li className="item"></li>
                <li className="item"></li>
            </ul>
        </div>
    )
}

export default SongList;