import { useState, useEffect, useRef } from "react";
import { musicData } from "../../data/music";
import PlayerContainer from "../PlayerContainer";
import SongList from "./SongList";
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaPlay, FaPause } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { PlayButtonState, CurrentTimeState, DurationState, CurrentIndexState, ProgressState } from "../../store/store";
import "./oftenlist.scss";

const OftenPlayList = () => {
    const [currentSongIndex, setCurrentSongIndex] = useRecoilState(CurrentIndexState);
    const [audio, setAudio] = useState(new Audio(musicData[currentSongIndex].url));
    const [play, setPlay] = useRecoilState(PlayButtonState);
    const [currentTime, setCurrentTime] = useRecoilState(CurrentTimeState);
    const [duration, setDuration] = useRecoilState(DurationState);
    const [progress, setProgress] = useRecoilState(ProgressState);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const min = Math.floor(currentTime / 60);
    const sec = Math.floor(currentTime % 60);

    const savedCallback = useRef<any>();

    const currentProgress = () => {
        if (audio.duration) {
            setDuration(audio.duration);
        }
        setCurrentTime(audio.currentTime);
        setProgress(currentTime / duration);
    }

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

    const onNextSong = (e?: React.MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.stopPropagation();
        }
        const nextIndex = currentSongIndex + 1;
        if (nextIndex >= musicData.length) {
            setCurrentSongIndex(0);
        } else {
            setCurrentSongIndex(nextIndex)
        }
    }

    const onPrevSong = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const prevIndex = currentSongIndex - 1;
        if (prevIndex < 0) {
            setCurrentSongIndex(musicData.length - 1);
        } else {
            setCurrentSongIndex(prevIndex)
        }
    }

    const onClickProgressBar = (e: React.MouseEvent<HTMLDivElement>) => {
        if (progressBarRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const progressBar = x / rect.width;
            audio.currentTime = progressBar * audio.duration;
        }
    }

    useEffect(() => {
        savedCallback.current = currentProgress;
    })

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, [])

    useEffect(() => {
        audio.src = musicData[currentSongIndex].url;
        audio.addEventListener("canplaythrough", () => {
            if (play) {
                audio.play();
            }
        })
    },[currentSongIndex])

    useEffect(() => {
        audio.addEventListener("timeupdate", () => {
            setCurrentTime(audio.currentTime);
        });
        audio.addEventListener("loadedmetadata", () => {
            setDuration(audio.duration)
        });
        audio.addEventListener("ended", () => onNextSong())

    }, [audio])

        return (
        <PlayerContainer>
            <div className="player-info">
                <span className="song-title">{musicData[currentSongIndex].title}</span>
                <span className="song-artist">{musicData[currentSongIndex].artist}</span>
                <img src={musicData[currentSongIndex].image} alt="" className="song-cover" />
                <div className="progress-container" onClick={onClickProgressBar} ref={progressBarRef}>
                    <div className="progress-bar" style={{ width: `${Math.round(progress * 100)}%` }}></div>
                </div>
                <div className="time-stamp">
                    <span>{`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`}</span>
                    <span>{`${Math.floor(duration / 60) < 10 ?  "0" + Math.floor(duration / 60) : Math.floor(duration / 60)}`}
                    :{`${Math.floor(duration/10)%6}${Math.floor(duration%10)}`}</span>
                </div>
                <div className="playing-container">
                    <button className="prev-button" onClick={onPrevSong}><TbPlayerTrackPrevFilled /></button>
                    {play ?
                        <button className="pause-button" onClick={onPause}><FaPause /></button> :
                        <button className="play-button" onClick={onPlay}><FaPlay /></button>
                        }
                    <button className="next-button" onClick={onNextSong}><TbPlayerTrackNextFilled /></button>
                </div>
            </div>
            <SongList />
        </PlayerContainer>
    )
}

export default OftenPlayList;