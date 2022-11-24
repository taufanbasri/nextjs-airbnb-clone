import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/legacy/image";
import React from "react";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex px-2 pr-4 transition duration-200 ease-out border-b cursor-pointer py-7 hover:opacity-80 hover:shadow-lg first:border-t">
      <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="cursor-pointer h-7" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="w-10 pt-2 border-b"></div>

        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
