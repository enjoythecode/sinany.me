import shuffling_squares from "./assets/art/shuffling_squares.gif"
import its_raining from "./assets/art/its_raining.gif"

function Art() {
  return (
	<div style={{"background": "black", "height": "100vh", "textAlign": "center"}}>
        <img src={shuffling_squares} alt="GIF Art; Shuffling Squares, by Sinan Yumurtaci"/>
        <br/>
        <i>Shuffling Squares, 2023-02-27</i>

        <br/>

        <img src={its_raining} style={{"width": "400px"}} alt="GIF Art; Its  by Sinan Yumurtaci"/>
        <br/>
        <i>It's Raining, 2023-02-28</i>
    </div>
  );
}

export default Art;
