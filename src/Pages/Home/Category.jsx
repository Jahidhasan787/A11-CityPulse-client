import React from "react";
import { BsDropletFill } from "react-icons/bs";
import { FaHammer, FaRoad, FaTools, FaTrashAlt } from "react-icons/fa";

const Category = () => {
  return (
    <div>
      <div className="mt-16 mx-auto">
        <h2 className="text-4xl mb-2 text-center font-bold ">Issue Category</h2>
        <p className="text-gray-600 text-center mb-8">
          Filter issues by category for better organization and faster access.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-5">
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2">
              <FaTrashAlt />
            </p>
            <h3 className="text-xl font-semibold">Garbage</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2">
              <FaHammer />
            </p>
            <h3 className="text-xl font-semibold">Illegal Construction</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2">
              <FaTools />
            </p>
            <h3 className="text-xl font-semibold">Broken Public Property</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2">
              <FaRoad />
            </p>
            <h3 className="text-xl font-semibold">Road Damage</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2">
              <BsDropletFill />
            </p>
            <h3 className="text-xl font-semibold">Water leakage</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
