import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Search from './Search';
import { Link } from '@mui/material';
import AuthContext from '@/context/AuthContext';
import Menuitem from './MenuItem';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';

function Home({ theme }) {
  const classes = useStyles();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="primary" position="static">
        <Toolbar className={classes.container}>
          <NextLink href="/" passHref>
            <Link sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h6" component="div" className={classes.logo}>
                <Image
                  src="https://res.cloudinary.com/elumi/image/upload/v1663060732/myevent_cgiv2z.jpg"
                  width={60}
                  height={60}
                  alt="myevent.com"
                />
                <Typography variant="h4" component="p">
                  <span>my</span>event
                </Typography>
              </Typography>
            </Link>
          </NextLink>
          <Search />

          <Menuitem />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '5px 80px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down(750)]: {
      padding: '5px 10px',
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontSize: '2.5rem',
      '& span': {
        fontWeight: 600,
      },
      [theme.breakpoints.down(750)]: {
        fontSize: '2rem',
      },
    },
    fontSize: 20,
    color: '#fff !important',
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
    '& a': {
      color: '#fff !important',
    },
  },
  btn: {
    '& a': {
      color: '#fff !important',
    },
  },
}));
