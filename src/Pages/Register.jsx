import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import UseAxiosSecure from "../Routes/UseAxiosSecure";

const Register = () => {
  const [eye, setEye] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { createUser, setUser, signInWithGoogle, updateUser } =
    use(AuthContext);

  const axiosSecure = UseAxiosSecure();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
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
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          email: user.email,
          displayName: name,
          photoURL:photo

        }
          axiosSecure.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId){
              console.log("user created in the database")
            }
          })

        console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(error);
          });
        toast("Register Complete");
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const logInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-11/12 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-4xl font-bold pb-5">Register now!</h1>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
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
              <button type="submit" className="btn btn-neutral mt-4 mb-1">
                Register
              </button>
              {error && <p className="py-1 text-red-600">{error}</p>}
              <p className="mb-5 text-center text-sm ">
                Already have an account?
                <Link to="/login" className="text-blue-600 font-bold">
                  {" "}
                  Log in
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
};

export default Register;
