
# Database Schema and Backend Routes

## DB Schema

![database-schema](https://imgur.com/78NqGic.jpg)

## Backend Routes

### Users

GET /api/users/:id
* Returns information of single user

### Session

GET /api/auth
* Returns the information of the logged in user

POST /api/auth/signup
* Signs up a new user

POST /api/auth/login
* Logs in a user

Delete /api/auth
* Logs out a user

### Workouts

GET /api/workouts/:workoutid
* Returns information of single workout

GET /api/users/:id/workouts
* Returns information of all user workouts

POST /api/workouts/
* Creates new workout

PUT /api/workouts/:workoutid
* Edits a workout

DELETE /api/workouts/:workoutid
* Deletes a workout

### Exercises

GET /api/exercises/:exerciseid
* Returns information of single exercise

GET /api/users/:id/exercises
* Returns information of all user exercises

POST /api/exercises/
* Creates new exercise

PUT /api/exercises/:exerciseid
* Edits am exercise

DELETE /api/exercises/:exerciseid
* Deletes am exercise
