import './App.css';

function App() {
  return (
	<div className="App">
		<header className="App-header">
		<div>
			<p id="header-top" className="narrow">
				<span className="rainbow-text">Hey, I'm Sinan!</span> <span className="hidden-text"> I am a software engineering student graduating this May 2023</span>
			</p>

			<p className="highlight-paragraph narrow">
				I <span className="rainbow-text">interned at Google</span> last summer, using <span className="skill">Java</span> and <span className="skill">Go</span> to help build a knowledge graph with trillions of data points. 
			</p>

			<p className="highlight-paragraph narrow">
				I'm developing a <span className="rainbow-text">real-time strategy game website</span> using <span className="skill">Python (Flask)</span> and <span className="skill">Javascript (React)</span>.
			</p>

		</div>
		<div className="horizontal-right">
			<div className="rainbow-box">
				<p className="highlight-paragraph narrow" style={{"marginTop": 0}}>
					I am looking to join a team using data in exciting ways.<br style={{"marginBottom": "0.6em"}}/>
					Check out my <a href="/Sinan_Yumurtaci_Resume.pdf">resume</a> and <a href="mailto:sinan.yumurtaci@gmail.com">let's chat!</a>
				</p>
			</div>
		</div>
      </header>
    </div>
  );
}

export default App;
