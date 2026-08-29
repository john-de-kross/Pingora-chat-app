import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import EmailVerification from "./COMPONENT/emailVerification";
import Login from "./COMPONENT/login";
import CreatAccount from "./COMPONENT/signup";
import Dashboard from "./COMPONENT/dashboard";
import ConnectPage from "./COMPONENT/connect";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<CreatAccount />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/connect" element={<ConnectPage />} />

      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
