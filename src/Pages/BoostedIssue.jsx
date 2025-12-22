import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosSecure from "../Routes/UseAxiosSecure";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const BoostedIssue = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: issues = [] } = useQuery({
    queryKey: ["issues", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/boosted-issues");
      return res.data;
    },
  });

  return (
    <div className="py-8">
      <h1 className="text-4xl text-center font-bold">All Issues</h1>
      <p className=" text-center text-gray-600 pb-5">
        A complete list of all reported issues with real-time status updates
      </p>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>issue Id</th>
              <th>Priority</th>
              <th>Status</th>
              <th className="flex items-center justify-center">Show</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{issue.title}</td>
                <td>{issue._id}</td>
                <td>{issue.priority}</td>
                <td>Boosted</td>
                <td className="flex items-center justify-center">
                    <Link to={`/issueDetails/${issue._id}`}><button className="btn btn-ghost"><FaEye /></button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoostedIssue;
