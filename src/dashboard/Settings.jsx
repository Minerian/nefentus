import SettingsBody from "./settings/index";
import Sidebar from "./sidebar/sidebar";
import { Helmet } from "react-helmet";

const Settings = () => {
  return (
    <div>
      <Helmet>
        <title>Nefentus | Settings</title>
      </Helmet>
      <SettingsBody />
    </div>
  );
};

export default Settings;
