import React, { useEffect, useState } from "react";
import IssueCard from "../../Component/IssueCard";

const LatestResolve = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    {
      fetch(`http://localhost:3000/issues`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, []);

  return (
    <div>
      <h2 className="text-4xl mt-16 mb-3 text-center font-bold ">
        Latest Resolve Issue
      </h2>
      <p className="text-gray-600 text-center">
        Recently resolved public issue with confirmed solution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {data.map((issue) => (
          <IssueCard key={issue._id} issue={issue}></IssueCard>
        ))}
      </div>
    </div>
  );
};

export default LatestResolve;
