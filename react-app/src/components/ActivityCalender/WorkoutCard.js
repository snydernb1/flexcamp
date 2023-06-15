import ExerciseCard from "./ExerciseCard"
import './WorkoutCard.css'

export default function WorkoutCard ({workout}) {


    let exercises;

    if (workout.exercises !== null) {
        exercises = Object.values(workout.exercises)
    }
    // console.log('workout from the workout card',exercises)


    return (
        <div className="workoutCard">
            <p>{workout.date}</p>

            {workout.exercises === null ?

            <button>Add workout</button>:


            exercises.map((exercise)=> (
                <ExerciseCard
                exercise={exercise}
                key={exercise.id}
                />
            ))

            }

        </div>
    )
}
