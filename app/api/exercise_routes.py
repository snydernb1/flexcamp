from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Workout, Exercise, ExerciseSet
import datetime

exercise_routes = Blueprint('exercises', __name__)


@exercise_routes.route('/')
@login_required
def all_exercises():
    '''
    Query for all of a user's exercises
    '''

    user = current_user
    user_exercise_data = []

    exercises = Exercise.query.filter(Exercise.user_id == user.id).all()


    [user_exercise_data.append(exercise.to_dict()) for exercise in exercises]

    return user_exercise_data
