import AmazonsLogic from "./AmazonsLogic.js"
import AmazonsView from "./AmazonsView.js"
import { useState } from "react"

const AmazonsBoard = () => {
    const [game] = useState(() => {return new AmazonsLogic(null, {"size":10, "variation":0})});
    return <div>
        <AmazonsView game_state={game}></AmazonsView>
    </div>
}

export default AmazonsBoard;