# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my first name, last name, email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a log-in / sign-up splash page.
      * So that I can easily log out to keep my information secure.

## Workouts

### Create Workout

* As a logged in user, I want to be able to start / create a new workout.
  * When I'm on the `/userhome` page:
    * There is a button to add an exercise
        * Clicking add exercise opens a modal where I can search for exercises to add to my workout or create a new exercise.
    * Once an exercise is selected, I am navigated back to the new workout with the exercise added to the list
        * The exercise is listed as a form with inputs for weight, reps and notes. I am able to click a button to add or remove a set.
        * The exercise also shows how many sets, weight and reps I completed previously on that exercise along with previous notes.
    * At the bottom of the exercise list is a button to finish workout.
        * Clicking the button saves the workout to the user's workout history.

### Viewing Workouts

* As a logged in user, I want to be able to view my previous workouts.
    * When I'm on the `/userhome` page:
        * There is a calender with marks representing the days I've worked out.
            * Clicking on a day with a workout will take me to that workout.

### Updating Workouts

* As a logged in user, I want to be able to edit my previous workouts.
    * When I'm on the `/userhome` page:
        * I can use the calender to navigate to the previous workout.
        * I can also click on a day without a workout and add one if I forgot to track progress during the workout.
        * The previous workout will have an edit button
            * Clicking on the edit button will change the workout display to a form with the previous data already displayed.

### Deleting Workouts

* As a logged in user, I want to be able to delete my previous workouts.
    * When I'm on the `/userhome` page:
        * I can use the calender to navigate to the previous workout.
        * The previous workout will have an delete button
            * Clicking on the delete button will ask for a confirmation, selecting confirm will delete the workout from the user's previous workouts

## Exercises

### Create Exercise

* As a logged in user, I want to be able to create an exercise.
  * When I'm on the `/:userid/workouts/:workoutid` page:
    * There is a button to add an exercise
        * Clicking add exercise opens a modal where I can search for exercises or click a button to create a new exercise.
            * Clicking this button opens a form to input the name, effected bodypart and if it's a bodyweight exercise
            * Upon submitting the new exercise form, the exercise will be saved to the user's exercise list and can be searched for in the add exercise search

### Viewing Exercises

* As a logged in user, I want to be able to view my exercises.
    * When I'm on the `/userhome` page:
        * There is a manage exercises button in the user profile dropdown menu.
            * Clicking on manage exercises navigates to the user's created exercises.

### Updating Exercises

* As a logged in user, I want to be able to edit my created exercises.
    * When I'm on the `/:userid/exercises` page:
        * I can click on an exercise which opens a modal
            * The modal contains a form with the exercise information pre filled.
            * Clicking update returns the user to the exercise list and saves the edited exercise

### Deleting Exercises

* As a logged in user, I want to be able to delete my created exercises.
    * When I'm on the `/:userid/exercises` page:
        * I can click on a button next to the exercise name which will delete the exercise

# Extra Features

## Search for exercises

### Search bar

* As a logged in user, I want to be able to see a list of all my exercises created when I create / start a workout. At the top of the page is a search bar. As I start typing, exercises in the list start filtering out.

## @Media Screen Size

### At home screen size

* While at home, I want to take advantage of the larger screen and see more information about previous workouts to plan and create my workout for the day. Basically, reduce the need to navigate between workout histroy and create a workout

* While at the gym, I want the app optimized for my phone screen.
    * I don't want to see extra history info
    * I want to be able to easily log / input exercise information on my phone while at the gym
