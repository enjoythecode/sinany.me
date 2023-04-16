import { observer } from "mobx-react"
import { useEffect, useState, useRef, useLayoutEffect } from "react"
import wqueen from "../../assets/images/wqueen.png"
import bqueen from "../../assets/images/bqueen.png"
import fire from "../../assets/images/fire.png"

import "./amazons.css";

const amazonsBoardDynamicGridRules = (x) => {
  return {
    gridTemplateColumns: "repeat(" + x + ", 1fr)",
    gridTemplateRows: "repeat(" + x + ", 1fr)",
  };
};

const preload_images = () => {
  const imagesInAmazons = [
    wqueen, bqueen, fire
  ];
  let preloadedImages = imagesInAmazons.map((imageSrc) => {
    return <img src={imageSrc}></img>;
  });
};

const AmazonsViewDisplayCoordinatesOnHover = observer(({ game_state }) => {

  // on first load, pre-load these images
  useEffect(() => {
    preload_images();
  }, []);

  let [hover_x, set_hover_x] = useState(null);
  let [hover_y, set_hover_y] = useState(null);

  const mouseEnterCellHandler = (x, y) => {
    set_hover_x(x);
    set_hover_y(y);
    console.log(x, y)
  }

  const mouseLeaveBoardHandler = () => {
    set_hover_x(null);
    set_hover_y(null);
    console.log("mouse left")
  }

  let styleClassesForCellAtCoord = (cell) => {
    
    let classes = [];
    let x = Number(cell[0]);
    let y = Number(cell[1]);
  
    let on_row = hover_x !== null && x === hover_x;
    let on_col = hover_y !== null && y === hover_y;
    if (on_row && on_col){
      classes.push("indicatorSecondary");
      classes.push("indicatorOuter")
    } else {
      if (on_row || on_col){  
        classes.push("indicatorSecondary");
        classes.push("indicatorInner")
      }
    } 

    classes.push(
      ((y % game_state.config.size) + x) % 2 ? "cellLight" : "cellDark"
    );

    return classes.join(" ");
  };

  let pieces = [];

  for (let x = 0; x < game_state.config.size; x++) {
    for (let y = 0; y < game_state.config.size; y++) {
      

      if (game_state.board[x][y] !== 0) {
        let img_src = [
          wqueen, bqueen, fire
        ][game_state.board[x][y] - 1];
        let img_alt = ["White Queen", "Black Queen", "Burnt Off Square"][
          game_state.board[x][y] - 1
        ];

        let positionCss = {
          left: y * 10 + "%", // TODO: FIX: Make this adaptive to board size!
          top: x * 10 + "%",
        };

        pieces.push(
          <img
            src={img_src}
            alt={img_alt}
            className={"amazonsPiece"}
            style={{ ...positionCss }}
            key={pieces.length}
            onMouseEnter={() => mouseEnterCellHandler(x, y)}
          ></img>
        );
      }
      if (hover_x !== null && hover_y !== null && x === hover_x && y === hover_y){
        let positionCss = {
          left: y * 10 + 1.3 + "%", // TODO: FIX: Make this adaptive to board size!
          top: x * 10 - 5 + "%",
        };
        pieces.push(
          <p
            
            className={"amazonsPiece"}
            style={{ ...positionCss, fontSize: "min(22px, calc(2.5vw))", color: "black"}}
          >
          {String.fromCharCode(parseInt(y) + "A".charCodeAt(0)) + (10-x).toString()}
          </p>
        )
      }
    }
  }

  // code reference: https://bobbyhadz.com/blog/react-get-width-of-element
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  if (game_state) {
    let boardCells = [];
    let size = game_state.board.length;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
      
        let content = [];
        if(y === 0){
          content.push(<p style={{fontSize: (width/30).toString()+"px", position: "absolute", top:"1%", left: "1%", padding: "0", margin: "0"}}>{10-x}</p>)
        }
        if(x === size - 1){
          content.push(<p style={{fontSize: (width/30).toString()+"px", position: "absolute", bottom:"1%", right: "1%", padding: "0", margin: "0"}}>{String.fromCharCode(parseInt(y) + "A".charCodeAt(0))}</p>)
        }
        
        boardCells.push(
          <div
            style={{position: "relative"}}
            className={styleClassesForCellAtCoord(x.toString() + y.toString())}
            key={x * size + y}
            onMouseEnter={() => mouseEnterCellHandler(x, y)}
          >{content ? content : ""} </div>
        );
      

      }
    }

    return (
      <div
        ref={ref}
        className={"amazonsBoard"}
        style={{...amazonsBoardDynamicGridRules(game_state.board.length), width: "100%"}}
        onMouseLeave={() => mouseLeaveBoardHandler()}
      >
        {boardCells}
        {pieces}
      </div>
    );
  } else {
    <p>Game is loading...</p>;
  }
});

export default AmazonsViewDisplayCoordinatesOnHover;
