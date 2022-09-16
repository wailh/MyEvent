import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Search from './Search';
import { makeStyles } from '@mui/styles';

function Home({ theme }) {
  const classes = useStyles();
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="primary" position="static">
        <Toolbar className={classes.container}>
          <Link href="/">
            <a>
              <Typography
                variant="h6"
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                className={classes.logo}
              >
                <img
                  src="https://res.cloudinary.com/elumi/image/upload/v1663060732/myevent_cgiv2z.jpg"
                  alt="myevent.com"
                />
                <Typography variant="h4" component="p">
                  <span>my</span>event
                </Typography>
              </Typography>
            </a>
          </Link>
          <Search />
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link href="/events">
                <a>Events</a>
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/events/add">
                <a>Add Event</a>
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/events/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className={classes.btn}>
              <Link href="/account/login">
                <a>&nbsp;Login</a>
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Home;

const useStyles = makeStyles({
  container: {
    padding: '5px 80px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: 60,
      height: 60,
    },
    '& p': {
      fontSize: '2.5rem',
      '& span': {
        fontWeight: 600,
      },
    },
    fontSize: 20,
  },
  btn: {
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    padding: '10px',
  },
  item: {
    marginRight: 12,
  },
});
