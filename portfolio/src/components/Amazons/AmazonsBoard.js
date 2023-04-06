import AmazonsLogic from "./AmazonsLogic.js"
import AmazonsView from "./AmazonsView.js"
import { useState, useEffect, useRef } from "react"
import wqueen from "../../assets/images/wqueen.png"
import bqueen from "../../assets/images/bqueen.png"

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
    const convertInnerRepresentationToGridCoordinates = (innerRepr) => {
        return columnIntToLetter(innerRepr[1]) + (10 - parseInt(innerRepr[0])).toString()
    }
    const columnIntToLetter = (columnIntStr) => {
        return String.fromCharCode(parseInt(columnIntStr) + "A".charCodeAt(0))
    }
    let from = convertInnerRepresentationToGridCoordinates(move.from)
    let to = convertInnerRepresentationToGridCoordinates(move.to)
    let shoot = convertInnerRepresentationToGridCoordinates(move.shoot)
    return from + "-" + to + "/" + shoot;
}

const PlaybackAmazonsBoard = () => {
    const [game, setGame] = useState(() => {return new AmazonsLogic(null, {"size":10, "variation":0})});
    const [currMoveIndex, setCurrMoveIndex] = useState(-1); // the next move to be executed
    const playbackSpeed = 1e3; // ms per move
    

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
        {'from': '03', 'to': '23', 'shoot': '78'},
        {'from': '69', 'to': '89', 'shoot': '87'},
        {'from': '59', 'to': '29', 'shoot': '79'},
        {'from': '70', 'to': '74', 'shoot': '84'},
        {'from': '23', 'to': '41', 'shoot': '45'},
        {'from': '89', 'to': '99', 'shoot': '77'},
        {'from': '85', 'to': '94', 'shoot': '98'},
        {'from': '74', 'to': '52', 'shoot': '96'},
        {'from': '29', 'to': '26', 'shoot': '37'},
        {'from': '52', 'to': '16', 'shoot': '05'},
        {'from': '41', 'to': '42', 'shoot': '64'},
        {'from': '46', 'to': '56', 'shoot': '92'},
        {'from': '06', 'to': '17', 'shoot': '27'},
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
        {'from': '17', 'to': '15', 'shoot': '04'},
        {'from': '39', 'to': '17', 'shoot': '16'},
        {'from': '15', 'to': '26', 'shoot': '15'},
        {'from': '94', 'to': '85', 'shoot': '95'},
        {'from': '66', 'to': '44', 'shoot': '53'},
        {'from': '85', 'to': '63', 'shoot': '74'},
        {'from': '20', 'to': '21', 'shoot': '20'},
        {'from': '11', 'to': '00', 'shoot': '11'},
        {'from': '44', 'to': '66', 'shoot': '55'},
        {'from': '99', 'to': '89', 'shoot': '99'},
        {'from': '66', 'to': '57', 'shoot': '66'},
        {'from': '00', 'to': '01', 'shoot': '00'},
        {'from': '57', 'to': '47', 'shoot': '57'},
        {'from': '01', 'to': '02', 'shoot': '01'},
        {'from': '47', 'to': '46', 'shoot': '47'},
        {'from': '02', 'to': '03', 'shoot': '02'},
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
                ExecuteMove(playbackMoves[currMoveIndex + 1]);
                if(currMoveIndex + 1 < playbackMoves.length){
                    setCurrMoveIndex(currMoveIndex+1);
                }
            }
        }, playbackSpeed)
        return () => clearTimeout(timer);
    }, [currMoveIndex, playing])

    const seekToMove = (moveIndex) => {
        setPlaying(false);
        setCurrMoveIndex(moveIndex);
        let newGame = new AmazonsLogic(null, {"size":10, "variation":0});
        for(let i = 0; i <= moveIndex; i++){
            newGame.apply_move(playbackMoves[i]);
        }
        setGame(newGame);
    }

    const DashboardPlayer = (props) => {
        let baseStyle = {flex: "0 1 20px", padding: "10px", display: "flex"};
        let playerColorIndicatorQueen = props.color === "white" ? wqueen : bqueen;
        let playerColorIndicatorQueenAlt = props.color === "white" ? "White Queen Player" : "Black Queen Player";
        return (
            <div style={props.isTurn ? {backgroundColor: "#FFFF0044", ...baseStyle} : {...baseStyle}}>
                <div style={{display:"flex", justifyContent:"center", alignItems: "center", minWidth: "36px", minHeight:"36px", backgroundColor: props.color === "black" ? "#f0d9b5" : "#946f51", borderRadius: "50%", marginRight: "5px"}}>
                    <img style={{maxWidth: "30px", maxHeight:"30px"}} src={playerColorIndicatorQueen} alt={playerColorIndicatorQueenAlt}></img>
                </div>
                <div style={{display: "inline-block"}}>
                    <b style={{"height": "36px", "lineHeight": "36px"}}>{props.name}</b>
                </div>
            </div>
        )
    }

    const MoveList = (props) => {

        const moveListDiv = useRef();

        useEffect(() => {
            // Scroll to the move element that is current, on each update of that index.
            // Reference: https://stackoverflow.com/questions/635706/how-to-scroll-to-an-element-inside-a-div#1592609
            if(props.currMoveIndex >= 0 && props.currMoveIndex < props.moves.length){
                let currMoveElement = moveListDiv.current.children.item(props.currMoveIndex);
                let scrollableParent = moveListDiv.current.parentElement;

                var relativeOffsetTop = currMoveElement.offsetTop - moveListDiv.current.offsetTop - 200;
                scrollableParent.scrollTop = relativeOffsetTop;
            }
        }, []);

        const Move = (props) => {
            let text = props.custom_text !== undefined ? props.custom_text : (props.index + 1 < 10 ? "\u00a0" : "") + (props.index + 1).toString() + ". " + moveToText(props.move)
            let style = {}

            if (!props.isPast && !props.isCurrent) {
                style["color"] = "grey";
            }
            if (props.isCurrent) {
                style["fontWeight"] = "bold";
            }

            return (
                <div onClick={props.onClickF} style={style}>
                    {text}
                </div>
                );
        }

        return (
            <div ref={moveListDiv} style={{fontFamily: "monospace", display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-around", fontSize: "0.6rem"}}>
                {props.moves.map((move, index) => 
                    <Move onClickF={()=>{props.seekFunction(index)}} key={index} move={move} index={index} isCurrent={index===props.currMoveIndex} isPast={index < props.currMoveIndex}/>    
                )}
                {props.isResign ? 
                <Move custom_text={(props.moves.length + 1).toString() + ". resign (0-1)"}/>
                : ""}
                <></>
            </div>
        )
    }
    
    return(
        <div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{flex: "1 1 500px"}}>
                    <AmazonsView game_state={game} last_move={currMoveIndex >= 0 ? playbackMoves[currMoveIndex] : undefined}></AmazonsView>
                </div>
                <div style={{flex: "1 1 200px", maxWidth: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div style={{display: "flex", justifyContent: "space-between", fontSize: "1.3rem"}}>
                        <button class="button-no-style" title="Seek to beginning" onClick={() => {seekToMove(-1)}}>⏮️</button>
                        <button class="button-no-style" title="Go to previous move" onClick={() => {seekToMove(Math.max(0, currMoveIndex - 1))}}>⏪</button>
                        <button class="button-no-style" title="Play/Pause playback" onClick={() => {setPlaying(!playing)}}>{playing ? "⏸️" : "▶️" }</button>
                        <button class="button-no-style" title="Go to next move" onClick={() => {seekToMove(Math.min(playbackMoves.length - 1, currMoveIndex + 1))}}>⏩</button>
                        <button class="button-no-style" title="Seek to end" onClick={() => {seekToMove(playbackMoves.length - 1)}}>⏭️</button>
                    </div>
                    <DashboardPlayer color="black" name="sinany" isTurn={currMoveIndex % 2 === 0}/>
                    <div style={{flex: "1 10 300px", overflow: "scroll"}}>
                        <MoveList moves={playbackMoves} currMoveIndex={currMoveIndex} seekFunction={seekToMove} isResign={true}/>
                    </div>
                    <DashboardPlayer color="white" name="Hippolyta_1_c" isTurn={currMoveIndex % 2 === 1}/>
                </div>
            </div>
        </div>
    ) 
}


export default AmazonsBoard;
export { SinglePlayerAmazonsBoard, PlaybackAmazonsBoard };