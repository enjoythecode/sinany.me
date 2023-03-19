import shuffling_squares from "./assets/art/shuffling_squares.gif"
import its_raining from "./assets/art/its_raining.gif"
import crossing from "./assets/art/crossing.gif"

function Art() {
  return (
	<div style={{"background": "black", "height": "100%", "textAlign": "center"}}>
        <img src={crossing} style={{"width":"400px"}} alt="GIF Art; Crossing, by Sinan Yumurtaci"/>
        <br/>
        <i>Crossing</i>, 2023-03-18

        <br/>

        <img src={its_raining} style={{"width": "400px"}} alt="GIF Art; Its  by Sinan Yumurtaci"/>
        <br/>
        <i>It's Raining</i>, 2023-02-28

        <br/>

        <img src={shuffling_squares} alt="GIF Art; Shuffling Squares, by Sinan Yumurtaci"/>
        <br/>
        <i>Shuffling Squares</i>, 2023-02-27

    </div>
  );
}

export default Art;
