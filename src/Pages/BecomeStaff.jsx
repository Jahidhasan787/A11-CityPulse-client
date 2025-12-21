import React, {  use, useState } from "react";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import UseAxiosSecure from "../Routes/UseAxiosSecure";


const BecomeStaff = () => {
  const [eye, setEye] = useState(false);
  const [error, setError] = useState("");
  const{user} = use(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      photo: e.target.photo.value,
    };
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

    console.log(formData)
    console.log(user)

      axiosSecure.post('/', formData)
  
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-11/12 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-4xl font-bold pb-5">Be a staff!</h1>
            <fieldset className="fieldset">
              <label className="label">Name:</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email:</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Phone No:</label>
              <input
                type="number"
                name="phone"
                className="input"
                placeholder="Phone no."
              />
              <label className="label">Photo URL:</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />
              <label className="label">Password:</label>
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
                Submit
              </button>
              {error && <p className="py-1 text-red-600">{error}</p>}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeStaff;
