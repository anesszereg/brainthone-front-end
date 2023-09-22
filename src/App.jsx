import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import "./App.css";
import StudentLogin from "./pages/auth/StudentLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<StudentLogin />} />
      </Routes>
    </>
  );
}

export default App;
