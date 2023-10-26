import ActivityCalender from 'react-activity-calendar';
import WorkoutCard from './WorkoutCard';
import { useSelector } from 'react-redux';
import './Workout.css'




function ActivityCalenderComp () {
    const workoutsObj = useSelector(state => state.workouts?.workouts);

    const workoutKeys = Object.keys(workoutsObj)
    const workoutVals = Object.values(workoutsObj)

    const latestWorkouts = workoutVals.slice((workoutVals.length - 1) - 6) // This grabs the latest 6 workouts to default to



    const dates = [{ // MIGHT NEED TO UPDATE THIS ENTRY IF USER HAS WORKOUT ON THE FIRST, THIS IS SETTING THE CONSTRAINTS OF THE CALENDER COMP
      date: '2023-01-01',
      count: 0,
      level: 0
    }];

    for (let date of workoutKeys) {
      // const temp = new Date(Number(date))
      // const year = temp.toLocaleString('default', {year: 'numeric'})
      // const month = temp.toLocaleString('default', {month: '2-digit'})
      // const day = temp.toLocaleString('default', {day: '2-digit'})

      // const newDate = `${year}-${month}-${day}`
      const newDate = date
      const dateObj = {
        date: newDate,
        count: 1,
        level: 5
      }
      dates.push(dateObj)
    }

    dates.push({
      date: '2023-12-31',
      count: 0,
      level: 0
    })




    return (
    <>

      <h1>Workout Activity</h1>

      <ActivityCalender
        data={dates}
        eventHandler={{
        onClick: event => activity => {
          console.log({ event, activity });
          alert(JSON.stringify(activity, null, 4));
        },
        onMouseEnter: event => activity => console.log('mouseEnter'),
        }}

        hideColorLegend='false'
        labels={{
          totalCount: "{{count}} workouts in {{year}}",
        }}
      />

      <div className='cards'>
        {latestWorkouts.map((workout)=> (
          <WorkoutCard
          workout={workout}
          key={workout.id}
          />
        ))
        }
      </div>



    </>
    );
};

export default ActivityCalenderComp;
