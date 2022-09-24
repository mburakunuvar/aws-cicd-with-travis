// import logo from "./logo.svg";
import diagram1 from "./aws-ci-cd-with-travis.png";
import diagram2 from "./swiss-summit.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WELCOME TO AWS Swiss Cloud Day </h1>
        <img src={diagram2} className="photo2-summit" alt="summit" />
        <h2>
          CI - Continuous integration:{" "}
          <h3>
            {" "}
            software development practice where developers regularly merge their
            code changes into a central repository, after which automated builds
            and tests are run.
          </h3>
        </h2>

        <h2>
          CI - Continuous Delivery:{" "}
          <h3>
            {" "}
            software development practice where code changes are automatically
            built, tested, and prepared for production release
          </h3>
        </h2>

        <h2>
          CI - Continuous Deployment:{" "}
          <h3>
            minimizes explicit approvals making the entire software release
            process automated.{" "}
          </h3>
        </h2>

        <img src={diagram1} className="photo1-travis" alt="travis" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://docs.travis-ci.com/user/deployment/elasticbeanstalk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS Elastic Beanstalk CI/CD PIPELINE WITH TRAVIS
        </a>
      </header>
    </div>
  );
}

export default App;
