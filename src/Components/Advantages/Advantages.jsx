import { Grid, Paper, Typography, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Advantages = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <h3>One Platform, Limitless possibilities </h3>
      <p>Get to know us</p>
      <Grid container spacing={0} style={{ width: '65%' }}>
        {/* First Card */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ padding: '0', height: 'auto' }}>
          <Paper elevation={3}>
            <div></div>
            <div>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom>
                Web & App developpment
              </Typography>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                alias distinctio amet nesciunt perspiciatis, excepturi rerum
                porro optio .
              </p>
              <Button variant="text" startIcon={<NavigateNextIcon />}>
                Learn more
              </Button>
            </div>
          </Paper>
        </Grid>

        {/* Second Card */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ padding: '0', height: 'auto' }}>
          <Paper elevation={3}>
            {/* Your card content goes here */}
            <h2>Card 2</h2>
            <p>Card content goes here.</p>
          </Paper>
        </Grid>

        {/* Third Card */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ padding: '0', height: 'auto' }}>
          <Paper>
            {/* Your card content goes here */}
            <h2>Card 3</h2>
            <p>Card content goes here.</p>
          </Paper>
        </Grid>

        {/* Fourth Card */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ padding: '0', height: 'auto' }}>
          <Paper elevation={3}>
            {/* Your card content goes here */}
            <h2>Card 4</h2>
            <p>Card content goes here.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Advantages;
