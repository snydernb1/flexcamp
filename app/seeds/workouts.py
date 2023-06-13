from app.models import db, Workout, environment, SCHEMA
from sqlalchemy.sql import text
import datetime


def seed_workouts(all_exercises):
    # User 1 (Chris)
    wk_one = Workout(
        date=datetime.datetime(2023, 6, 5, 5, 30, 0),
        user_id=1,
        exercises=[]
    )
