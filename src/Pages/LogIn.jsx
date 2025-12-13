import React, { use, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const emailRef = useRef();
  const { logIn, signInWithGoogle, user} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("password must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("password must have uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("password must have lowercase letter");
      return;
    } else {
      setError("");
    }
    setError("");
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Logged in Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        
        setError(errorMessage);
      });
  };

  const logInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  

  if (user && user.email) {
    return (
      <>
        {location.state ? (
          <Navigate state={location} to={location.state}></Navigate>
        ) : (
          <Navigate to="/"></Navigate>
        )}
        ;
      </>
    );
  } else {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogIn} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  ref={emailRef}
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={eye ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setEye(!eye);
                    }}
                    className="btn btn-xs absolute right-6 z-1 top-2"
                  >
                    {eye ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div>
                  <a className="link link-hover">
                    Forgot password?
                  </a>
                </div>

                <button className="btn btn-neutral mt-4 mb-0.5">Login</button>
                {error && <p className="py-1 text-red-600">{error}</p>}
                <p className="mb-5 text-center text-sm">
                  Don't have an account?
                  <Link to="/register" className="text-blue-600 font-bold ">
                    {" "}
                    Register
                  </Link>
                </p>
                <button
                  onClick={logInWithGoogle}
                  className="btn text-blue-500 mt-2"
                >
                  <FcGoogle className="text-xl" />
                  Continue with Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
