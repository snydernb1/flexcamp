from app.models import db, Workout, environment, SCHEMA
from sqlalchemy.sql import text
import datetime

w_one_date = datetime.datetime(2023, 6, 5, 5, 30, 0)
w_two_date = datetime.datetime(2023, 6, 7, 5, 30, 0)
w_three_date = datetime.datetime(2023, 6, 9, 5, 30, 0)


def seed_workouts(all_exercises):
    # User 1 (Chris)
    wk_one = Workout(
        date=w_one_date,
        user_id=1,
        exercises=[all_exercises[0], all_exercises[3], all_exercises[4],]
    )
    wk_two = Workout(
        date=w_two_date,
        user_id=1,
        exercises=[all_exercises[1], all_exercises[2], all_exercises[6],]
    )
    wk_three = Workout(
        date=w_three_date,
        user_id=1,
        exercises=[all_exercises[0], all_exercises[3], all_exercises[4],]
    )

    all_workouts = [wk_one, wk_two, wk_three]

    [db.session.add(workout) for workout in all_workouts]
    db.session.commit()


def undo_workouts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.workouts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM workouts"))

    db.session.commit()
