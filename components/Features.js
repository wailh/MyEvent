import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ComputerIcon from '@mui/icons-material/Computer';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SupportIcon from '@mui/icons-material/Support';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '50px 80px',
    [theme.breakpoints.down(750)]: {
      padding: '50px 20px',
    },
  },
  container: {
    marginTop: '1.5rem',
  },
  icon: {
    fontSize: 100,
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <Box textAlign="center" className={classes.wrapper}>
      <Typography variant="h3" component="h2">
        Caractéristiques
      </Typography>
      <Grid
        container
        spacing={2}
        className={classes.container}
        color="why.main"
      >
        <Grid item xs={6} md={3}>
          <ConfirmationNumberIcon className={classes.icon} />
          <Typography variant="h5" component="h5" color="primary.main">
            Vendre des billets
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <MonetizationOnIcon className={classes.icon} />
          <Typography variant="h5" component="h5" color="primary.main">
            Recueillir des dons
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <EventAvailableIcon className={classes.icon} />
          <Typography variant="h5" component="h5" color="primary.main">
            Gestion RSVP
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <ComputerIcon className={classes.icon} />
          <Typography variant="h5" component="h5" color="primary.main">
            Adresse Web personnalisée
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className={classes.container}
        color="why.main"
        pt="2"
      >
        <Grid item xs={6} md={3}>
          <CampaignIcon className={classes.icon} />
          <Typography variant="h5" component="h5" color="primary.main">
            Promotion d&apos;événement
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <AccountBalanceWalletIcon className={classes.icon} />
          <Typography variant="h5" component="h5" color="primary.main">
            Soyez payé facilement
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <ApartmentIcon className={classes.icon} />
          <Typography variant="h5" component="h5" color="primary.main">
            Traiter avec une seule entreprise
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <SupportIcon className={classes.icon} />
          <Typography variant="h5" component="h5" color="primary.main">
            Le meilleur service client
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
