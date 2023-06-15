from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, ExerciseSet
from app.forms import SetForm

set_routes = Blueprint('sets', __name__)


@set_routes.route('/')
@login_required
def create_set():
    """
    Creates a new set from a workout
    """
    form = SetForm()
    form['csrf_token'].data = request.cookies['csrf_token'] # Boilerplate code
    if form.validate_on_submit():
        new_set = ExerciseSet(
            set_number= form.data['set_number'],
            weight= form.data['weight'],
            reps= form.data['reps'],
            date= form.data['date'],
            exercise_id= form.data['exercise_id']
        )
        print('What does the new Set look like?', new_set)
        db.session.add(new_set)
        db.session.commit()

    if form.errors:
        print(form.errors)
        return form.errors, 400
