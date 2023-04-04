import { useEffect, useState } from "react";
import Countdown from "./countdown/countdown";
import Sidebar from "./sidebar/sidebar";
import VendorBody from "./vendor/index";
import backend_API from '../api/backendAPI'
import { useNavigate } from "react-router-dom";

const Vendor = () => {
  return (
    <div className="dashboard" style={{ height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <VendorBody />
      <Countdown />
    </div>
  );
};

export default Vendor;
