
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import "./App.css";
import Auth from "./pages/auth/Auth";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
      </Routes>

    </>
  );
}

export default App;
