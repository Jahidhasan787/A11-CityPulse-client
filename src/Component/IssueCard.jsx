import React from "react";
import { Link } from "react-router";

const IssueCard = ({ issue }) => {
  const { _id, image, category, title, location, amount } = issue;
  return (
    <div>
      <div className="flex flex-col justify-between p-5 rounded-xl  bg-base-300 h-full shadow-sm border  border-gray-100">
        <figure>
          <img
            src={image}
            alt="plant image"
            className="w-[380px] h-[250px] rounded-xl  "
          />
        </figure>
        <div className="">
          <div className="flex justify-between gap-2 items-center">
            <h2 className="card-title">{title}</h2>
            <span className="bg-green-200 rounded px-2 py-1">{category}</span>
          </div>
          <div className=" pb-3">
            <p>{location}</p>
            <p className="font-bold ">Amount: ${amount}</p>
          </div>

          <div className=" ">
            <Link to={""}>
              <button className="btn w-full btn-primary ">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
