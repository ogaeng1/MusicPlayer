import { useState, useEffect } from "react";
import { musicData } from "../../data/music";
import PlayerContainer from "../PlayerContainer";
import SongList from "./SongList";
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaPlay, FaPause } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { PlayButtonState, CurrentTimeState, DurationState, CurrentIndexState } from "../../store/store";
import "./oftenlist.scss";

const OftenPlayList = () => {
    const [currentSongIndex, setCurrentSongIndex] = useRecoilState(CurrentIndexState);
    const [audio, setAudio] = useState(new Audio(musicData[currentSongIndex].url));
    const [play, setPlay] = useRecoilState(PlayButtonState);
    const [currentTime, setCurrentTime] = useRecoilState(CurrentTimeState);
    const [duration, setDuration] = useRecoilState(DurationState);
    // const [progress, setProgress] = useRecoilState(ProgressState);

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
    }

    const onPrevSong = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const prevIndex = currentSongIndex - 1;
        if (prevIndex < 0) {
            setCurrentSongIndex(musicData.length - 1);
        } else {
            setCurrentSongIndex(prevIndex)
        }
        setPlay(true);
    }

    const onCurrentTimer = (time:number) => {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
    }

    useEffect(() => {
        audio.src = musicData[currentSongIndex].url;
        if (play) {
            audio.play();
        }
    }, [currentSongIndex])

    useEffect(() => {
        audio.addEventListener("timeupdate", () => {
            setCurrentTime(audio.currentTime);
        });
        audio.addEventListener("loadedmetadata", () => {
            setDuration(audio.duration)
        });
    }, [audio])

        return (
        <PlayerContainer>
            <div className="player-info">
                <span className="song-title">{musicData[currentSongIndex].title}</span>
                <span className="song-artist">{musicData[currentSongIndex].artist}</span>
                <img src={musicData[currentSongIndex].image} alt="" className="song-cover" />
                <div className="progress-container">
                    {/* <div className="progress-bar" 
                    style={{ width: `${progress}` }}></div> */}
                </div>
                <div className="time-stamp">
                    <span>{onCurrentTimer(currentTime)}</span>
                    <span>{`${Math.floor(duration / 60) < 10 ?  "0" + Math.floor(duration / 60) : Math.floor(duration / 60)}`}
                    :{`${Math.floor(duration/10)%6}${Math.floor(duration%10)}`}</span>
                </div>
                <div className="playing-container">
                    <button onClick={onPrevSong}><TbPlayerTrackPrevFilled /></button>
                    {play ?
                        <button onClick={onPause}><FaPause /></button> :
                        <button className="play-button" onClick={onPlay}><FaPlay /></button>
                        }
                    <button onClick={onNextSong}><TbPlayerTrackNextFilled /></button>
                </div>
            </div>
            <SongList />
        </PlayerContainer>
    )
}

export default OftenPlayList;