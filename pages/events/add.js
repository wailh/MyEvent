import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  wrapper: {
    width: '65%',
    margin: 'auto',
    padding: '50px 0',
    '& link': {
      '& a': {
        color: 'blue !important',
      },
    },
    '& h1': {
      marginTop: '1.5rem',
    },
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      fontSize: '16px',
      margin: '1.7rem 0 .5rem 0',
    },
    '& input': {
      padding: '10px',
    },
    '& textarea': {
      padding: '10px',
    },
  },
  submit: {
    marginTop: '1rem',
    color: '#fff',
    backgroundColor: '#f00',
    border: 'none',
    borderRadius: '4px',
  },
});

const Add = () => {
  const router = useRouter();
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const evt = {
      data: {
        name: data.name,
        venue: data.venue,
        address: data.address,
        date: data.ate,
        time: data.time,
        performers: data.performers,
        description: data.description,
      },
    };
    const res = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(evt),
    });

    if (!res.ok) {
      toast.error('something went wrong!');
    } else {
      const event = await res.json();
      router.push(`/events/${event.data.attributes.slug}`);
    }
  };

  return (
    <Layout title="Add New Event">
      <Box className={classes.wrapper}>
        <Link href="/events" className={classes.link}>
          <a>Go Back</a>
        </Link>
        <Typography variant="h4" component="h1">
          Add Event
        </Typography>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6} className={classes.gridContainer}>
              <label>Name</label>
              <input {...register('name', { required: 'Name is required' })} />
              <label>Venue</label>
              <input
                {...register('venue', { required: 'Venue is required' })}
              />
              <label>Date</label>
              <input
                {...register('date', { required: 'Date is required' })}
                type="date"
              />
            </Grid>
            <Grid item xs={6} className={classes.gridContainer}>
              <label>Performers</label>
              <input
                {...register('performers', {
                  required: 'Performers is required',
                })}
              />
              <label>Address</label>
              <input
                {...register('address', { required: 'Address is required' })}
              />
              <label>Time</label>
              <input {...register('time', { required: 'Time is required' })} />
            </Grid>
            <Grid item xs={12} className={classes.gridContainer}>
              <label>Description</label>
              <textarea
                rows="10"
                {...register('description', {
                  required: 'Description is required',
                })}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridContainer}>
              <input
                type="submit"
                defaultValue="Add Event"
                className={classes.submit}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>
  );
};
export default Add;
