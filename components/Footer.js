import {
  Box,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 60px',
    lineHeight: 2,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontSize: '2.5rem',
      '& span': {
        fontWeight: 600,
      },
    },
    fontSize: 20,
  },
  list: {
    display: 'flex',
    listStyle: 'none',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    '& li': {
      borderRight: '1px solid #fff',
      color: '#fff',
      padding: '0 10px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#404040',
      },
      [theme.breakpoints.down(750)]: {
        borderRight: 'unset',
      },
    },
    [theme.breakpoints.down(750)]: {
      flexDirection: 'column',
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <Toolbar className={classes.container}>
        <Typography
          variant="h6"
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
          className={classes.logo}
        >
          <Image
            src="https://res.cloudinary.com/elumi/image/upload/v1663060732/myevent_cgiv2z.jpg"
            alt="myevent.com"
            width={60}
            height={60}
          />
          <Typography variant="h4" component="p" color="secondary">
            <span>my</span>event
          </Typography>
        </Typography>
        <Typography variant="p" component="div">
          Celebrating 20 years of sharing your events online!
        </Typography>
        <ul className={classes.list}>
          <li>Events</li>
          <li>Fundraising</li>
          <li>Tickets</li>
          <li>Class Reunions</li>
          <li>Family Reunions</li>
          <li>Athons</li>
          <li>School Fun Runs</li>
        </ul>
        <ul className={classes.list}>
          <li>À propos</li>
          <li>Pourquoi nous sommes les meilleurs</li>
          <li>Contact</li>
          <li>Conditions d&apos;utilisation</li>
          <li>Politique de confidentialité</li>
        </ul>
        <ul className={classes.list}>
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <PinterestIcon />
          </li>
        </ul>
        <Typography variant="p" component="div">
          Copyright &copy;2022. MyEvent.com. Tous droits réservés.
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default Footer;
