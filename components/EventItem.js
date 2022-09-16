import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const EventItem = ({ evt }) => {
  return (
    <>
      <Card sx={{ maxWidth: 375, minHeight: 320 }}>
        <CardMedia
          component="img"
          height="140"
          image={
            evt.attributes.image.data
              ? evt.attributes.image.data.attributes.formats.medium.url
              : 'event-default.png'
          }
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {new Date(evt.attributes.date).toLocaleDateString('en-US')} at{' '}
            {evt.attributes.time}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {evt.attributes.name}
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
    </>
  );
};

export default EventItem;
