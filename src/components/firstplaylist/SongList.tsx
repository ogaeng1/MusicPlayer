import "./songlist.scss";
import { musicData } from "../../data/music";
import { CurrentIndexState } from "../../store/store";
import { useRecoilState } from "recoil";

const SongList = () => {
    const [currentSongIndex, setCurrentSongIndex] = useRecoilState(CurrentIndexState);
    return (
        <div className="list-wrap">
            <ul>
                {musicData.map((item) => (
                    <li className={currentSongIndex === item.id ? "playing" : "item"} key={item.id}>
                        <img src={item.image} alt="" />
                        <div className="item-info">
                            <p className="item-title">{item.title}</p>
                            <p className="item-artist">{item.artist}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SongList;