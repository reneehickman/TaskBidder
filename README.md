![Alt Text](https://github.com/Kclaster/todo/blob/master/client/src/pictures/logo-01.png)

The ask was a task management application. Developed as a group project using React Redux, TaskBidder allows users to make a list of tasks and post them to a marketplace where other users can bid on completing those tasks. The lowest bid wins the task. There is a rating system much like uber where users can filter out quality users looking to complete tasks. If you only want those with a 5 star rating to complete your task then your posted task will only be shown to 5 star users.


#### TaskBidder Website: https://cherry-tart-69309.herokuapp.com/


# How to use TaskBidder
### Home Page
Simple log in with Google to begin using TaskBidder. Once you have logged in you, the site will redirect you to the User Page. 

![Alt Text](https://github.com/Kclaster/todo/blob/master/client/src/pictures/TaskBidder%20Home.png)


### User Page
The User Page is the portal to the user's personal task list, the market place, creating tasks and writing a review. 

![Alt Text](https://github.com/Kclaster/todo/blob/master/client/src/pictures/TaskBidder%20User.png)


#### Your Task List
Your personal list of task will be saved here where you can view your task and mark them complete.

![Alt Text](https://github.com/Kclaster/todo/blob/master/client/src/pictures/Task-section.gif)


#### Creating a Task
 Fill out the appropriate fields and click "Add to my Task." You will see it appear in your personal task list. 

![Alt Text](https://github.com/Kclaster/todo/blob/master/client/src/pictures/create-task.gif)


#### Creating a Task for the Market Place
Add a title, description, starting bid price, add the minimum stars need for a user to bid, then click "Add to the Market."  Users can now bid to win your task. After seven days the user with the lowest bid wins the task.

![Alt Text](https://github.com/Kclaster/todo/blob/master/client/src/pictures/add%20to%20the%20marketplace.gif)

#### Market Place Task
Click on the title of the task, and it will expand to show all the details.  You will see a description of the task when the task expires, the current bid and the area where the user can submit their bid. When a user bids on a task the current bid will update automatically. 

![Alt Text](https://github.com/Kclaster/todo/blob/master/client/src/pictures/Bidding.gif)


#### Writing a Review
At the bottom right side of the user page, you will find the review section. Once a user has completed your task from the market place, a review will be sent for you to fill out to rate the user who completed your task.

![Alt Text](https://github.com/Kclaster/todo/blob/master/client/src/pictures/Review.gif)


## Languages & FrameWorks Used
* JavaScript
* ReactJS
* Redux
* Node.JS
* Express
* MySQL
* Heroku 
* JawsDB


## Plans for Version Two
* Let users set expiration date/time
* Real-time display of expiration time
* Add edit feature to users personal task list
* Add payment plan through PayPal
* Add functionally for users to see reviews
* Allows users to respond to reviews
* Adding other authentication like Facebook, PayPal and creating the sites own login system 
* Direct chat with a Task creator and user completing that task
* Automatic update to Task creator once a task has been completed
