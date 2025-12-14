import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import potholes from "../assets/Potholes_-_at_the_junction_of.jpg";
import streetLight from "../assets/old-broken-street-lamp_415641-436.avif";
import illegalConstruction from "../assets/The_Complete_Guide_to_Illegal_Construction_Demolition.jpg";
import pipe from "../assets/broken-water-pipe-leaking.webp";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} className="pt-5 lg:w-[800px] mx-auto rounded-2xl">
      <div className="h-[400px]">
        <img src={potholes} className="h-full object-cover rounded-lg" />
        <p className="legend">Potholes</p>
      </div>
      <div className="h-[400px]">
        <img src={streetLight} className="h-full rounded-lg  object-cover" />
        <p className="legend">Brocken street Light</p>
      </div>

      <div className="h-[400px]">
        <img
          src={illegalConstruction}
          className="h-full rounded-lg object-cover"
        />
        <p className="legend">Illegal construction</p>
      </div>
      <div className="h-[400px]">
        <img
          src={pipe}
          className="h-full rounded-lg object-cover"
        />
        <p className="legend">Pipe leakage</p>
      </div>
    </Carousel>
  );
};

export default Banner;
