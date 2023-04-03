import { useState, useEffect } from "react";
import { musicData } from "../../data/music";
import PlayerContainer from "../PlayerContainer";
import SongList from "./SongList";
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaPlay, FaPause } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { PlayButtonState } from "../../store/store";
import "./oftenlist.scss";

const OftenPlayList = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [audio, setAudio] = useState(new Audio(musicData[currentSongIndex].url));
    const [play, setPlay] = useRecoilState(PlayButtonState);
    // const durationMin = Math.floor(audio.duration / 60) < 10 ?  Number("0" + Math.floor(audio.duration / 60)) : Math.floor(audio.duration / 60)
    // const durationSec = `${Math.floor(audio.duration/10)%6}${Math.floor(audio.duration%10)}`

    const onPlay = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setPlay(!play);
        audio.play();
    }
    
    const onPause = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setPlay(!play);
        audio.pause();
    }

    const onNextSong = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const nextIndex = currentSongIndex + 1;
        if (nextIndex >= musicData.length) {
            setCurrentSongIndex(0);
        } else {
            setCurrentSongIndex(nextIndex)
        }
        setPlay(true);
        audio.src = musicData[currentSongIndex].url;
        audio.play();
    }

        return (
        <PlayerContainer>
            <div className="player-info">
                <span className="song-title">{musicData[currentSongIndex].title}</span>
                <span className="song-artist">{musicData[currentSongIndex].artist}</span>
                <img src={musicData[currentSongIndex].image} alt="" className="song-cover" />
                <div className="progress-container">
                    <div className="progress-bar"></div>
                </div>
                <div className="time-stamp">
                    {/* <span>{`${Math.floor(audio.currentTime)}`}</span>
                    <span>{durationMin}:{durationSec}</span> */}
                </div>
                <div className="playing-container">
                    <button><TbPlayerTrackPrevFilled /></button>
                    {play ?
                        <button onClick={onPause}><FaPause /></button> :
                        <button className="play-button" onClick={onPlay}><FaPlay /></button>
                        }
                    <button onClick={onNextSong}><TbPlayerTrackNextFilled /></button>
                </div>
            </div>
            {/* <SongList /> */}
        </PlayerContainer>
    )
}

export default OftenPlayList;