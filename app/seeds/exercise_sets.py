from app.models import db, ExerciseSet, environment, SCHEMA
from sqlalchemy.sql import text
import datetime

# w_one_date = datetime.datetime(2023, 6, 5, 5, 30, 0)
# w_two_date = datetime.datetime(2023, 6, 7, 5, 30, 0)
# w_three_date = datetime.datetime(2023, 6, 9, 5, 30, 0)

w_one_date = "2023-06-04"
w_two_date = "2023-06-06"
w_three_date = "2023-06-08"

def seed_sets():
    # User 1 (Chris)
    # Workout 1
    w_one_bench_one = ExerciseSet(
        set_number= 1,
        weight= 225,
        reps= 12,
        date= w_one_date,
        exercise_id= 1,
    )
    w_one_bench_two = ExerciseSet(
        set_number= 2,
        weight= 225,
        reps= 12,
        date= w_one_date,
        exercise_id= 1,
    )
    w_one_bicep_one = ExerciseSet(
        set_number= 1,
        weight= 50,
        reps= 10,
        date= w_one_date,
        exercise_id= 4,
    )
    w_one_bicep_two = ExerciseSet(
        set_number= 2,
        weight= 50,
        reps= 10,
        date= w_one_date,
        exercise_id= 4,
    )
    w_one_row_one = ExerciseSet(
        set_number= 1,
        weight= 180,
        reps= 10,
        date= w_one_date,
        exercise_id= 5,
    )
    w_one_row_two = ExerciseSet(
        set_number= 2,
        weight= 180,
        reps= 10,
        date= w_one_date,
        exercise_id= 5,
    )
    # Workout 2
    w_two_squat_one = ExerciseSet(
        set_number= 1,
        weight= 405,
        reps= 8,
        date= w_two_date,
        exercise_id= 2,
    )
    w_two_squat_two = ExerciseSet(
        set_number= 2,
        weight= 405,
        reps= 7,
        date= w_two_date,
        exercise_id= 2,
    )
    w_two_dl_one = ExerciseSet(
        set_number= 1,
        weight= 500,
        reps= 8,
        date= w_two_date,
        exercise_id= 3,
    )
    w_two_dl_two = ExerciseSet(
        set_number= 2,
        weight= 500,
        reps= 5,
        date= w_two_date,
        exercise_id= 3,
    )
    w_two_abs_one = ExerciseSet(
        set_number= 1,
        reps= 15,
        date= w_two_date,
        exercise_id= 7,
    )
    w_two_abs_two = ExerciseSet(
        set_number= 2,
        reps= 15,
        date= w_two_date,
        exercise_id= 7,
    )
    # Workout 3
    w_three_bench_one = ExerciseSet(
        set_number= 1,
        weight= 250,
        reps= 8,
        date= w_three_date,
        exercise_id= 1,
    )
    w_three_bench_two = ExerciseSet(
        set_number= 2,
        weight= 250,
        reps= 8,
        date= w_three_date,
        exercise_id= 1,
    )
    w_three_bicep_one = ExerciseSet(
        set_number= 1,
        weight= 50,
        reps= 10,
        date= w_three_date,
        exercise_id= 4,
    )
    w_three_bicep_two = ExerciseSet(
        set_number= 2,
        weight= 50,
        reps= 10,
        date= w_three_date,
        exercise_id= 4,
    )
    w_three_row_one = ExerciseSet(
        set_number= 1,
        weight= 180,
        reps= 10,
        date= w_three_date,
        exercise_id= 5,
    )
    w_three_row_two = ExerciseSet(
        set_number= 2,
        weight= 180,
        reps= 10,
        date= w_three_date,
        exercise_id= 5,
    )

    all_sets = [w_one_bench_one, w_one_bench_two, w_one_bicep_one, w_one_bicep_two, w_one_row_one, w_one_row_two, w_two_squat_one, w_two_squat_two, w_two_dl_one, w_two_dl_two, w_two_abs_one, w_two_abs_two, w_three_bench_one, w_three_bench_two, w_three_bicep_one, w_three_bicep_two, w_three_row_one, w_three_row_two]

    [db.session.add(exercise_set) for exercise_set in all_sets]
    db.session.commit()


def undo_sets():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.exercise_sets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM exercise_sets"))

    db.session.commit()
