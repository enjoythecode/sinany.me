import './App.css';

function App() {

	/*const EXPERIENCE_TYPE = {
		Employment: "Employment",
		Project: "Project",
	}
	const SKILL = {
		Python: "Python",
		Flask: "Flask",
		Pytest: "Pytest",

		Redis: "Redis",
		Docker: "Docker",

		Java: "Java",
		Go: "Go",
		GoogleCloud: "Google Cloud",
		PerformanceOptimization: "Performance Optimization",

		Javascript: "Javascript",
		React: "React",
		Jest: "Jest",

		Git: "Git",

		Bash: "Bash",
	}
	const resume = {
		"experience": {
			"google":
			{
				"type": EXPERIENCE_TYPE.Employment,
				"skills": [SKILL.Java, SKILL.Go, SKILL.Bash, SKILL.GoogleCloud, SKILL.PerformanceOptimization, SKILL.Git,]
			}
		}
	};*/


  return (
	<div className="App">
		<header className="App-landing">
			<div>
				<h1>
					<span className="rainbow-text">Hi, I'm Sinan! </span> 
						I am a software engineering student looking to join a team of smart, passionate problem solvers.
					
				</h1>

				<p><span>I am  graduating May 2023; {/*<br style={{"marginBottom": "0.6em"}}/>*/}
					check out my <a className="rainbow-link" href="/Sinan_Yumurtaci_Resume.pdf">resume</a> (or read below), and <a className="rainbow-link" href="mailto:sinan.yumurtaci@gmail.com">let's chat!</a></span></p>
			</div>
		</header>


		<div className="resume-item narrow">
			<p>
				I interned at <span className="rainbow-text">Google</span> last summer, helping Data Commons develop a knowledge graph of over a billion time series.
				<br/>
				<br/>
				<span className="hidden-text">I improved the efficiency of their development tooling by 30%, among multiple other contributions.</span>
			</p>
			
			<div className="hidden">
			<br/>
				<a>
					<span className="resume-item-cta"><i>click to learn more »</i></span>
				</a>
			</div>
		</div>

		<div className="resume-item narrow">
			<p>
				I'm developing <span className="rainbow-text">strate.gg</span>, a real-time strategy website for games such as Amazons,
				Mancala, and Chess.

				<br/>
				<br/>
				<span className="hidden-text">This is a full-stack development project where I develop my skills in automated testing with CI, 
				containerized deployments with Docker, React, and Redis.</span>
			</p>
		</div>

		<div className="resume-item narrow">
			<p>
				I interned at <span className="rainbow-text">98point6</span> during Summer 2021, contributing to their mission to provide affordable healthcare.
			
				<br/>
				<br/>
				<span className="hidden-text">I designed and implemented a recommender system poised to save 120 physicians-hours (equivalent to $10,000) per year using Machine Learning.</span>
			</p>
		</div>
		

      
    </div>
  );
}

export default App;
