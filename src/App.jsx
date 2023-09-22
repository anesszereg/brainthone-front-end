
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import "./App.css";
import Auth from "./pages/auth/Auth";
import Grade from "./pages/grade/Grade";
import Welcome from "./pages/welcome/Welcome.jsx";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/grade" element={<Grade />}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>

    </>
  );
}

export default App;
