import { React, useEffect } from 'react';
import './index.css';


function WeatherWidget() {
	useEffect(() => {
		let weatherWidgetF = (d,s,id) => {var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://weatherwidget.io/js/widget.min.js";fjs.parentNode.insertBefore(js,fjs);}}
		weatherWidgetF(document,"script","weatherwidget-io-js");
	})

	return (
		<div>
			<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/" data-label_1="Waterville" data-label_2="Weather Forecast" data-theme="original" >Waterville Weather Forecast</a>
		</div>
	)
}

function StartPage () {
	return ( <div>
			<h1>Magnificient day!</h1>
			<WeatherWidget />
		</div> )
}

export default StartPage
