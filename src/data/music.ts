interface SongProps {
    id: number
    title: string
    artist: string
    url: string
    image: string
}

export const musicData: SongProps[] = [
    {
        id: 1,
        title: "Rainy day (Feat. ASH ISLAND, Skinny Brown)",
        artist: "PATEKO (파테코)",
        url: "/music/PATEKO (파테코)-Rainy day (Feat. ASH ISLAND, Skinny Brown).mp3",
        image: "/image/rainy.jpg"
    },
    {
        id: 2,
        title: "네 옆에 그 사람은 내가 아닌 다른사람",
        artist: "TOIL,Kid Wine",
        url: "/music/TOIL,Kid Wine-네 옆에 그 사람은 내가 아닌 다른사람.mp3",
        image: "image/2.jpg"
    }
]