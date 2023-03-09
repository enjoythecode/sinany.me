import AmazonsLogic from "./AmazonsLogic.js"
import AmazonsView from "./AmazonsView.js"
import { useState, useEffect } from "react"

const AmazonsBoard = () => {
    const [game] = useState(() => {return new AmazonsLogic(null, {"size":10, "variation":0})});
    return <div>
        <AmazonsView game_state={game}></AmazonsView>
    </div>
}

const SinglePlayerAmazonsBoard = () => {
    const [game] = useState(() => {return new AmazonsLogic(null, {"size":10, "variation":0})});
    const ExecuteAnyMove = (move) => {
        game.apply_move(move);
    }
    return <div>
        <AmazonsView game_state={game} handle_move={ExecuteAnyMove}></AmazonsView>
    </div>
}

const PlaybackAmazonsBoard = () => {
    const [game] = useState(() => {return new AmazonsLogic(null, {"size":10, "variation":0})});
    const [currMoveIndex, setCurrMoveIndex] = useState(0);
    const playbackSpeed = 2e3; // ms per move

    const ExecuteMove = (move) => {
        game.apply_move(move);
    }
    
    // A transcription of game #2328640 on LittleGolem.net. Hippolyta_1_c (white) vs. sinany (black)
    // https://www.littlegolem.net/jsp/game/game.jsp?gid=2328640
    const playbackMoves = [
        {"from": "93", "to": "33", "shoot": "36"},
        {"from": "30", "to": "85", "shoot": "58"},
        {"from": "60", "to": "70", "shoot": "75"},
    ];

    // timer code modified from https://stackoverflow.com/a/63143722
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(playing){
                ExecuteMove(playbackMoves[currMoveIndex]);
                setCurrMoveIndex(currMoveIndex+1);
            }
        }, playbackSpeed)
        return () => clearTimeout(timer);
    }, [currMoveIndex, playing])

    
    return <div>
        <AmazonsView game_state={game} handle_move={ExecuteMove} last_move={currMoveIndex > 0 ? playbackMoves[currMoveIndex-1] : undefined}></AmazonsView>
    </div>
}


export default AmazonsBoard;
export { SinglePlayerAmazonsBoard, PlaybackAmazonsBoard };