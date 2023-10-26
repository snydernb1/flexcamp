const ALL_EXERCISES = 'exercises/ALL_EXERCISES'


const allExercises = (exercises) => ({
    type: ALL_EXERCISES,
    exercises
})


export const fetchAllExercises = () => async (dispatch) => {
    const response = await fetch('/api/exercises/', {
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (response.ok) {
		const exercises = await response.json();
		dispatch(allExercises(exercises));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};


const initialState = {exercises: {}}

export default function reducer(state = initialState, action) {

    let exerciseState;

    switch (action.type) {
        case ALL_EXERCISES:
            const exerciseData = action.exercises

            exerciseState = {...state, exercises: {...state.exercises}}

            exerciseData.forEach(exercise => {

                exerciseState.exercises[exercise.name] = exercise
            });

            return exerciseState
        default:
            return state
    };
};
