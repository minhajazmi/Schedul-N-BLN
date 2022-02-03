import { React } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import Signup from './Signup';
import Header from './Header';
//import Footer from "./Footer";
import clock from './images/clock.svg';

function App() {
  //const location = useLocation();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  {/*   {location.pathname === "/" && <Footer />}    */}
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <div className="textContainer">
        <div>
          <h1>
            manage your time based on your personality and your preferences
          </h1>
          <h2>Take a quiz and personalize your time management</h2>
        </div>
        <div className="buttonContainer">
          <button className="primaryButton" onClick={() => navigate("/quiz")}>
            Take a Quiz
          </button>
          <p>Learn about your type</p>
        </div>
      </div>
      <div className="imageContainer">
        <img src={clock} alt="Clock between day and night}" />
      </div>
    </div>
  );
}

export default App;
