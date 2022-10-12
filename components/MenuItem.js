import AuthContext from '@/context/AuthContext';
import { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const Menuitem = () => {
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {user ? (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            onClick={() => {
              handleCloseNavMenu();
              router.push('/account/dashboard');
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Dashboard
          </Button>
          <Button
            onClick={() => {
              handleCloseNavMenu();
              router.push('/events');
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Events
          </Button>
          <Button
            onClick={() => {
              handleCloseNavMenu();
              logout();
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            &nbsp;Logout
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            onClick={() => {
              handleCloseNavMenu();
              router.push('/events');
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Events
          </Button>
          <Button
            onClick={() => {
              handleCloseNavMenu();
              router.push('/account/login');
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            &nbsp;Login
          </Button>
        </Box>
      )}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'none' },
          justifyContent: { xs: 'flex-end' },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        {user ? (
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <NextLink href="/events/add" passHref>
                <Link>
                  <Typography textAlign="center">Add Event</Typography>
                </Link>
              </NextLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NextLink href="/account/dashboard" passHref>
                <Link>
                  <Typography textAlign="center">Dashboard</Typography>
                </Link>
              </NextLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NextLink href="/events" passHref>
                <Link>
                  <Typography textAlign="center">Events</Typography>
                </Link>
              </NextLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NextLink href="/account/login" passHref>
                <Link>
                  <Typography textAlign="center">&nbsp;Logout</Typography>
                </Link>
              </NextLink>
            </MenuItem>
          </Menu>
        ) : (
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <NextLink href="/events" passHref>
                <Link>
                  <Typography textAlign="center">Events</Typography>
                </Link>
              </NextLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NextLink href="/account/login" passHref>
                <Link>
                  <Typography textAlign="center">&nbsp;Login</Typography>
                </Link>
              </NextLink>
            </MenuItem>
          </Menu>
        )}
      </Box>
    </>
  );
};

export default Menuitem;
