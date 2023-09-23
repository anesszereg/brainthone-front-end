import '../ClassesDashboard/ClassesDashboard.css';
import '../HomeDashboard/HomeDashboard.css';
import AbouTrackCard from './AbouTrackCard';
import './CourseBoard.css';
import CourseCard from './CourseCard';

const CourseDashboard = () => {
  return (
    <div style={{ marginLeft: '250px', padding: '20px' }}>
      <div className="firstLine coursedashboard">
        <div className="moduleCourses coursedashboard">
          <h3>My Courses</h3>
          <CourseCard/>
          <CourseCard/>
        </div>
        <div className="moduleCourses coursedashboard module2nd">
          <h4>About This Track</h4>
          <div>
            <h3>Course Title</h3>
            <p>
              Connaître les étapes clés, le cycle de vie et les processus de la
              gestion d’un projet Savoir comment démarrer un projet Apprendre à
              planifier un projet Définir l’équipe projet, son rôle et ses
              responsabilités Appréhender les différents outils pour mener un
              projet performant
            </p>
          </div>
          <div className="aboutTrackMultiple">
           <AbouTrackCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
