import React from "react";
import data from "../data.json";
import axios from 'axios';

console.log(data);
function Dashboard() {
  return (
    <React.Fragment>
    <div className="flex items-center justify-center">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 max-w-[1200px] w-11/12 bg-paraghraph text-headline py-3 text-center ">
        <div className="bg-main">FirstName</div>
        <div className="bg-main">LastName</div>
        <div className="bg-main">Email</div>
        <div className="bg-main">Phone</div>
        <div className="bg-main">Address</div>
        <div className="bg-main">City</div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 max-w-[1200px] w-11/12 bg-white text-body py-3 text-center ">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="bg-main">{item.firstName}</div>
            <div className="bg-main">{item.lastName}</div>
            <div className="bg-main">{item.email}</div>
            <div className="bg-main">{item.phone}</div>
            <div className="bg-main">{item.address}</div>
            <div className="bg-main">{item.city}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </React.Fragment>
  );
}

export default Dashboard;
