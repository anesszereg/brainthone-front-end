import '../ClassesDashboard/ClassesDashboard.css';
import '../HomeDashboard/HomeDashboard.css';
import './CourseBoard.css';

const CourseCard = () => {
  return (
    <div className="courseCard">
      <div className="courseImg"></div>
      <div className="courseContent">
        <h4>This is the course title</h4>
        <p>This track will let you begin your...</p>
        <button>Switch to course</button>
      </div>
    </div>
  );
};

export default CourseCard;
