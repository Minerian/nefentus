import Countdown from "./countdown/countdown";
import Sidebar from "./sidebar/sidebar";
import VendorBody from "./vendor/index";

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
