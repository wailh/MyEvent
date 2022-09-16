import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const useStyles = makeStyles({
  wrapper: {
    padding: '50px 80px',
  },
});

const Testimenials = (props) => {
  const classes = useStyles();
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Box className={classes.wrapper} bgcolor="why.main" align="center">
      <Typography variant="h3" component="h3" color="secondary.main">
        Ce que disent nos clients
      </Typography>
      <Carousel>
        {items.map((item, i) => (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper key={i}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper key={i}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper key={i}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimenials;
