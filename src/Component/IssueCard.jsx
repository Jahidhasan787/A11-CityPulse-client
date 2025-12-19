import React from "react";
import { FaGreaterThan, FaMapMarkerAlt, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router";

const IssueCard = ({ issue }) => {
  const { _id, image, category, title, location, status, priority } =
    issue;
  return (
    <div>
      <div className="flex flex-col justify-between p-5 rounded-xl  h-full  bg-white shadow-sm">
        <figure>
          <img
            src={image}
            alt=""
            className="w-full mx-auto h-[250px] rounded-xl mb-3"
          />
        </figure>
        <div className="">


          <div className="flex justify-between gap-2 items-center pb-3">
            <h2 className="card-title">{title}</h2>
            <span className="bg-green-200 text-[.8rem] rounded-md px-2 py-1">{category}</span>
          </div>

          <div className=" pb-3">
            <h2 className="card-title">{title}</h2>
            <span className=" text-sm rounded text-gray-500">
              Category: {category}
            </span>
            <div className="flex flex-wrap gap-2 py-3">
              <span
                className={`px-3 py-1 text-sm rounded-full  ${
                  status === "Resolved"
                    ? "bg-green-100 text-green-700"
                    : status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status}
              </span>
              <span
                className={`px-3 py-1 text-sm rounded-full  ${
                  priority === "High"
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {priority} Priority
              </span>
            </div>
            <hr className="text-gray-300"/>
          </div>
          <div className="flex gap-1 items-center text-gray-600 pb-2">
            <FaMapMarkerAlt />
            <p>{location}</p>
            
          </div>
          <hr className="text-gray-300"/>
          <div className="flex items-center justify-between pt-3">
            <button className=" flex items-center gap-2 px-2 py-1 rounded-lg border cursor-pointer text-gray-700 hover:bg-blue-100 "> <FaThumbsUp />{"Upvote"}</button>
            <Link to={`/issueDetails/${_id}`}>
              <button className="btn btn-primary hover:bg-blue-700">View Details <FaGreaterThan /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
