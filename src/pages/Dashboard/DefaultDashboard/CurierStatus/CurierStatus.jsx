import React from "react";
import CurierStatusCard from "./CurierStatusCard";

const CurierStatus = () => {
  const statusData = [
    {
      title: "Today's Order",
    },
    {
      title: "Today's Revenue",
    },
    {
      title: "Today's Customers",
    },
    {
      title: "Today's Visitors",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-6 mt-16 ">
      {
      statusData.map((data) => (
        <CurierStatusCard
         key={data.title}
         data={data}
         ></CurierStatusCard>
      ))
      }
    </div>
  );
};

export default CurierStatus;
