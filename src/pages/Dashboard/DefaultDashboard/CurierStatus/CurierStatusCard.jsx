import React from "react";
import { FaAsterisk } from "react-icons/fa";

const CurierStatusCard = ({ data }) => {
  const { title } = data;
  return (
    <div className="grid grid-cols-2 gap-5 items-center p-6 bg-white ">
      <div className="  ">
        <p className="font-bold">{ title }</p>
        <p className="text-4xl">1975</p>
        <p>2.63% vs. last week </p>
      </div>
      <div className="flex justify-center">

      <FaAsterisk />
      </div>
    </div>
  );
};

export default CurierStatusCard;
