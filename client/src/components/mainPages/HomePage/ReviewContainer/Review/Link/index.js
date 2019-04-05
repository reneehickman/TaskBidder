import React from 'react';
import './style.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import faker from 'faker';
import ReactStars from 'react-stars';

const Link = (props) => {
  const {user} = props;

  return (
<Card>
    <List >
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={faker.internet.avatar()}/>
      </ListItemAvatar>
      <ListItemText
        primary={user.first_name} 
        secondary={
          <React.Fragment>
            <ReactStars value={user.star_review} count={5}
            size={24} edit={false} />
            <Typography component="span" color="textPrimary">
            {faker.hacker.phrase()}
            </Typography>
            {user.userReview}
          </React.Fragment>
        }
      />
    </ListItem>
    </List>
    </Card>
  
  )
}

export default Link;