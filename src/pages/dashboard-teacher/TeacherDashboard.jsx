import { useState } from 'react';
import HomeDashboard from '../../Components/DashboardTeacher/HomeDashboard/HomeDashboard';
import Sidebar from '../../Components/DashboardTeacher/nav/Sidebar';
import Classesdashboard from '../../Components/DashboardTeacher/ClassesDashboard/Classesdashboard';
import CourseDashboard from '../../Components/DashboardTeacher/CourseDashboard/CourseDashboard';
import { Box } from '@mui/material';

const TeacherDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('home'); // Initialize with 'home'

  // Define a function to change the selected component
  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  // Conditional rendering based on selectedComponent
  let displayedComponent;
  switch (selectedComponent) {
    case 'Home':
      displayedComponent = <HomeDashboard />;
      break;
    case 'Classes':
      displayedComponent = <Classesdashboard />;
      break;
    case 'Course':
      displayedComponent = <CourseDashboard />;
      break;
    default:
      displayedComponent = <HomeDashboard />;
  }

  return (
    <>
      <Sidebar onSelectComponent={handleComponentChange} />
      <Box marginTop={'64px'}>{displayedComponent}</Box>
    </>
  );
};

export default TeacherDashboard;
