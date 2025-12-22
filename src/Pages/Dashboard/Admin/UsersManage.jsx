import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosSecure from "../../../Routes/UseAxiosSecure";
import { FaUserMinus, FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";

const UsersManage = () => {
  const axiosSecure = UseAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast("user make as admin");
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = {role:"user"}
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
    .then(res =>{
        if(res.data.modifiedCount){
            refetch();
            toast("remove from admin")
        }
    })
  };

  return (
    <div>
      <h2 className="text-5xl text-center">Manage Users ({users.length})</h2>
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
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user._id}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button className="btn btn-error"onClick={() => handleRemoveAdmin(user)}>
                      <FaUserMinus />
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManage;
