from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import ExerciseSet


class SetForm(FlaskForm):
    set_number= IntegerField('set number', validators=[DataRequired()])
    weight= IntegerField('weight')
    reps= IntegerField('reps')
    date= StringField('date', validators=[DataRequired()])
    exercise_id= IntegerField('set number', validators=[DataRequired()])
