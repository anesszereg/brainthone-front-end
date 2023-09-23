import ClassGraph from '../../../assets/Svgs/ClassGraph.svg';
import {BsDownload} from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../HomeDashboard/HomeDashboard.css';
import './ClassesDashboard.css'
import AnalyticsCard from '../HomeDashboard/AnalyticsCard';
import BestStudent from '../HomeDashboard/BestStudent';
import ClassCart from './ClassCart';
import MVPCard from './MVPCard';

const Classesdashboard = () => {
  return (
    <div style={{ marginLeft: '250px', padding: '20px' }}>
      <div className="firstLine classes">
        <AnalyticsCard/>
        <BestStudent/>
        <div className="classProgress">
          <h4>Classes Progress</h4>
          <img src={ClassGraph} />
        </div>
      </div>
      <div className="secondLine classpage">
        <div className="classesPart1">
          <div className="createNewClass">
            <h4>Create a new class</h4>
            <div>
              <BsDownload />
            </div>
          </div>
          <div className="moduleCourses classpage">
            <div className="top classpage">
              <div>
                <h4>Classes Lists</h4>
              </div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
            <div className="modules">
             <ClassCart/>
            </div>
          </div>
        </div>
        <div className="classesPart2">
          <MVPCard/>
          <MVPCard/>
          <MVPCard/>
        </div>
      </div>
    </div>
  );
};

export default Classesdashboard;
