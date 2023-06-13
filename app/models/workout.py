from .db import db, environment, SCHEMA, add_prefix_for_prod
from .workout_exercises import workout_exercises



class Workout(db.Model):
    __tablename__ = 'workouts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='workouts')

    exercises = db.relationship(
        'Exercise',
        secondary=workout_exercises,
        back_populates='workouts'
    )


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'date': self.date,
        }
