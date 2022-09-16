import { Box, Link, Typography } from '@mui/material';
import NavLink from 'next/link';
import Layout from '../components/Layout';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
    backgroundColor: '#2196f3',
  },
  container: {
    width: 600,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignContent: 'space-between',

    '& h1': {
      fontSize: '8rem',
    },
    '& p': {
      fontSize: '1.2rem',
      marginTop: '.8rem',
    },
    '& Button': {
      fontSize: '.8rem',
      marginTop: '1rem',
      textTransform: 'capitalize',
    },
  },
});

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.wrapper}
    >
      <Box
        className={classes.container}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h1" component="h1">
          404
        </Typography>
        <Typography variant="body1" component="p">
          Désolé, nous n'avons pas trouvé la page que vous cherchiez.
        </Typography>

        <Button variant="contained">Retournez à la page d'accueil</Button>
      </Box>
    </Box>
  );
};

export default PageNotFound;
