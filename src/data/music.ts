interface SongProps {
    id: number
    title: string
    artist: string
    url: string
    image: string
}

export const musicData: SongProps[] = [
    {
        id: 0,
        title: "Rainy day (Feat. ASH ISLAND, Skinny Brown)",
        artist: "PATEKO (파테코)",
        url: "/music/PATEKO (파테코)-Rainy day (Feat. ASH ISLAND, Skinny Brown).mp3",
        image: "/image/1.jpg"
    },
    {
        id: 1,
        title: "네 옆에 그 사람은 내가 아닌 다른사람",
        artist: "TOIL,Kid Wine",
        url: "/music/TOIL,Kid Wine-네 옆에 그 사람은 내가 아닌 다른사람.mp3",
        image: "image/2.jpg"
    },
    {
        id: 2,
        title: "사건의 지평선",
        artist: "윤하 (YOUNHA)",
        url: "/music/윤하 (YOUNHA)-사건의 지평선.mp3",
        image: "image/3.jpg"
    }
]
