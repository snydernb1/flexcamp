import './SetCard.css'

export default function SetCard ({set}) {
    // console.log('workout from the workout card',workout)

    // const sets = Object.values(exercise.sets)
    // console.log('from setCard',set)


    return (
        <div className="setData">
            <p>{set.set_number}</p>
            <p>{set.reps}</p>
            <p>{set.weight}</p>
        </div>
    )
}
