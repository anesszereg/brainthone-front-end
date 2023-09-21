import homesvg from '../../assets/Svgs/home.svg';
import { Button, Grid } from '@mui/material';

function Home() {
  return (
    <div style={{ width: '100%' }}>
      <Grid style={{ width: '100%' }} container spacing={0}>
        <Grid
          item
          xs={6}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <h2
            style={{
              margin: '0 auto',
              fontSize: '47.11px',
              textAlign: 'start',
              maxWidth: '73%',
            }}>
            <span style={{ color: '#007AFF' }}>Play, </span>
            <span style={{ color: '#FFBA07' }}>Learn, </span>
            <span style={{ color: '#FF0000' }}>Thrive! </span> Gamify 🎮 Your
            <span style={{ color: '#00D459' }}> Knowledge</span> Journey!
          </h2>
          <p
            style={{ textAlign: 'start', maxWidth: '73%', fontSize: '16.8px' }}>
            We&apos;re a team of experienced developers creating innovative web
            and mobile solutions that empower businesses to succeed online.
            Let&apos;s bring your vision to life
          </p>
          <div
            style={{
              marginTop: '30px',
              textAlign: 'start',
              width: '73%',
            }}>
            <Button>Get started</Button>
            <Button
              variant="text"
              style={{
                color: 'black',
                lineHeight: '30.24px',
                fontWeight: '600',
                marginLeft: '10px',
              }}>
              Get more info
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src={homesvg} style={{ margin: '0 auto' }} />
        </Grid>
      </Grid>
      <Button
        variant="text"
        style={{
          color: 'black',
          lineHeight: '30.24px',
          fontWeight: '400',
          fontSize: '12px',
          marginLeft: '10px',
          marginTop: '50px',
        }}>
        See more
      </Button>
    </div>
  );
}

export default Home;
