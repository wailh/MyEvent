import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { Box } from '@mui/system';
// import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { API_URL } from '@/config/index';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { parseCookies } from '@/helpers/index';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const useStyles = makeStyles({
  wrapper: {
    padding: '70px 200px',
    '& > *': {
      marginTop: '1.3rem',
    },
    '& h1': {
      fontWeight: 600,
      marginBottom: '2rem',
    },
    '& h2': {
      fontWeight: 700,
    },
  },
  link: {
    color: 'blue',
    marginTop: '1.5rem',
  },
  modify: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    '& > a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.3rem',
    },
  },
  delete: {
    marginLeft: 20,
    color: 'red',
  },
});

const Details = ({ item, token }) => {
  const classes = useStyles();
  const router = useRouter();
  const event = item;

  const handleDelete = async () => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/api/events/${event.data[0].id}`, {
        mathod: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push('/events');
      }
    }
  };

  return (
    <Layout>
      {/* {event.data[0] ? (
        <Typography
          variant="h3"
          component="div"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          No Event to Show
        </Typography>
      ) : ( */}
      <Box className={classes.wrapper}>
        <Box className={classes.modify}>
          <Link href={`edit/${event.data[0].id}`} className={classes.edit}>
            <a>
              <BorderColorIcon /> {` `} Edit
            </a>
          </Link>
          <a href="#" onClick={handleDelete} className={classes.delete}>
            <DeleteForeverIcon /> {`  `}
            Delete
          </a>
        </Box>
        <Typography variant="p" component="p">
          {new Date(event.data[0].attributes.date).toLocaleDateString('en-US')}{' '}
          at {event.data[0].attributes.time}
        </Typography>
        <Typography variant="h4" component="h1">
          {event.data[0].attributes.name}
        </Typography>
        <ToastContainer />
        <Image
          src={
            event.data[0].attributes.image.data
              ? event.data[0].attributes.image.data.attributes.formats.medium
                  .url
              : '/event-default.png'
          }
          alt="Picture of the author"
          width={700}
          height={400}
        ></Image>
        <Typography variant="h5" component="h2">
          Performers:
        </Typography>
        <Typography variant="body1" component="p">
          {event.data[0].attributes.performers}
        </Typography>
        <Typography variant="h5" component="h2">
          Description:
        </Typography>
        <Typography variant="body1" component="p">
          {event.data[0].attributes.description}
        </Typography>
        <Typography variant="h5" component="h2">
          Venue: Venetian Resort
        </Typography>
        <Typography variant="body1" component="p">
          {event.data[0].attributes.venue}
        </Typography>
        <Link href="/events">
          <a className={classes.link}>{'< '} Go Back</a>
        </Link>
      </Box>
      {/* )} */}
    </Layout>
  );
};

export default Details;

export async function getServerSideProps({ req, query: { slug } }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: '/account/login',
        permanent: false,
      },
    };
  }
  const res = await fetch(
    `${API_URL}/api/events?filters[slug][$eq]=${slug}&populate=*`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const item = await res.json();
  return {
    props: {
      item,
      token,
    },
  };
}
