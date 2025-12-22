import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
      <div className="card w-96  bg-base-100 mx-auto card-sm shadow-sm m-10">
        <div className="card-body">
          <h2 className="text-4xl text-center pb-5 text-red-500">payment Cancelled</h2>
          <Link to="/dashboard/my-issues" className="btn btn-primary">
          Try Again
        </Link>
        </div>
      </div>
  );
};

export default PaymentCancel;
