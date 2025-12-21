import { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../AuthProvider";

const IssueDetails = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const {
    image,
    title,
    description,
    location,
    category,
    date,
    _id,
    email,
    priority,
    status,
  } = data;

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/issues/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="md:w-9/12 mx-auto  pb-10 ">
        <div className="text-center font-bold text-2xl py-5">Issue Details</div>
        <div className="flex flex-col md:flex-row gap-5 items-center bg-white shadow-sm rounded p-5">
          <img
            className="rounded h-[200px] md:h-[400px] w-full md:w-[50%]"
            src={image}
            alt=""
          />
          <div>
            <h2 className="text-2xl font-bold pb-5">{title}</h2>
            <span className="text-gray-500 "> Category: {category}</span>
            <p className="">Location : {location}</p>
            <p className="">Date : {date}</p>
            <p>
              priority:{" "}
              <span
                className={` ${
                  priority === "High" ? " text-red-700" : " text-blue-700"
                }`}
              >
                {priority}
              </span>
            </p>
            <p>
              status:{" "}
              <span
                className={`${
                  status === "Resolved"
                    ? " text-green-700"
                    : status === "In Progress"
                    ? " text-yellow-700"
                    : " text-red-700"
                }`}
              >
                {status}
              </span>
            </p>
            <p className=" text-gray-600 pb-5">Description: {description}</p>
            <div className="flex items-center gap-2  font-bold">
              <Link
                to={`/update-issue/${_id}`}
                className={`btn ${
                  user?.email === email
                    ? "text-white bg-blue-500"
                    : "btn-disabled"
                }`}
              >
                <button className="">Edit</button>
              </Link>
              <Link to={`/dashboard/payment/${_id}`} className={`btn btn-primary ${                  priority === "High" ? "btn-disabled" :""}`} >Boost</Link>
              <label
                htmlFor="my_modal_6"
                className={`btn ${
                  user?.email === email ? " btn-error" : "btn-disabled"
                }`}
              >
                Delete
              </label>

              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Hello!</h3>
                  <p className="py-4">Are you sure you want to delete this?</p>
                  <div className="modal-action">
                    <span
                      onClick={() => {
                        handleDelete(_id);
                      }}
                      className=" btn-error mr-2"
                    >
                      <label htmlFor="my_modal_6" className="btn">
                        Yes
                      </label>
                    </span>
                    <label htmlFor="my_modal_6" className="btn">
                      back
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
