import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    padding: '50px 80px',
  },
  gratuit: {
    padding: '60px 0',
  },
  aide: {
    padding: '30px 0',
  },
  btn: {
    marginTop: '25px',
    backgroundColor: '#2196f3',
    fontSize: '1.2rem',
    boxShadow: '1px 1px 5px #000',
  },
  pOne: {
    fontSize: '1.5rem',
  },
  pTwo: {
    fontSize: '1.2rem',
  },
});

const Essaye = () => {
  const classes = useStyles();
  return (
    <Box align="center">
      <Box className={classes.gratuit}>
        <Typography variant="h3" component="h2">
          Essayez-le{' '}
          <Typography variant="h3" component="span" fontWeight="bold">
            gratuitement{' '}
          </Typography>
          aujourd&apos;hui
        </Typography>
        <Button variant="contained" className={classes.btn}>
          commenser
        </Button>
      </Box>
      <Box color="secondary.main" bgcolor="why.main" className={classes.aide}>
        <Typography variant="p" component="p" className={classes.pOne}>
          Besoin d&apos;aide?
        </Typography>
        <Typography variant="p" component="p" className={classes.pTwo}>
          Veuillez communiquer avec notre équipe d&apos;assistance au
          1.877.769.3836.
        </Typography>
      </Box>
    </Box>
  );
};

export default Essaye;
