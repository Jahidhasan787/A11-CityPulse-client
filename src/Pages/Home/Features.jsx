import React from "react";
import FeaturesCard from "../../Component/FeaturesCard";

const Features = () => {
  return (
    <div className="my-10 mx-auto">
      <div>
        <h2 className="text-4xl mb-3 text-center font-bold ">
          Platform Features
        </h2>
        <p className="text-gray-600 text-center">
          CityPulse empowers citizens and authorities with smart tools to
          report,
          <br />
          track, and resolve public infrastructure issues efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            <FeaturesCard icon='📸' title={"Photo base reporting"} desc={'Upload real image to clearly explain the issue'}></FeaturesCard>
            <FeaturesCard icon='📍' title={"Exact location pin"} desc={'Mark the location'}></FeaturesCard>
            <FeaturesCard icon='🔔' title={"Live status update"} desc={'Get real-time update from report to resolution'}></FeaturesCard>
            <FeaturesCard icon='🛠️' title={"Admin Management"} desc={'Verify,assign,and resolve issue efficiently'}></FeaturesCard>
            <FeaturesCard icon='📊' title={"Analytics Dashboard"} desc={'track issue trends and performance insights'}></FeaturesCard>
            <FeaturesCard icon='🔐' title={"Secure Roll Access"} desc={'Separate access for citizen, staff and admins'}></FeaturesCard>
      </div>
    </div>
  );
};

export default Features;
