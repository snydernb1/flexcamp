import SetCard from "./SetCard"
import './ExerciseCard.css'

export default function ExerciseCard ({exercise}) {
    // console.log('workout from the workout card',exercise)

    const sets = Object.values(exercise.sets)


    return (
        <div>



            <h2>{exercise.name}</h2>

            <div className="exerciseLabels">
                <p>Set</p>
                <p>lbs</p>
                <p>Reps</p>
            </div>

            <div className="exerciseSets">
                {sets.map((set)=> (
                    <SetCard
                    set={set}
                    key={set.id}
                    />
                    ))
                }
            </div>

        </div>
    )
}
