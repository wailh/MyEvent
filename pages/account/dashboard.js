import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const useStyles = makeStyles((theme) => ({
  dashboard: {
    padding: '50px',
  },
  item: {
    marginTop: '10px',
    backgroundColor: '#dfdfdf',
    padding: '15px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#001fff',
    [theme.breakpoints.down(750)]: {
      flexDirection: 'column',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down(750)]: {
      justifyContent: 'unset',
    },

    '& a': {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },
  },
  delete: {
    color: '#f00',
    marginLeft: '15px',
  },
  icon: {
    fontSize: '15px',
  },
}));

const Dashboard = ({ events }) => {
  const classes = useStyles();
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm('Are you sure?')) {
      const res = await fetch(
        `${API_URL}/api/events/${event.data[0].attributes.id}`,
        {
          mathod: 'DELETE',
        }
      );
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push('/events');
      }
    }
  };

  return (
    <Layout title="title Dashboard">
      {!events.data ? (
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
      ) : (
        <Box className={classes.dashboard}>
          <h1>Dashboard</h1>

          <ToastContainer />

          <Typography variant="h5" component="h3">
            My Events
          </Typography>

          {events.data.map((evt) => (
            <Box key={evt.id} className={classes.item}>
              <Typography variant="h6" component="h1">
                {evt.attributes.name}
              </Typography>
              <Box className={classes.actions}>
                <Link href={`/events/edit/${evt.id}`}>
                  <a>
                    <BorderColorIcon className={classes.icon} /> {`  `} Edit
                    Event
                  </a>
                </Link>
                <a href="#" onClick={handleDelete} className={classes.delete}>
                  <DeleteForeverIcon className={classes.icon} /> {`   `}
                  Delete
                </a>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Layout>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);

  const events = await res.json();
  return {
    props: {
      events,
    },
  };
}
