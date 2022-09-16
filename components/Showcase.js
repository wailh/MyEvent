import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    height: '540px',
    width: '100%',
    left: 0,
    top: 0,
    color: '#fff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& video': {
      position: 'absolute',
      width: '100%',
    },
    '& div': {
      position: 'absolute',
      margin: 'auto',
      width: '100%',
      '& h2': {
        fontSize: '4rem',
        marginTop: '1rem',
        fontWeight: 600,
        textShadow: '4px 4px 4px #000',
      },
    },
    '& h3': {
      marginTop: '1rem',
      fontWeight: 700,
      textShadow: '4px 4px 4px #000',
    },
    '& Button': {
      marginTop: '1rem',
      backgroundColor: '#2196f3',
      fontSize: '1.5rem',
      boxShadow: '0px 4px 5px #000',
      fontWeight: 400,
    },
  },
});

const Showcase = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <video
        autoPlay
        muted
        loop
        className={classes.video}
        src="https://res.cloudinary.com/elumi/video/upload/v1663060275/hero_dwexze.mp4"
      ></video>
      <Typography
        variant="div"
        component="div"
        className={classes.content}
        align="center"
      >
        <Typography variant="h2" component="h2">
          Sites De Planification D'événements
        </Typography>
        <Typography variant="h4" component="h3">
          Planifiez Votre Événement Aujourd'hui
        </Typography>
        <Button variant="contained">commenser maintenant</Button>
      </Typography>
    </Box>
  );
};

export default Showcase;
