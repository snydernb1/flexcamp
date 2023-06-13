from .db import db, environment, SCHEMA, add_prefix_for_prod



class ExerciseSet(db.Model):
    __tablename__ = 'exercise_sets'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    set_number = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Integer)
    reps = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    exercise_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('exercises.id')), nullable=False)

    exercise = db.relationship('Exercise', back_populates='sets')


    def to_dict(self):
        return {
            'id': self.id,
            'set_number': self.set_number,
            'weight': self.weight,
            'reps': self.reps,
            'date': self.date,
            'exercise_id': self.exercise_id,
        }
