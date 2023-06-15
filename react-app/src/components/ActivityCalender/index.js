import ActivityCalender from 'react-activity-calendar';
import WorkoutCard from './WorkoutCard';
import { useSelector } from 'react-redux';
import './Workout.css'




function ActivityCalenderComp () {
    const workoutsObj = useSelector(state => state.workouts?.workouts);

    const workoutKeys = Object.keys(workoutsObj)
    const workoutVals = Object.values(workoutsObj)

    const latestWorkouts = []
    // const latestWorkouts = workoutVals.slice((workoutVals.length - 1) - 6)

    const workoutCount = workoutVals.length - 1
    let temp = new Date(Number(workoutKeys[workoutCount]))
    let day = temp.toLocaleString('default', {day: '2-digit'})






    for (let i = workoutVals.length - 1; i >= workoutCount-6; i--) {

      let prevData = Date.parse(latestWorkouts[0]?.date)
      let prevTemp = new Date(Number(prevData))
      let prevDay = prevTemp.toLocaleString('default', {day: '2-digit'})
      let prevMonth = prevTemp.toLocaleString('default', {month: '2-digit'})
      let prevYear = prevTemp.toLocaleString('default', {year: 'numeric'})

      console.log('Current Day', day)
      console.log('Prev Day', prevDay)


      if (i === workoutVals.length - 1) {
        latestWorkouts.unshift(workoutVals[i])
      } else if (Number(prevDay) - Number(day) === 1) {
        latestWorkouts.unshift(workoutVals[i])
        day = Number(day) + 1

      } else {
        let dateStr = `${prevYear}-${prevMonth}-${Number(prevDay) - 1}`
        console.log(new Date(dateStr))

        let blank = {date: new Date(dateStr)}
        latestWorkouts.unshift(blank)
      }

      day = Number(day) - 1
    }
    console.log('this is latest workouts', latestWorkouts)







    const dates = [{
      date: '2023-01-01',
      count: 0,
      level: 0
    }];

    for (let date of workoutKeys) {
      const temp = new Date(Number(date))
      const year = temp.toLocaleString('default', {year: 'numeric'})
      const month = temp.toLocaleString('default', {month: '2-digit'})
      const day = temp.toLocaleString('default', {day: '2-digit'})

      const newDate = `${year}-${month}-${day}`
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
        eventHandlers={{
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

        // renderBlock={(block, activity) => (
        // <div className='blockDiv' title={`${activity.count} activities on ${activity.date}`}>
        //     {block}
        // </div>
        // )}
      />

      {/* <div className='cards'>
        {latestWorkouts.map((workout)=> (
          <WorkoutCard
          workout={workout}
          key={workout.id}
          />
        ))
        }
      </div> */}



    </>
    );
};

export default ActivityCalenderComp;
