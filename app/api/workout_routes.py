from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Workout, Exercise, ExerciseSet
import datetime

workout_routes = Blueprint('workouts', __name__)


@workout_routes.route('/')
@login_required
def all_routes():
    '''
    Query for all of a user's workouts
    '''

    user = current_user
    user_workout_data = []

    date = datetime.datetime(2023, 6, 5, 5, 30, 0)

    workouts = Workout.query.filter(Workout.user_id == user.id).all()

    for workout in workouts:
        workout_data = workout.to_dict()
        workout_data['exercises'] = []
        exercises = workout.exercises

        for exercise in exercises:
            exercise_data = exercise.to_dict()
            exercise_data['sets'] = []
            sets = ExerciseSet.query.filter(ExerciseSet.exercise_id == exercise.id, ExerciseSet.date == workout.date)

            [exercise_data['sets'].append(set_item.to_dict()) for set_item in sets]

            workout_data['exercises'].append(exercise_data)


        user_workout_data.append(workout_data)

    return user_workout_data
