import Image from "next/legacy/image";
import React from "react";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      <div className="relative w-16 h-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
