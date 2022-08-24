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
			Hey, I'm Sinan. I was a Software Engineer Intern at Google, and I'll gradute Colby College in May 2023.
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
