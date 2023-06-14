import ExerciseCard from "./ExerciseCard"
import './WorkoutCard.css'

export default function WorkoutCard ({workout}) {
    // console.log('workout from the workout card',workout)

    const exercises = Object.values(workout.exercises)
    // console.log('workout from the workout card',exercises)


    return (
        <div className="workoutCard">
            {exercises.map((exercise)=> (
                <ExerciseCard
                exercise={exercise}
                key={exercise.id}
                />
            ))

            }

        </div>
    )
}
