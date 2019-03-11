# General Assembly Project 4: READ-ME

Live version:
A hosted version of this app can be found at https://read-mee.herokuapp.com/

### Timeframe
7 Days

## Technologies Used
* React.js
* Flask
* Python
* Mocha & Chai
* Axios
* SCSS/CSS
* Babel
* Semantic UI
* HTML5
* Git/Github
* Heroku


## Packages Used
* flask-sqlalchemy
* marshmallow-sqlalchemy
* praw
* flask-bcrypt
* psycopg2-binary
* pyjwt
* flask-marshmallow
* Webpack

### APIs:
* Reddit


## Contributors
A group project of 3 members [Joshua King](https://github.com/joshuaking06), [Siddant Gurung](https://github.com/Siddant), [Alessandro Lepri](https://github.com/alessandrolepri)
The project was managed by using Trello board and daily morning stand-ups.


## Project Summary

What if you don't even know where to start on your story? This app for writers can definitely help.
Inspiration can come from weird places and, now your phone can be one of them!
This app is just like it sounds: an app for writers...and readers
In particular, if you're looking for a story writing app, READ-ME App is for you. It can help you lay the groundwork for your story, from organising all of your novel's major events.

# Users Journey

Any users can check all the stories on reddit and also stories published by other users and start reading.
The user reading has than been implemented by converting from text to voice the stories and also set up the night mode that will change the colour of the screen for a less bright screen
If any READ-ME users would like to contact other users by sending messages and leave comment or publish short stories the register form is necessary and by log-in they can start their journey into the app and became a potential writer, join the readers community and, add the stories to the reading list for the future.



## Process

The development process started with simple wireframes to workout the basic functionality of the site. We then decided what database models and routes would be needed. We started working on the backend api of the site by each making models and controllers for every route. Once the api routes had been made, this was tested by making api requests with Insomnia.

With the backend up and running, we moved onto working on the frontend with React.js. Basic components were made for each page and a router was set up in the app.js file. We each took pages and worked on these individually creating the layout and functionality for each page.

Work was carried out on branches of the code depository for each feature. This was merged with the Development branch of the code and any merge conflicts were fixed as a group. Features were tested on the Development branch before being merged with the Master branch.

Tasks were managed and assigned through the task manager Trello. We performed daily stand-ups to keep track of progress.



# Features
## Night Mode 
We thought night mode would be a very useful feature for those who love reading without the eye strain of a bright screen. This feature was achieved by creating a Settings class with static methods which saved the night mode setting in local storage, which would still be useful for if the user left the site and returned later. It was debated having night be stored in the database for each account, however we wanted any user(logged in or otherwise) to have access to night mode. 

## Mobile Focused
From the outset, we decided we wanted to make the app heavily focused towards mobile. Since this is an app we envisioned people using while on the commute to work, sitting in bed, or just anywhere on the go. Semantic UI's very good documentation made it even more achievable to do this with a large app on just a seven day timeframe. Because of this mobile focused development, we felt a sidebar would fit very well for this app.

## Flip Effects
This was achieved using a package call 'react-flip-page'. While it certainly was an essential and very useful part of creating the overall look and feel of the site, it was definitely a big challenge to work with and to style correctly.


reset password
text to voice


### Challenges and Wins



## Future features

language translator
Email service
likes
deleting from reading list
gifs
bookmark