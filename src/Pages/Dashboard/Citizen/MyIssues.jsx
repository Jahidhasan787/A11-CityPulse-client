import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../../../AuthProvider';
import UseAxiosSecure from '../../../Routes/UseAxiosSecure';
import { Link } from 'react-router';

const MyIssues = () => {
    const {user} = use(AuthContext);
    const axiosSecure = UseAxiosSecure()
    const {data : issues =[]}= useQuery({
        queryKey:["my-issues", user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/my-issues?email=${user?.email}`);
            return res.data;
        }
    })

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
        <div className='min-h-screen'>
            <p className='text-5xl text-center mt-5'>My Issues ({issues.length})</p>
              {issues.map((issue) => (
        <div key={issue._id}>
          <div className="bg-green-200 m-5 flex flex-col md:flex-row items-center justify-between p-5 rounded-xl gap-5">
            <div className="flex w-[90%] lg:w-[25%] items-center">
              <img className="md:w-20 w-40 h-30 md:h-22  rounded-xl" src={issue.image} alt="" />
              <div>
                <h1 className="px-2">Title: {issue.title}</h1>
                <h1 className="text-red-400 rounded px-2 ">{issue.category}</h1>
                <p className='px-2'>Location: {issue.location}</p>
              </div>
            </div>
            <div className=" w-[35%] hidden lg:block ">
              <div className="flex items-center justify-center break-all">
                {issue.description}
              </div>
            </div>
            <div className="flex md:justify-end items-center gap-3 w-[90%] md:w-[20%] lg:w-[30%] ">
              <Link to={`/issueDetails/${issue._id}`}>
                <button className="btn btn-primary">View</button>
              </Link>
              <Link to={`/update-issue/${issue._id}`}>
                <button className="btn btn-accent">Update</button>
              </Link>
              <label htmlFor="my_modal_6" className="btn btn-error">
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
                        handleDelete(issue._id);
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
      ))}
        </div>
    );
};

export default MyIssues;