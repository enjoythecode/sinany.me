import './App.css';

function App() {
  return (
	<div className="App">
		<header className="App-header">
		<div>
			<p id="header-top">
				<span className="rainbow-text">Hey, I'm Sinan</span><span className="hidden-text">, and this is a bit about me</span>
			</p>

				<p className="header-second">
				<ol className="no-margin">
					<li>I was a <span href="#google-intern">Software Engineering Intern at Google</span></li>
					<li>I'll graduate <span href="#education-colby">Colby College</span> in May 2023</li>
					<li>I'm coding <span href="#projects-strategg">strate.gg</span> as a hobby project</li>
				</ol>
			</p>
		</div>
		<div className="horizontal-right">
			<div className="rainbow-box">
				<p className="header-second">
					I'm looking to join a company using data in exciting ways.<br/>
					Check out my <a href="/Sinan_Yumurtaci_Resume.pdf">resume</a>, and <a href="mailto:sinan.yumurtaci@gmail.com">let's chat!</a>
				</p>
			</div>
		</div>
      </header>
    </div>
  );
}

export default App;
