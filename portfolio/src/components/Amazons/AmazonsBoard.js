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

const moveToText = (move) => {
    return move.from + "-" + move.to + "/" + move.shoot;
}

const PlaybackAmazonsBoard = () => {
    const [game] = useState(() => {return new AmazonsLogic(null, {"size":10, "variation":0})});
    const [currMoveIndex, setCurrMoveIndex] = useState(0);
    const playbackSpeed = 0.5e3; // ms per move

    const ExecuteMove = (move) => {
        game.apply_move(move);
    }
    
    // A transcription of game #2328640 on LittleGolem.net. Hippolyta_1_c (white) vs. sinany (black)
    // https://www.littlegolem.net/jsp/game/game.jsp?gid=2328640
    const playbackMoves = [
        {'from': '93', 'to': '33', 'shoot': '36'},
        {'from': '30', 'to': '85', 'shoot': '58'},
        {'from': '60', 'to': '70', 'shoot': '75'},
        {'from': '39', 'to': '59', 'shoot': '68'},
        {'from': '96', 'to': '46', 'shoot': '48'},
        {'from': '93', 'to': '23', 'shoot': '78'},
        {'from': '69', 'to': '89', 'shoot': '87'},
        {'from': '59', 'to': '29', 'shoot': '79'},
        {'from': '70', 'to': '74', 'shoot': '84'},
        {'from': '23', 'to': '41', 'shoot': '45'},
        {'from': '89', 'to': '99', 'shoot': '77'},
        {'from': '85', 'to': '94', 'shoot': '98'},
        {'from': '74', 'to': '52', 'shoot': '96'},
        {'from': '29', 'to': '26', 'shoot': '37'},
        {'from': '52', 'to': '16', 'shoot': '95'},
        {'from': '41', 'to': '42', 'shoot': '64'},
        {'from': '46', 'to': '56', 'shoot': '92'},
        {'from': '96', 'to': '17', 'shoot': '27'},
        {'from': '16', 'to': '61', 'shoot': '62'},
        {'from': '94', 'to': '76', 'shoot': '54'},
        {'from': '56', 'to': '29', 'shoot': '18'},
        {'from': '17', 'to': '28', 'shoot': '38'},
        {'from': '33', 'to': '13', 'shoot': '73'},
        {'from': '26', 'to': '25', 'shoot': '14'},
        {'from': '13', 'to': '22', 'shoot': '40'},
        {'from': '25', 'to': '23', 'shoot': '33'},
        {'from': '22', 'to': '13', 'shoot': '22'},
        {'from': '76', 'to': '46', 'shoot': '24'},
        {'from': '13', 'to': '12', 'shoot': '13'},
        {'from': '42', 'to': '51', 'shoot': '52'},
        {'from': '12', 'to': '21', 'shoot': '12'},
        {'from': '23', 'to': '32', 'shoot': '30'},
        {'from': '61', 'to': '83', 'shoot': '56'},
        {'from': '51', 'to': '81', 'shoot': '72'},
        {'from': '29', 'to': '19', 'shoot': '99'},
        {'from': '28', 'to': '17', 'shoot': '98'},
        {'from': '19', 'to': '39', 'shoot': '19'},
        {'from': '46', 'to': '55', 'shoot': '65'},
        {'from': '83', 'to': '94', 'shoot': '93'},
        {'from': '55', 'to': '66', 'shoot': '67'},
        {'from': '94', 'to': '85', 'shoot': '76'},
        {'from': '32', 'to': '31', 'shoot': '32'},
        {'from': '85', 'to': '94', 'shoot': '83'},
        {'from': '31', 'to': '20', 'shoot': '31'},
        {'from': '21', 'to': '11', 'shoot': '10'},
        {'from': '17', 'to': '15', 'shoot': '94'},
        {'from': '39', 'to': '17', 'shoot': '16'},
        {'from': '15', 'to': '26', 'shoot': '15'},
        {'from': '94', 'to': '85', 'shoot': '95'},
        {'from': '66', 'to': '44', 'shoot': '53'},
        {'from': '85', 'to': '63', 'shoot': '74'},
        {'from': '20', 'to': '21', 'shoot': '20'},
        {'from': '11', 'to': '90', 'shoot': '11'},
        {'from': '44', 'to': '66', 'shoot': '55'},
        {'from': '99', 'to': '89', 'shoot': '99'},
        {'from': '66', 'to': '57', 'shoot': '66'},
        {'from': '90', 'to': '91', 'shoot': '90'},
        {'from': '57', 'to': '47', 'shoot': '57'},
        {'from': '91', 'to': '92', 'shoot': '91'},
        {'from': '47', 'to': '46', 'shoot': '47'},
        {'from': '92', 'to': '93', 'shoot': '92'},
        {'from': '46', 'to': '35', 'shoot': '46'},
        {'from': '89', 'to': '88', 'shoot': '89'},
        {'from': '81', 'to': '91', 'shoot': '82'},
        {'from': '88', 'to': '97', 'shoot': '88'},
        {'from': '91', 'to': '90', 'shoot': '91'},
        {'from': '97', 'to': '86', 'shoot': '97'},
        {'from': '35', 'to': '34', 'shoot': '23'},
        {'from': '86', 'to': '85', 'shoot': '86'},
        {'from': '90', 'to': '80', 'shoot': '90'},
        {'from': '17', 'to': '28', 'shoot': '17'},
        {'from': '80', 'to': '81', 'shoot': '80'}
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

    const DashboardPlayer = (props) => {
        return (
            <div>
                <b>{props.name}</b>{props.isTurn ? "isTurn" : ""}
            </div>
        )
    
    }

    const MoveList = (props) => {

        const Move = (props) => {
            let text = (props.index + 1 < 10 ? "\u00a0" : "") + (props.index + 1).toString() + ". " + moveToText(props.move)
            let style = {}

            if (!props.isPast && !props.isCurrent) {
                style["color"] = "grey";
            }
            if (props.isCurrent) {
                style["fontWeight"] = "bold";
            }

            return (
                <div style={style}>
                    {text}
                </div>
                );
        }

        return (
            <div style={{fontFamily: "monospace", display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-around", fontSize: "0.6rem"}}>
                {props.moves.map((move, index) => 
                    <Move move={move} index={index} isCurrent={index===props.currMoveIndex} isPast={index < props.currMoveIndex}/>    
                ) }
            </div>
        )
    }
    
    return(
        <div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{flex: "1 1 500px"}}>
                    <AmazonsView  game_state={game} handle_move={ExecuteMove} last_move={currMoveIndex > 0 ? playbackMoves[currMoveIndex-1] : undefined}></AmazonsView>
                </div>
                <div style={{flex: "1 1 200px", maxWidth: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <DashboardPlayer color="black" name="sinany" isTurn={currMoveIndex % 2 === 1}/>
                    <div style={{flex: "1 1 300px", overflow: "scroll"}}>
                        <MoveList moves={playbackMoves} currMoveIndex={currMoveIndex}/>
                    </div>
                    <DashboardPlayer color="white" name="Hippolyta_1_c" isTurn={currMoveIndex % 2 === 0}/>
                </div>
            </div>
        </div>
    ) 
}


export default AmazonsBoard;
export { SinglePlayerAmazonsBoard, PlaybackAmazonsBoard };