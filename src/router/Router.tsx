import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayList from "../components/PlayList";
import OftenPlayList from "../components/firstplaylist/OftenPlayList";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PlayList />} />
                <Route path="/often" element={<OftenPlayList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;