import React, {  use } from "react";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import UseAxiosSecure from "../Routes/UseAxiosSecure";
import { toast } from "react-toastify";


const BecomeStaff = () => {
  const{user} = use(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: user?.email,
      phone: e.target.phone.value,
      photo: e.target.photo.value,
      address: e.target.address.value
    };

      axiosSecure.post('/staffs', formData)
      .then(res =>{
        if(res.data.insertedId){
          toast("Your application has been submitted ")
          e.target.reset();
        }
      })
  
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
              <label className="label">Phone No:</label>
              <input
                type="number"
                name="phone"
                className="input"
                placeholder="Phone no."
              />
              <label className="label">Address:</label>
                <div className="relative">
                  <textarea
                    className="textarea w-full"
                    rows={4}
                    name="address"
                    id=""
                    placeholder="Write your address.."
                  ></textarea>
                </div>
              <label className="label">Photo URL:</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />
              <button type="submit" className="btn btn-neutral mt-4 mb-1">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeStaff;
