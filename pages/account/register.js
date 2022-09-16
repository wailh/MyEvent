import Layout from '@/components/Layout';
import { useForm } from 'react-hook-form';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

const useStyles = makeStyles({
  container: {
    width: '500px',
    margin: 'auto',
    margin: '60px auto',
    padding: '40px 30px',
    boxShadow: '0 10px 20px 0 rgb(50 50 50 / 52%)',
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
});

export default function register() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout  title="User Register">
      <Box className={classes.container}>
        <Typography variant="p" component="h1" className={classes.title}>
          <PersonIcon className={classes.icon} /> {` `}
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label>Username</label>
          <input {...register('username')} />
          <label>Email Address</label>
          <input {...register('email not valid', pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,)} />

          <label>Password</label>
          <input
            {...register('password', {
              required: 'min length 8 ',
              minLength: 8
            })}
          />
          <label>Confirm Password</label>
          <input {...register('ConfirmPassword', { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" className={classes.submit} />
          <Typography variant="body1" component="p" className={classes.text}>
            Don't have an account?
            <Link href="/account/login"> Login</Link>
          </Typography>
        </form>
      </Box>
    </Layout>
  );
}
