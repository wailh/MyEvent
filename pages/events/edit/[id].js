import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { ClassNames } from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';
import cookie from 'cookie';
import { parseCookies } from '@/helpers/index';

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

const Edit = ({ event, token }) => {
  const classes = useStyles();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: event.data[0].attributes.name,
      Venue: event.data[0].attributes.venue,
      Date: event.data[0].attributes.date,
      Performers: event.data[0].attributes.performers,
      Description: event.data[0].attributes.description,
      Address: event.data[0].attributes.address,
      Time: event.data[0].attributes.time,
    },
  });
  const onSubmit = async (evt) => {
    const data = {
      data: {
        name: evt.Name,
        venue: evt.Venue,
        address: evt.Address,
        date: evt.Date,
        time: evt.Time,
        performers: evt.Performers,
        description: evt.Description,
      },
    };
    const res = await fetch(`${API_URL}/api/events/${event.data[0].id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Unauthorized');
        return;
      }
      toast.error('something went wrong!');
    } else {
      const event = await res.json();
      router.push(`/events/${event.data.attributes.slug}`);
    }
  };

  return (
    <Layout title="Edit Event">
      <Box className={classes.wrapper}>
        <Link href="/events" className={classes.link}>
          <a>Go Back</a>
        </Link>
        <Typography variant="h4" component="h1">
          Edit Event
        </Typography>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6} className={classes.gridContainer}>
              <label>Name</label>
              <input {...register('Name', { required: 'Name is required' })} />
              <label>Venue</label>
              <input
                {...register('Venue', { required: 'Venue is required' })}
              />
              <label>Date</label>
              <input {...register('Date', { required: 'Date is required' })} />
            </Grid>
            <Grid item xs={6} className={classes.gridContainer}>
              <label>Performers</label>
              <input
                {...register('Performers', {
                  required: 'Performers is required',
                })}
              />
              <label>Address</label>
              <input
                {...register('Address', { required: 'Address is required' })}
              />
              <label>Time</label>
              <input {...register('Time', { required: 'Time is required' })} />
            </Grid>
            <Grid item xs={12} className={classes.gridContainer}>
              <label>Description</label>
              <textarea
                rows="10"
                {...register('Description', {
                  required: 'Description is required',
                })}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridContainer}>
              <input
                type="submit"
                defaultValue="Update Event"
                className={classes.submit}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>
  );
};
export default Edit;

export async function getServerSideProps({ query: { id }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(
    `${API_URL}/api/events?filters[id][$eq]=${id}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      event: data,
      token,
    },
  };
}
