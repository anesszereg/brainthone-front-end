import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import './App.css';
import Auth from './pages/auth/Auth';
import TeacherDashboard from './pages/dashboard-teacher/TeacherDashboard';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </>
  );
}

export default App;
