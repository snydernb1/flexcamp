from app.models import db, Exercise, environment, SCHEMA
from sqlalchemy.sql import text


def seed_exercises():
    # User 1 (Chris)
    bench = Exercise(
        name='Bench Press',
        muscle_group='Chest',
        exercise_type='Barbell',
        body_weight=False,
        user_id=1,
    )
    squat = Exercise(
        name='Squat',
        muscle_group='Legs',
        exercise_type='Barbell',
        body_weight=False,
        user_id=1,
    )
    deadlift = Exercise(
        name='Deadlift',
        muscle_group='Legs',
        exercise_type='Barbell',
        body_weight=False,
        user_id=1,
    )
    curl = Exercise(
        name='Bicep Curl',
        muscle_group='Arms',
        exercise_type='Dumbell',
        body_weight=False,
        user_id=1,
    )
    seated_row = Exercise(
        name='Seated Row',
        muscle_group='Back',
        exercise_type='Cable',
        body_weight=False,
        user_id=1,
    )
    seated_shoulder_press = Exercise(
        name='Seated Shoulder Press',
        muscle_group='Shoulders',
        exercise_type='Dumbell',
        body_weight=False,
        user_id=1,
    )
    incline_sit_up = Exercise(
        name='Incline Sit Up',
        muscle_group='Core',
        exercise_type='Body Weight',
        body_weight=True,
        user_id=1,
    )
    # User 2 (Ronnie)
    r_bench = Exercise(
        name='Bench Press',
        muscle_group='Chest',
        exercise_type='Barbell',
        body_weight=False,
        user_id=2,
    )
    r_squat = Exercise(
        name='Squat',
        muscle_group='Legs',
        exercise_type='Barbell',
        body_weight=False,
        user_id=2,
    )
    r_deadlift = Exercise(
        name='Deadlift',
        muscle_group='Legs',
        exercise_type='Barbell',
        body_weight=False,
        user_id=2,
    )
    r_curl = Exercise(
        name='Bicep Curl',
        muscle_group='Arms',
        exercise_type='Dumbell',
        body_weight=False,
        user_id=2,
    )
    r_seated_row = Exercise(
        name='Seated Row',
        muscle_group='Back',
        exercise_type='Cable',
        body_weight=False,
        user_id=2,
    )
    r_seated_shoulder_press = Exercise(
        name='Seated Shoulder Press',
        muscle_group='Shoulders',
        exercise_type='Dumbell',
        body_weight=False,
        user_id=2,
    )
    r_incline_sit_up = Exercise(
        name='Incline Sit Up',
        muscle_group='Core',
        exercise_type='Body Weight',
        body_weight=True,
        user_id=2,
    )


    all_exercises = [bench, squat, deadlift, curl, seated_row, seated_shoulder_press, incline_sit_up, r_bench, r_squat, r_deadlift, r_curl, r_seated_row, r_seated_shoulder_press, r_incline_sit_up]

    [db.session.add(exercise) for exercise in all_exercises]
    db.session.commit()
    return all_exercises


def undo_exercises():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.exercises RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM exercises"))

    db.session.commit()
