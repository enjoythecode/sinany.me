import AmazonsLogic from "./AmazonsLogic.js"
import AmazonsView from "./AmazonsView.js"
import { useState } from "react"

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

export default AmazonsBoard;
export { SinglePlayerAmazonsBoard };