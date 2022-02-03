import { React, useState } from "react";
import Modal from './Modal';
import ModalLog from './ModalLog';
import ModalTeam from './ModalTeam';
import Team from './Team'
import SignUp from './Signup';
import Login from './Login';
import './Header.css';
import logo from './images/logo.svg';

function Header() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="header">
      <div className="headerItem1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="headerItem1">
        <h1 onClick={() => setFirstModal(true)}>
          Time management style
        </h1>
      </div>
      <div className="headerItem1">
        <h1 onClick={() => setSecondModal(true)}>How does it work?</h1>
      </div>
      <div className="headerItem1">
        <h1 onClick={() => setThirdModal(true)}>About us</h1>
      </div>
      <div className="headerItem2"><p onClick={() => setLoginModal(true)}>log in</p></div>
      <div className="headerItem2">
        <button className="primaryButton" onClick={() => setSignUpModal(true)}>
          Sign up for free
        </button>
      </div>

      <Modal trigger={firstModal} setTrigger={setFirstModal}>
        <div>
          <h2>What is a time management style?</h2>
          <p>
            Your time management style is a way of describing how you plan and
            organise your tasks, in order to be most productive. Everyone is
            different, and so there's no one piece of advice that works for
            everyone when it comes to managing your time more efficiently.
          </p>
          <p>
            Which is why we at Schedule N believe the first step in improving
            your time management style is knowing what it is.
          </p>
          Start your journey by taking our quiz!
        </div>
      </Modal>
      <Modal trigger={secondModal} setTrigger={setSecondModal}>
        <div>
          <h2>How does it work?</h2>
          <p>
            The process is simple! Take our quiz to find out what your time
            management style is and get tailored advice of how to maximise your
            productivity that will suit your personality.
          </p>
          <p>
            We’ve gathered advice from people just like you, so that you can
            spend more time being productive
          </p>
        </div>
      </Modal>
     <ModalTeam trigger={thirdModal} setTrigger={setThirdModal}><Team/></ModalTeam>
     <ModalLog trigger={loginModal} setTrigger={setLoginModal}><Login /></ModalLog>
     <ModalLog trigger={signUpModal} setTrigger={setSignUpModal}><SignUp /></ModalLog> 
     <div>
     </div>
    </div>
  );
}


export default Header;
