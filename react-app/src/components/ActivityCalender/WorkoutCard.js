import ExerciseCard from "./ExerciseCard"
import CreateWorkoutForm from "./CreateWorkoutForm";
import OpenModalButton from "../OpenModalButton";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import './WorkoutCard.css'

export default function WorkoutCard ({workout}) {


    let exercises;
    if (workout.exercises !== null) {
        exercises = Object.values(workout.exercises)
    }


    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };

    useEffect(() => {
      if (!showMenu) return;

      const closeMenu = (e) => {
        if (!ulRef.current.contains(e.target)) {
          setShowMenu(false);
        }
      };

      document.addEventListener("click", closeMenu);

      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const closeMenu = () => setShowMenu(false);

    return (
        <div className="workoutCard">
            <p>{workout.date}</p>

            {workout.exercises === null ?

            <div>
                <OpenModalButton
                buttonText="Add Workout"
                onItemClick={closeMenu}
                modalComponent={<CreateWorkoutForm />}
                />
            </div>

            :

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
