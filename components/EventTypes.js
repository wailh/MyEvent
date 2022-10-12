import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '50px 0',
    '& h1': {
      [theme.breakpoints.down(750)]: {
        fontSize: '2rem !important',
        padding: '0 10px',
      },
    },
  },
  container: {
    padding: '30px 100px',
    '& div': {
      textTransform: 'capitalize',
      fontSize: '2rem !important',
    },
  },
  card: {
    boxShadow: '0px 1px 5px #000',
  },
  content: {
    padding: '5px 0',
  },
}));

const EventTypes = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} align="center">
      <Typography variant="h3" component="h1">
        Choisissez votre événement ou levée de fonds
      </Typography>
      <Grid
        container
        spacing={4}
        className={classes.container}
        flex="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://res.cloudinary.com/elumi/image/upload/v1663060350/event-planning-websites_jvlxcu.jpg"
                alt="green iguana"
              />
              <CardContent
                className={classes.content}
                sx={{ backgroundColor: '#63821c' }}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="secondary.main"
                >
                  évènements
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://res.cloudinary.com/elumi/image/upload/v1663060351/event-tickets-websites_phhmbh.jpg"
                alt="green iguana"
              />
              <CardContent
                className={classes.content}
                sx={{ backgroundColor: '#e54028' }}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="secondary.main"
                >
                  Billets
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://res.cloudinary.com/elumi/image/upload/v1663060350/family-reunion-websites_kqywr5.jpg"
                alt="green iguana"
              />
              <CardContent
                className={classes.content}
                sx={{ backgroundColor: '#f5821f' }}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="secondary.main"
                >
                  réunions familiale
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://res.cloudinary.com/elumi/image/upload/v1663060350/class-reunion-websites_tn47w5.jpg"
                alt="green iguana"
              />
              <CardContent
                className={classes.content}
                sx={{ backgroundColor: '#2196f3' }}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="secondary.main"
                >
                  retrouvailles
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://res.cloudinary.com/elumi/image/upload/v1663060351/walkathon-websites_yn4sna.jpg"
                alt="green iguana"
              />
              <CardContent
                className={classes.content}
                sx={{ backgroundColor: '#0097a7' }}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="secondary.main"
                >
                  marathons
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://res.cloudinary.com/elumi/image/upload/v1663060351/fundraising-websites_wljmga.jpg"
                alt="green iguana"
              />
              <CardContent
                className={classes.content}
                sx={{ backgroundColor: '#1446a0' }}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="secondary.main"
                >
                  collecte de fonds
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventTypes;
