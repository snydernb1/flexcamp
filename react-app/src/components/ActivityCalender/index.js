import ActivityCalender from 'react-activity-calendar';
import WorkoutCard from './WorkoutCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './Workout.css'




function ActivityCalenderComp () {
    const workoutsObj = useSelector(state => state.workouts?.workouts);
    const [selectedDate, setSelectedDate] = useState("")

    const workoutKeys = Object.keys(workoutsObj) //These should be the string dates
    const workoutVals = Object.values(workoutsObj)

    const latestWorkouts = []

    let workoutCount = workoutVals.length - 1 //Does this need to be constant?

    let prevDay;
    let prevDate;

    if (workoutCount !== -1) {
      while (latestWorkouts.length !== 7) {
        console.log('this is latest workouts', latestWorkouts)

        let nextLogDay;
        let nextLogDayNum;

        if (workoutKeys[workoutCount] !== undefined) {
          nextLogDay = workoutKeys[workoutCount].split('-')
          nextLogDayNum = Number(nextLogDay[2])
        }

        if (latestWorkouts.length === 0) {
          latestWorkouts.unshift(workoutVals[workoutCount])
          let temp = workoutKeys[workoutCount].split('-')
          prevDay = Number(temp[2]) - 1
          prevDate = workoutKeys[workoutCount]
          workoutCount--


        } else if (prevDay === nextLogDayNum) {
          latestWorkouts.unshift(workoutVals[workoutCount])
          let temp = workoutKeys[workoutCount].split('-')
          prevDay = Number(temp[2]) - 1
          prevDate = workoutKeys[workoutCount]
          workoutCount--


        } else {
          let dateArr = prevDate.split('-')
          let day = prevDay
          let blank = {
            date: `${dateArr[0]}-${dateArr[1]}-${day}`,
            exercises: null
        }
          latestWorkouts.unshift(blank)
          prevDay = day - 1
          prevDate = `${dateArr[0]}-${dateArr[1]}-${day}`

        }
      }

      console.log('this is latest workouts', latestWorkouts)
    }


    // for (let i = workoutVals.length - 1; i >= workoutCount-6; i--) {

    //   let prevData = Date.parse(latestWorkouts[0]?.date)
    //   let prevTemp = new Date(Number(prevData))
    //   let prevDay = prevTemp.toLocaleString('default', {day: '2-digit'})
    //   let prevMonth = prevTemp.toLocaleString('default', {month: '2-digit'})
    //   let prevYear = prevTemp.toLocaleString('default', {year: 'numeric'})

    //   // console.log('Current Day', day)
    //   // console.log('Prev Day', prevDay)


    //   if (i === workoutVals.length - 1) {
    //     latestWorkouts.unshift(workoutVals[i])
    //   } else if (Number(prevDay) - Number(day) === 1) {
    //     latestWorkouts.unshift(workoutVals[i])
    //     day = Number(day) + 1

    //   } else {
    //     let dateStr = `${prevYear}-${prevMonth}-${Number(prevDay) - 1}`
    //     // console.log(new Date(dateStr))

    //     let blank = {date: new Date(dateStr)}
    //     latestWorkouts.unshift(blank)
    //   }

    //   day = Number(day) - 1
    // }








    // This is putting data into the calender based on the workout dates
    const dates = [{
      date: '2023-01-01',
      count: 0,
      level: 0
    }];

    for (let date of workoutKeys) {
      const dateObj = {
        date: date,
        count: 1,
        level: 4
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
          // console.log({ event, activity });
          // alert(JSON.stringify(activity, null, 4));
          setSelectedDate(activity.date)
        },
        // onMouseEnter: event => activity => console.log('mouseEnter'),
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
