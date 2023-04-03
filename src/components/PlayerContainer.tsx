import React from "react";
import "../styles/global.scss";

interface ChildrenProps {
    children: React.ReactNode;
}

const PlayerContainer = ({ children } : ChildrenProps) => {
    return <div className="player-wrap">{children}</div>
}

export default PlayerContainer;