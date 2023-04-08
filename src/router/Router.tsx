import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";

const PlayList = lazy(() => import("../components/PlayList"))
const OftenPlayList = lazy(() => import("../components/firstplaylist/OftenPlayList"))

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<PlayList />} />
                    <Route path="/often" element={<OftenPlayList />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;