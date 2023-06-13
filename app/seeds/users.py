from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    chris = User(
        username='Cbum',
        first_name='Chris',
        last_name='Bumstead',
        email='cbum@gmail.com',
        password='password',
        bench_pr=405,
        squat_pr=675,
        deadlift_pr=700,
        dark_mode=True
        )
    ronnie = User(
        username='Coleman',
        first_name='Ronnie',
        last_name='Coleman',
        email='ronnie@gmail.com',
        password='password',
        bench_pr=557,
        squat_pr=823,
        deadlift_pr=823,
        dark_mode=True
        )

    db.session.add(chris)
    db.session.add(ronnie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
