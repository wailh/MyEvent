import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import { parseCookies } from '../../helpers/index';
import { useRouter } from 'next/router';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

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

const Dashboard = ({ events, token }) => {
  const { user, logout } = useContext(AuthContext);

  const classes = useStyles();
  const router = useRouter();

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/api/events/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data = await res.json();

      console.log('message ', data);
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
                <a
                  href="#"
                  onClick={() => handleDelete(evt.id)}
                  className={classes.delete}
                >
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

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: '/account/login',
        permanent: false,
      },
    };
  }
  const res = await fetch(`${API_URL}/api/events`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();
  return {
    props: {
      events,
      token,
    },
  };
}
