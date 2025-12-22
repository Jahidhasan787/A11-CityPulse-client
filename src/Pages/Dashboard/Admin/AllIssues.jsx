import React from "react";
import UseAxiosSecure from "../../../Routes/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const AllIssues = () => {
  const axiosSecure = UseAxiosSecure();

  const {refetch, data: issues = [] } = useQuery({
    queryKey: ["issues", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/issues");
      return res.data;
    },
  });

  const handleDelete =(id)=>{
      axiosSecure.delete(`/issues/${id}`).then((res) => {
        if (res.data.deletedCount) {
          refetch();
          toast(`issue deleted successfully`);
        }
      });
    }

  return (
    <div className="pt-2">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{issue.title}</td>
                <td>{issue._id}</td>
                <td>{issue.priority}</td>
                <td>{issue.status}</td>
                <td className="flex gap-1">
                  <button className="btn btn-primary ">
                    <FaCheck />
                  </button>
                  <button className="btn btn-error ">
                    <ImCross />
                  </button>
                  <button className="btn btn-accent text-lg" onClick={()=>handleDelete(issue._id)}>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllIssues;
