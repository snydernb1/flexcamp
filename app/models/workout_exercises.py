from .db import db, environment, SCHEMA, add_prefix_for_prod


workout_exercises = db.Table(
    'workout_exercises',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('workout_id', db.Integer, db.ForeignKey(add_prefix_for_prod('workouts.id'))),
    db.Column('exercise_id', db.Integer, db.ForeignKey(add_prefix_for_prod('exercises.id')))
)


if environment == "production":
    workout_exercises.schema = SCHEMA
