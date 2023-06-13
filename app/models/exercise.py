from .db import db, environment, SCHEMA, add_prefix_for_prod


class Exercise(db.Model):
    __tablename__ = 'exercises'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    muscle_group = db.Column(db.String(20), nullable=False)
    exercise_type = db.Column(db.String(20), nullable=False)
    body_weight = db.Column(db.Boolean, nullable=False)
    demo_url = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='exercises')
    sets = db.relationship('ExerciseSet', back_populates='exercise')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'muscle_group': self.muscle_group,
            'exercise_type': self.exercise_type,
            'body_weight': self.body_weight,
            'demo_url': self.demo_url,
            'user_id': self.user_id,
        }
