import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllExercises } from "../../store/exercises"
import ExerciseComp from "./ExerciseComp"


export default function CreateWorkoutForm () {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const exercisesObj = useSelector(state => state.exercises?.exercises)
    const [exerciseList, setExerciseList] = useState([])
    const [submit, setSubmit] = useState(false)

    console.log('user exercises',exercisesObj)
    const exercises = Object.values(exercisesObj)

    useEffect(() => {
        dispatch(fetchAllExercises())
    }, [dispatch])



    const addExercise = (e) => {
        // e.preventDefault()
        let exercise = e.target.dataset.user
        for (let item of exerciseList) {
            if (item === exercise) {
                return
            }
        }
        setExerciseList([...exerciseList, exercise])
    }

    const submitWorkout = () => {
        setSubmit(true)
    }


    // const addSet = (e) => {
    //     let exercise = e.target.dataset.user
    //     const oldList = exerciseList;
    //     // oldList.exercise
    //     console.log('before', oldList)

    //     for (let item of oldList) {
    //         console.log('in loop', item[exercise])
    //         if (item[exercise] !== undefined) {
    //             item[exercise].push('1')
    //         }
    //     }
    //     console.log('afterloop',oldList)
    //     // const add = {[exercise]: [1]}
    //     setExerciseList([...oldList])
    // }
    // console.log('this is the exercise list state',exerciseList)

    const removeExercise = (e) => {
        let exerciseItem = e.target.dataset.user
        const newExerciseList = []
        for (let exercise of exerciseList) {
            if (exercise !== exerciseItem) {
                newExerciseList.push(exercise)
            }
        }
        setExerciseList([...newExerciseList])
    }

    return (
        <>
            <h4>+ Add Exercise</h4>
            {exercises.map((exercise) => (
                <p onClick={addExercise} data-user={exercise.name}>{exercise.name}</p>
            ))}


            {exerciseList.map((selectedExercises) => (
                <div>
                    <button onClick={removeExercise} data-user={selectedExercises}>Remove Exercise</button>

                    <ExerciseComp
                    exercise={exercisesObj[selectedExercises]}
                    key={exercisesObj[selectedExercises]?.id}
                    />
                </div>
            ))}

            {/* {exerciseList.map((selectedExercise) => (
                <div>
                    <h4>{Object.keys(selectedExercise)[0]}</h4>
                    {Object.values(selectedExercise).map((set) => (
                        <div>
                            <p>{set}</p>
                        </div>
                        ))}
                    <button onClick={addSet} data-user={Object.keys(selectedExercise)[0]}>AddSet</button>
                </div>
            ))} */}

            {exerciseList.length !== 0 &&
            <button onClick={submitWorkout}>Finish Workout</button>
            }
        </>
    )
}
