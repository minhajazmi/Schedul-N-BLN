import {React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import ModalLog from './ModalLog';
import SignUp from './Signup';

function Login() {
    const eye = <FaEye />
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const [signUpModal, setSignUpModal] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
      <div>
    <h1>Welcome Back</h1>
    <div className="signUpForm">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>E-MAIL</label>
      <input type="text" placeholder="Name@email.com" size="60" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <label>PASSWORD</label>
      <input type="password" placeholder="Enter your Password" type={passwordShown ? "text" : "password"} size="60" {...register("password", {required: true, min: 8, maxLength: 72})} />
      <i className="eyeL" onClick={togglePasswordVisiblity}>{eye}</i>
      <p>Forgot password?</p>
      <div><button type="submit" className="accountButton">Login</button></div>
    </form>
    </div>
    <div className="loginConnect">
    <div className="hrSec"><hr class="left"/>Or<hr class="right" /></div>
    <div><button type="submit" className="externalButton">Continue with Google</button></div>
    <div><button type="submit" className="externalButton">Continue with Facebook</button></div>
    <div><button type="submit" className="externalButton">Continue with Apple</button></div>
    <div><p>New to us? <span onClick={() => setSignUpModal(true)}>Sign up</span></p></div>
    <ModalLog trigger={signUpModal} setTrigger={setSignUpModal}><SignUp /></ModalLog> 
    </div>
    </div>
    )
}

export default Login;