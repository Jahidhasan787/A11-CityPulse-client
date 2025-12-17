import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, comment, rating, location } = review;

  return (
    <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg">
      <div className="flex gap-1 items-center text-yellow-500">
       <span className="text-gray-600 text-2xl font-bold pr-1 ">{rating}</span> 
        {
            [...Array(rating)].map(i=>(<FaStar key={i}></FaStar>))
        }
      </div>
      <p className="text-gray-600 mb-4">{comment}</p>
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-gray-500">{location}</p>
    </div>
  );
};

export default ReviewCard;
