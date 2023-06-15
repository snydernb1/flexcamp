const ALL_WORKOUTS = 'workouts/ALL_WORKOUTS'


const allWorkouts = (workouts) => ({
    type: ALL_WORKOUTS,
    workouts
})


export const fetchAllWorkouts = () => async (dispatch) => {
    const response = await fetch('/api/workouts/', {
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (response.ok) {
		const workouts = await response.json();
		dispatch(allWorkouts(workouts));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};

const initialState = {workouts: {}}

export default function reducer(state = initialState, action) {

    let workoutState;

    switch (action.type) {
        case ALL_WORKOUTS:
            const workoutData = action.workouts

            workoutState = {...state, workouts: {...state.workouts}}

            workoutData.forEach(workout => {
                const date = Date.parse(workout.date)
                const newDate = new Date(Number(date))
                workout.date = newDate
                workoutState.workouts[date] = workout
            });

            return workoutState
        default:
            return state
    };
};
