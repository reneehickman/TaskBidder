import React from 'react';
import './style.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import faker from 'faker';


const Link = (props) => {

  const {user} = props;
  return (
<Card>
    <List >
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={faker.image.avatar()}/>
      </ListItemAvatar>
      <ListItemText
        primary={user.first_name} 
        secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
            {user.star_review}
            </Typography>
            {user.userReview}
          </React.Fragment>
        }
      />
    </ListItem>
    </List>
    </Card>
  
  
  // <div>
  //   <div className="review-child review-tile">
  //     <h1 className="userName">{user.userName}</h1>
  //     <h4>{user.userRating}&#9733; &#9733;&#9733; &#9733;</h4>
  //     <p>{user.userReview}</p> 
  //       </div>
  // </div>
  )
}

export default Link;