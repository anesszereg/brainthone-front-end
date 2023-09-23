import StarMVP from '../../../assets/Svgs/starMVP.svg';
import '../HomeDashboard/HomeDashboard.css';
import './ClassesDashboard.css';
const MVPCard = () => {
  return (
    <div className="mvpCard">
      <span className="icon classpage">2S1</span>
      <h3>
        Class <span>2AS1</span>
      </h3>
      <h4>TeacherName</h4>
      <div>
        <img src={StarMVP} alt="Star" />{' '}
        <h3>
          MVP : <span>Student Name</span>
        </h3>
      </div>
    </div>
  );
};

export default MVPCard;
