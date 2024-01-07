import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import MqttClient from "./services/mqttClient";
import { Detector } from "react-detect-offline";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoginSuccess from "./components/StatusScreens/LoginSuccess";
import Live from "./components/Live/Live";
import Devices from "./components/Devices/Devices";
import Test from "./components/Test/Test";
import PlayerManagement from "./components/PlayerManagement/PlayerManagement";
import SignUp from "./components/Profile/SignUp";
import TeamCreation from "./components/Profile/TeamCreation";
function App() {
  MqttClient.getInstance();
  return (
    <HashRouter>
      <Detector
        render={({ online }) => (
          <>
            <Sidebar isOnline={online} />
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="login/manager" element={<LoginSuccess />} />
              <Route path="/live" Component={Live} />
              <Route path="devices" element={<Devices />} />
              <Route path="analytics" element={<Test />} />
              <Route path="player-management" element={<PlayerManagement />} />
              <Route path="profile" element={<SignUp />} />
              <Route path="/signup/manager" element={<TeamCreation />} />
            </Routes>
            {/* <Content isOnline={online} /> */}
          </>
        )}
      />
    </HashRouter>
  );
}

export default App;
