import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EventItem from './EventItem';
import Link from 'next/link';

const useStyles = makeStyles({
  container: {
    padding: '80px 40px',
  },
  list: {
    padding: '20px',
    '& h2': {
      color: '#323232',
    },
  },
  btnGroup: {
    width: '60%',
    '& Button': {
      padding: '30px 0 10px 0',
      fontSize: '1.1rem',
    },
  },
  content: {
    padding: '10px',
  },
});
const Events = ({ events }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={4} className={classes.list}>
          <Typography variant="h4" component="h2">
            Category
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              '& > *': { m: 1 },
            }}
          >
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
              className={classes.btnGroup}
            >
              <Button>Billets</Button>
              <Button>Reunions familiales</Button>
              <Button>Retrouvailles</Button>
              <Button>Collecte de fonds</Button>
              <Button>Marathons</Button>
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid item container xs={8} spacing={2} className={classes.content}>
          {events.length === 0 && <h3>No events to show</h3>}
          {events.map((evt) => (
            <Grid item xs={4} key={evt.key}>
              <Link href={`/events/${evt.attributes.slug}`}>
                <a>
                  <EventItem evt={evt} />
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Events;
