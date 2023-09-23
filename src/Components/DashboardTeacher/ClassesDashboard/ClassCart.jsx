import LinearProgress from '@mui/material/LinearProgress';
import '../HomeDashboard/HomeDashboard.css';
import './ClassesDashboard.css';
const ClassCart = () => {
  return (
    <div className="moduleCart classpage">
      <span className="icon classpage">2S1</span>
      <div className="text classpage">
        <h2>2 AS 1</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <LinearProgress
            variant="determinate"
            value="35"
            sx={{
              height: 10,
              width: 100,
              borderRadius: 4,
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'green', // Change the progress bar color
              },
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: '14px',
            }}>
            35%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClassCart;
