import { Grid, Paper, Typography, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Writeicon from '../../assets/Svgs/iconOrange.svg';
import BoxAvantges from '../BoxAvanatges/BoxAvantges';
import image1 from '../../assets/Svgs/iconOrange.svg';
import image2 from '../../assets/Svgs/icon1.svg';
import image3 from '../../assets/Svgs/icon2.svg';
import image4 from '../../assets/Svgs/icon3.svg';
import "./Advantages.css"

const Advantages = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <h3 style={{ color: 'black', fontSize: '35px', marginBottom: '2px' }}>
        One Platform, Limitless possibilities
      </h3>
      <p style={{ color: '#FFBA07', marginBottom: '80px', fontWeight: '700' }}>
        Get to know us
      </p>
      
       <div className="gridA">
        <BoxAvantges title='Unlimited  Graphic Design' image={image1} />
        <BoxAvantges title='Web & App developpment'  image={image4}/>
        <BoxAvantges title='Unlimited Video Editing'  image={image3}/>
        <BoxAvantges title='Scalable content & Copywriting'  image={image2}/>
       </div>
    </div>
  );
};

export default Advantages;
