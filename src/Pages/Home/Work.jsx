import React from "react";

const Work = () => {
  return (
    <div className="my-16 mx-auto">
      <h2 className="text-4xl mb-3 text-center font-bold ">How it works</h2>
      <p className="text-gray-600 text-center">
        Simple steps to report and resolve public issues
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 ">
        <div className=" h-full p-6 rounded-2xl shadow text-center bg-gradient-to-t from-green-100 to-gray-100">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
            1
          </div>
          <h3 className="text-xl font-semibold mb-2">Report Issue</h3>
          <p className="text-gray-500 text-sm">
            Citizens submit issues with photos & location.
          </p>
        </div>
        <div className=" p-6  h-full rounded-2xl shadow text-center bg-gradient-to-t from-green-100 to-gray-100">
            <div className="w-14 h-14 mx-auto rounded-full mb-4 bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                2
            </div>
            <h3 className="text-xl font-semibold mb-2">Verification</h3>
            <p className="text-gray-500 text-sm">Authorities verify reported issues.</p>
        </div>
        <div className=" p-6 h-full rounded-2xl shadow text-center bg-gradient-to-t from-green-100 to-gray-100">
            <div className="w-14 h-14 mb-4 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                3
            </div>
            <h3 className="text-xl font-semibold mb-2">Assignment</h3>
            <p className="text-gray-500 text-sm">Task Assigned to relevant department.</p>
        </div>
        <div className=" p-6 h-full rounded-2xl shadow text-center bg-gradient-to-t from-green-100 to-gray-100">
            <div className="w-14 h-14 mb-4 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                4
            </div>
            <h3 className="text-xl font-semibold mb-2">Resolution</h3>
            <p className="text-gray-500 text-sm">Issues resolved and status update.</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
