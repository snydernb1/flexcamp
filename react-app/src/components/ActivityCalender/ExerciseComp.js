import { useState } from "react"
import SetFormComp from "./SetFormComp"


export default function ExerciseComp ({exercise, date, submit}) {
    const [count, setCount] = useState([1])

    console.log('exercise from exercise comp',exercise.id)

    const addSet = () => {
        let setNum = count[count.length - 1]
        setCount([...count, (setNum + 1)])
    }


    const removeSet = () => {
        if (count.length > 1) {
            let oldSetNum = count
            oldSetNum.pop()
            setCount([...oldSetNum])
        }
    }


    // console.log('this should show the number of sets', count)

    return (
        <>
        <h4>{exercise.name}</h4>

        {count.map((set)=> (
            <SetFormComp
            date={date}
            setNum={set}
            exerciseId={exercise.id}
            submit={submit}
            key={set}
            />
        ))}

        <button onClick={addSet}>Add Set</button>
        <button onClick={removeSet}>Remove Set</button>
        </>
    )
}
