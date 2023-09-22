import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import "./App.css";

import Grade from "./pages/grade/Grade";
import Welcome from "./pages/welcome/Welcome.jsx";

import StudentLogin from "./pages/auth/StudentLogin";

import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/grade" element={<Grade />}/>
        <Route path="/welcome" element={<Welcome/>}/>

        <Route path="/auth" element={<StudentLogin />} />

        <Route path="/studentDashboard" element={<StudentDashboard />} />
      </Routes>
    </>
  );
}

export default App;
