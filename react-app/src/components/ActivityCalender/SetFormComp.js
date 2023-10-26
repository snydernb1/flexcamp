import { useState } from "react"

export default function SetFormComp ({date, setNum, exerciseId, submit}) {
    const [weight, setWeight] = useState("")
    const [reps, setReps] = useState("")

    if (submit) {

        const setData = {
            set_number: setNum,
            weight: weight,
            reps: reps,
            date: date,
            exercise_id: exerciseId
        }

        console.log('Did submit work all the way down in setformcomp?', setData)
    }


    return (
        <>
        <form>

            <input
                type="number"
                value={weight}
                placeholder="lbs"
                onChange={(e) => setWeight(e.target.value)}
                required
            />

            <input
                type="number"
                value={reps}
                placeholder="reps"
                onChange={(e) => setReps(e.target.value)}
                required
            />

        </form>
        </>
    )
}
