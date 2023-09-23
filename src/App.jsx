
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import "./App.css";

import Grade from "./pages/grade/Grade";
import Welcome from "./pages/welcome/Welcome.jsx";

import StudentLogin from "./pages/auth/StudentLogin";
import Spline from "./Components/Splin/Spline";
import DashboardMainPage from "./pages/DashbordStudent/DashbordMainPage/DashbordMainPage";

import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import Page404 from "./pages/page404/Page404";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Main />} />

        <Route path="/auth" element={<Auth />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/GamePage" element={<Spline />} />

        <Route path="/grade" element={<Grade />} />
        <Route path="/welcome" element={<Welcome />} />

        <Route path="/auth" element={<StudentLogin />} />

        <Route path="/studentDashboard" element={<StudentDashboard />} />

      </Routes>
    </>
  );
}

export default App;
