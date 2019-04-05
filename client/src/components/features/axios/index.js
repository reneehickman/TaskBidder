import axios from 'axios';

export const getUser = user =>
  axios
    .get(`/user/${user.id}`)
    .then(function(response) {
      console.log(response.data.length);
      if (response.data.length === 0) {
        axios
          .post('/user/login', {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            star_review: user.star_review
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else return response;
    })
    .catch(function(error) {
      console.log(error);
    });

export const addToDo = post => {
  axios
    .post('/todos', {
      userid: post.userid,
      title: post.title,
      description: post.description,
      startingBid: post.startingBid,
      minStar: post.minStar,
      expiredTime: post.expiredTime
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const addToMarket = post => {
  console.log('matata');
  axios
    .post('/todos/market', {
      userid: post.userid,
      title: post.title,
      description: post.description,
      //called best_bid in mysql
      startingBid: post.startingBid,
      minStar: post.minStar,
      expiredTime: post.expiredTime
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateToDo = post => {};
