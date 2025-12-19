<<<<<<< HEAD
import React from "react";
import { useLoaderData } from "react-router";
import IssueCard from "../Component/IssueCard";

const Issues = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-4xl text-center font-bold">All Issues</h1>
        <p className=" text-center text-gray-600">
          All community-reported issues displayed in one place for quick review.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {data.map((issue) => (
            <IssueCard key={issue._id} issue={issue}></IssueCard>
          ))}
=======
import React from 'react';
import { useLoaderData } from 'react-router';
import IssueCard from '../Component/IssueCard';


const AllIssues = () => {
    const data = useLoaderData();
    
    return (
        <div className='mt-10'>
            <h1 className='text-5xl text-center font-bold'>All Issues</h1>
            <p className=' text-center text-gray-600'>All community-reported issues displayed in one place for quick review.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    data.map(issue => <IssueCard key={issue._id} issue={issue}></IssueCard>)
                }
            </div>
>>>>>>> 31b3bfa5c464f47331bc279e6b575794d852797c
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Issues;
=======
export default AllIssues;
>>>>>>> 31b3bfa5c464f47331bc279e6b575794d852797c
