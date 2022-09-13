// import logo from "./logo.svg";
import diagram1 from "./aws-ci-cd-with-travis.png";
import diagram2 from "./swiss-summit.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={diagram2} className="photo" alt="diagram" />
        <img src={diagram1} alt="diagram" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://docs.travis-ci.com/user/deployment/elasticbeanstalk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WELCOME AWS Elastic Beanstalk CI/CD PIPELINE WITH TRAVIS
        </a>
      </header>
    </div>
  );
}

export default App;
