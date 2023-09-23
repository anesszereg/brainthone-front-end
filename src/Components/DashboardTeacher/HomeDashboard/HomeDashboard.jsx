import ClassGraph from '../../../assets/Svgs/ClassGraph.svg';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress from '@mui/material/LinearProgress';
import './HomeDashboard.css';
import AnalyticsCard from './AnalyticsCard';
import BestStudent from './BestStudent';
import ModuleCard from './ModuleCard';

const columns = [
  { field: 'name', headerName: 'Name', width: 170 },
  { field: 'phone', headerName: 'Phone', width: 180 },
  {
    field: 'class',
    headerName: 'Class',
    width: 120,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="tableClass">{`${params.value}`}</span>
      </div>
    ),
  },
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'course',
    headerName: 'Course',
    width: 160,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LinearProgress
          variant="determinate"
          value={params.value}
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
          }}>{`${params.value}%`}</span>
      </div>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 70,
    renderCell: () => (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

const rows = [
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: '2as',
    id: 35,
    course: 35,
    actions: '',
  },
  {
    name: 'Salim',
    phone: '123-456-7890',
    class: '3as',
    id: 42,
    course: 65,
    actions: '',
  },
  {
    name: 'Sidali',
    phone: '123-456-7890',
    class: '3as',
    id: 45,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: '1as',
    id: 16,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: '1as',
    id: 17,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: null,
    id: 150,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: 'Ferrara',
    id: 44,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: 'Rossini',
    id: 36,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: 'Roxie',
    class: 'Harvey',
    id: 65,
    course: 35,
    actions: '',
  },
];


const HomeDashboard = () => {
  return (
    <div style={{ marginLeft: '250px', padding: '20px' }}>
      <div className="firstLine">
        <AnalyticsCard/>
        <BestStudent/>
        <div className="classProgress">
          <h4>Classes Progress</h4>
          <img src={ClassGraph} />
        </div>
      </div>
      <div className="secondLine">
        <div className="moduleCourses">
          <div className="top">
            <div>
              <h2>Latest Course</h2>
              <p>780 questions</p>
            </div>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="modules">
           <ModuleCard/>
          </div>
        </div>
        <div style={{ height: 370, width: '840px', marginLeft: '10px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard