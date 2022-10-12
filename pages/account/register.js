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
  error: {
    color: 'red',
  },
}));

export default function Register() {
  const { registerUser, error } = useContext(AuthContext);
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    error && toast.error(error);
  });

  const onSubmit = (data) => {
    const { username, email, password } = data;
    if (password !== data.ConfirmPassword) {
      toast.error("password dosn't match ");
      return;
    } else {
      registerUser({ username, email, password });
    }
  };

  return (
    <Layout title="User Registration">
      <Box className={classes.container}>
        <Typography variant="p" component="h1" className={classes.title}>
          <PersonIcon className={classes.icon} /> {` `}
          Register
        </Typography>
        <ToastContainer />

        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label>Username</label>
          <input
            {...register('username', {
              required: 'username is required',
            })}
          />

          <label>Email Address</label>
          <input
            {...register('email', {
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              required: 'email is required',
            })}
          />

          <label>Password</label>
          <input
            {...register('password', {
              required: true,
            })}
            type="password"
          />
          <label>Confirm Password</label>
          <input
            {...register('ConfirmPassword', { required: true })}
            type="password"
          />
          {(errors.username || errors.email) && (
            <span className={classes.error}>This field is required</span>
          )}

          <input type="submit" className={classes.submit} value="Register" />
          <Typography variant="body1" component="p" className={classes.text}>
            Already have an account!
            <Link href="/account/login"> Login</Link>
          </Typography>
        </form>
      </Box>
    </Layout>
  );
}
