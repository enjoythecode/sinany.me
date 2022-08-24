import './App.css';

function Break() {
	return (
		<span>
			<br/><br/>
		</span>
	)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
	  		<span id="header-top">
			<span className="rainbow-text">Hey, I'm Sinan</span> </span><br/> I worked as a <a>Software Engineer Intern at Google</a>, and I'll gradute <a>Colby College</a> in May 2023.
			<Break/>
	  		I'm a passionate and curious software engineer. I enjoy designing and implementing systems that churn data.
			<Break/>
	  		Currently, I'm building strate.gg where you can play strategy games and looking for a company to join after I graduate.
			<Break/>
	  		See a copy of my resume. If interested, shoot me an email?
        </p>
      </header>
    </div>
  );
}

export default App;
