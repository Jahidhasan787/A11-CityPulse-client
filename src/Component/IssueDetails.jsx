import { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../AuthProvider";

const IssueDetails = () => {
  const data = useLoaderData();
  const {user} = use(AuthContext);
  const { image, title, description, location, category, date,_id ,email} = data;

   const handleDelete = (id) => {
       fetch(`https://a11-city-pulse-server.vercel.app/issues/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          res.json()
        })
        .catch((err) => console.log(err));
    }
    
  

  return (
    <div>
      <div className="md:w-9/12 mx-auto pb-10 ">
       <div className="text-center font-bold text-2xl py-5">Issue Details</div>
        <div className="flex flex-col md:flex-row gap-5 items-center shadow-sm rounded p-5">
          <img
            className="rounded h-[200px] md:h-[400px] w-full md:w-[50%]"
            src={image}
            alt=""
          />
          <div>
            <h2 className="text-2xl font-bold pb-2">{title}</h2>
            <span className="text-red-400 rounded px-2 py-1 outline">
              {category}
            </span>
            <p className="pt-2">Location : {location}</p>
            <p className="pb-2">Date : {date}</p>
            <p className="pb-2 text-gray-600">{description}</p>
            <div className="flex items-center gap-2 pb-2 font-bold">
              <Link to={`/update-issue/${_id}`}className={`btn ${user?.email === email? "text-white bg-blue-500":"btn-disabled" }`}><button className="">Edit</button></Link>
              <button className="btn btn-primary">Boost</button>
              <label htmlFor="my_modal_6" className={`btn ${user?.email === email?" btn-error":"btn-disabled"}`}>
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
