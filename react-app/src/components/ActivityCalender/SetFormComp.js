import { useState } from "react"

export default function SetFormComp ({}) {
    const [weight, setWeight] = useState("")
    const [reps, setReps] = useState("")



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
