import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<p id="header-top">
				<span className="rainbow-text">Hey, I'm Sinan</span>
			</p>

			<p className="header-second">
	  		<ol className="no-margin">
				<li>I was a <span className="fake-link" href="#google-intern">Software Engineering Intern at Google</span></li>
	  			<li>I'll gradute <span className="fake-link" href="#education-colby">Colby College</span> in May 2023</li>
				<li>I'm coding <span className="fake-link" href="#projects-strategg">strate.gg</span> as a hobby project</li>
	  		</ol>
	  </p>
		<p className="header-second">
		I'm looking to join a company using data in exciting ways.<br/>
		Check out my <a href="/Sinan_Yumurtaci_Resume.pdf">resume</a>, and <a href="mailto:sinan.yumurtaci@gmail.com">let's chat</a>!
			</p>
      </header>
    </div>
  );
}

export default App;
