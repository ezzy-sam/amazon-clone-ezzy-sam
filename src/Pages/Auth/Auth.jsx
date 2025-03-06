




import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading]=useState({
    signIn:false,
    signUp:false
  })

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate()
  const navStateData = useLocation()
  console.log(navStateData);
  


  // console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (e.target.name === "signin") {

      setLoading({...loading, signIn:true})
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER", // Make sure Type is defined somewhere
            user: userInfo.user,
          });
          setLoading({...loading, signIn:false})
          navigate(navStateData?.state?.redirect || "/")
        })
        .catch((err) => {
          setError(err.message); 
            setLoading({ ...loading, signIn: false });
        });
    } else if (e.target.name === "signup") {
         setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
       
          dispatch({
            type: "SET_USER", // Make sure Type is defined somewhere
            user: userInfo.user,
          })
             setLoading({ ...loading, signUp: false });
              navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
             setLoading({ ...loading, signUp: false});
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {
          navStateData?.state?.msg && (
            <small
            style={{
              padding:"5px",
              textAlign:"center",
              color:"red",
              fontWeight:"bold",
            }} 
            
            
            >
              {navStateData?.state?.msg}
            </small>


          )
        }
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />
          </div>
          {error && <p className={classes.error}>{error}</p>}{" "}
          {/* Display the error */}
          <button
            type="button" // Changed to type="button" to prevent default form submission
            name="signin"
            onClick={authHandler}
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "sign In"
            )}
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="button" // Changed to type="button" to prevent default form submission
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            " Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;

