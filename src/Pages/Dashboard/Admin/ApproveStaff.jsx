import React from "react";
import UseAxiosSecure from "../../../Routes/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

const ApproveStaff = () => {
  const axiosSecure = UseAxiosSecure();

  const { refetch, data: staffs = [] } = useQuery({
    queryKey: ["stuffs", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/staffs");
      return res.data;
    },
  });

  const updateStatus = (id, status) => {
    const updateInfo = { status: status };
    axiosSecure.patch(`/staffs/${id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast(`staff has been ${status}`);
      }
    });
  };

  const handleApproval = (id) => {
    updateStatus(id, "approved");
  };
  const handleReject = (id) => {
    updateStatus(id, "rejected");
  };

  return (
    <div>
      <h2 className="text-5xl text-center">
        Staffs Pending Approval ({staffs.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Staff Id</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((staff, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{staff.name}</td>
                <td>{staff.email}</td>
                <td>{staff._id}</td>
                <td>{staff.status}</td>
                <td className="flex gap-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleApproval(staff._id)}
                  >
                    <FaCheck />
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => handleReject(staff._id)}
                  >
                    <ImCross />
                  </button>
                  <button className="btn btn-accent">
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

export default ApproveStaff;
