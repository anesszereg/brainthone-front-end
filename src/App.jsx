import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import "./App.css";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
