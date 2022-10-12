import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { useForm } from 'react-hook-form';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';
import { useContext, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '500px',
    margin: 'auto',
    margin: '60px auto',
    padding: '40px 30px',
    boxShadow: '0 10px 20px 0 rgb(50 50 50 / 52%)',
    [theme.breakpoints.down(750)]: {
      width: '400px',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    marginBottom: '2rem',
  },
  icon: {
    fontSize: '3rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& input': {
      marginTop: '.8rem',
      marginBottom: '1.2rem',
      padding: '10px',
    },
    '& input[type="submit"]': {
      backgroundColor: '#f00',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
    },
    '& label': {
      fontSize: 17,
    },
  },
  text: {
    fontSize: 17,
  },
}));

export default function Login() {
  const { login, error } = useContext(AuthContext);

  const classes = useStyles();

  useEffect(() => {
    error && toast.error(error);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    login({ email, password });
  };

  return (
    <Layout title="User Login">
      <Box className={classes.container}>
        <Typography variant="p" component="h1" className={classes.title}>
          <PersonIcon className={classes.icon} /> {` `}
          Log In
        </Typography>
        <ToastContainer />

        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label>Email Address</label>
          <input
            {...register(
              'email',
              {
                required: true,
              },
              {
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              }
            )}
          />

          <label>Password</label>
          <input
            {...register('password', {
              required: true,
            })}
            type="password"
          />
          {errors.password && (
            <span sx={{ color: 'red' }}>This field is required</span>
          )}

          <input type="submit" className={classes.submit} value="Login" />
          <Typography variant="body1" component="p" className={classes.text}>
            Don&apos;t have an account?
            <Link href="/account/register"> Register</Link>
          </Typography>
        </form>
      </Box>
    </Layout>
  );
}
