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

initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALL_WORKOUTS:
            return state
        default:
            return state
    };
};
