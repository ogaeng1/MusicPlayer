import { atom } from "recoil";
import { musicData } from "../data/music";

export const PlayButtonState = atom({
    key: "PlayButtonState",
    default: false
})

export const CurrentTimeState = atom({
    key: "CurrentTimeState",
    default: 0
})

export const DurationState = atom({
    key: "DurationState",
    default: 0
})

export const CurrentIndexState = atom({
    key: "CurrentIndexState",
    default: 0
})

// export const ProgressState = atom({
//     key: "ProgressState",
//     default: 0
// })

// export const PlayListState = atom({
//     key: "PlayListState",
//     default: [...musicData]
// })