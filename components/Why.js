import { Box, Grid, Typography } from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RocketIcon from '@mui/icons-material/Rocket';
import PhoneIcon from '@mui/icons-material/Phone';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '60px 80px',
    [theme.breakpoints.down(750)]: {
      padding: '60px 20px',
    },
  },
  grid: {
    marginTop: '1rem',
  },
  icon: {
    fontSize: 120,
    [theme.breakpoints.down(750)]: {
      fontSize: 80,
    },
  },
}));

const Why = () => {
  const classes = useStyles();
  return (
    <Box
      bgcolor="why.main"
      color="secondary.main"
      className={classes.container}
      align="center"
    >
      <Typography variant="h3" component="h2">
        Pourquoi utiliser MyEvent?
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={6} md={4}>
          <SellIcon className={classes.icon} />
          <Box>
            <Typography variant="h6" component="p">
              Les frais les plus bas
            </Typography>
            <Typography variant="p" component="p">
              Nous offrons les meilleurs tarifs de l&apos;industrie pour les
              frais de service et de transaction par carte de crédit.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <VerifiedUserIcon className={classes.icon} />
          <Box>
            <Typography variant="h6" component="p">
              Sécuritaire et sécurisé
            </Typography>
            <Typography variant="p" component="p">
              Nous sommes un processeur de paiement conforme PCI, en ligne
              depuis 2002 et nous utilisons une technologie de cryptage de
              paiement moderne et sécurisée.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <RocketIcon className={classes.icon} />
          <Box>
            <Typography variant="h6" component="p">
              Configuration rapide et facile
            </Typography>
            <Typography variant="p" component="p">
              Inscrivez-vous gratuitement et commencez à construire votre site
              en quelques minutes. C&apos;est tellement facile d&apos;utiliser
              notre plateforme.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <PhoneIcon className={classes.icon} />
          <Box>
            <Typography variant="h6" component="p">
              Soutien téléphonique sans frais
            </Typography>
            <Typography variant="p" component="p">
              Nous offrons un service téléphonique sans frais, du lundi au
              vendredi de 9 h à 17 h HNE.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <LooksOneIcon className={classes.icon} />
          <Box>
            <Typography variant="h6" component="p">
              Guichet unique
            </Typography>
            <Typography variant="p" component="p">
              Construisez facilement votre site d&apos;événement. Vendre des
              billets, inscrivez vos participants et ramasse des fonds dans un
              seul endroit.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <LooksTwoIcon className={classes.icon} />
          <Box>
            <Typography variant="h6" component="p">
              20 ans de présence en ligne
            </Typography>
            <Typography variant="p" component="p">
              Depuis plus de 20 ans, nous avons aidé des milliers
              d&apos;organisateurs à planifier et à organiser leurs événements
              avec notre plateforme.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Why;
