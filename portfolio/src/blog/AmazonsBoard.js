import AmazonsLogic from "../components/Amazons/AmazonsLogic.js"
import AmazonsView from "../components/Amazons/AmazonsView.js"
import { useState } from "react"

const AmazonsBoard = () => {
    const [game, setGame] = useState(new AmazonsLogic());
    return <div>
        <h1>riley!</h1>
    </div>
}

export default AmazonsBoard;