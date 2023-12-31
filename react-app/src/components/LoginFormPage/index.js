import React, { useState } from "react";
import { login, signUp } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpToggle, setSignUpToggle] = useState(true);

  const [signupEmail, setSignupEmail] = useState("");
  const [username, setUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('cbum@gmail.com', 'password'));
  }

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    if (signupPassword === confirmPassword) {
        const data = await dispatch(signUp(username, signupEmail, signupPassword, firstName, lastName));
        if (data) {
          setErrors(data)
        }
    } else {
        setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };

  const signupSwitch = () => {
    setSignUpToggle(!signUpToggle)
    setErrors([])
    setEmail("")
    setPassword("")
    setSignupEmail("")
    setSignupPassword("")
    setUsername("")
    setConfirmPassword("")
    setFirstName("")
    setLastName("")
  }

  return (
    <section className="loginPageContainer">

      <div className="loginImageContainer">

      </div>

      <div className="loginSignupFormContainer">

        <div className="loginFormContainer">
          <h1 className="loginHeader">Flexcamp</h1>

          {signUpToggle ? (
            // LOGIN FORM
            <form onSubmit={handleSubmitLogin} className="loginForm">
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>

              <input
                className="loginInput"
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className="loginInput"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="loginInput" id="loginButton">Log In</button>

              <button className="loginInput" id="loginButton" onClick={demoLogin}>Demo User Log In</button>
            </form>
          )
            :
            // SIGN UP FORM
            (
              <form onSubmit={handleSubmitSignup} className="loginForm">
                <ul>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>

                  <input
                    type="text"
                    value={signupEmail}
                    className="loginInput"
                    placeholder="Email"
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    value={username}
                    className="loginInput"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    value={firstName}
                    className="loginInput"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    value={lastName}
                    className="loginInput"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />

                  <input
                    type="password"
                    value={signupPassword}
                    className="loginInput"
                    placeholder="Password"
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />

                  <input
                    type="password"
                    value={confirmPassword}
                    className="loginInput"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />

                <button type="submit"  className="loginInput" id="loginButton">Sign Up</button>
                <button className="loginInput" id="loginButton" onClick={demoLogin}>Demo User Log In</button>
              </form>
            )
          }
        </div>

        <section>
          {signUpToggle ?
            (<div className="loginSignupSwitch">
              <p>Don't have an account?</p>
              <p className="signupSwitch" onClick={signupSwitch}>Sign up</p>
            </div>)
            :
            (<div className="loginSignupSwitch">
              <p>Already have an account?</p>
              <p className="signupSwitch" onClick={signupSwitch}>Sign in</p>
            </div>
            )}
        </section>

      </div>

    </section>
  );
}

export default LoginFormPage;
