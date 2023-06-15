import ActivityCalender from 'react-activity-calendar';
import WorkoutCard from './WorkoutCard';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './Workout.css'




function ActivityCalenderComp () {
    const workoutsObj = useSelector(state => state.workouts?.workouts);

    const [selectedDate, setSelectedDate] = useState("")

    const months = {
      '1': 31,
      '2': 28,
      '3': 31,
      '4': 30,
      '5': 31,
      '6': 30,
      '7': 31,
      '8': 31,
      '9': 30,
      '10': 31,
      '11': 30,
      '12': 31,
    }


    const workoutKeys = Object.keys(workoutsObj) //These should be the string dates
    const workoutVals = Object.values(workoutsObj)

    useEffect(() => {
      setSelectedDate(workoutKeys[workoutKeys.length - 1])
    }, [workoutsObj])

    const latestWorkouts = []

    let workoutCount = workoutVals.length - 1

    let prevDay;
    let prevDate;
    // Old conditional to grab the latest 7 workouts - NOT USED
    // if (workoutCount !== -1) {
    //   while (latestWorkouts.length !== 7) {

    //     let nextLogDay;
    //     let nextLogDayNum;

    //     if (workoutKeys[workoutCount] !== undefined) {
    //       nextLogDay = workoutKeys[workoutCount].split('-')
    //       nextLogDayNum = Number(nextLogDay[2])
    //     }

    //     if (latestWorkouts.length === 0) {
    //       latestWorkouts.unshift(workoutVals[workoutCount])
    //       let temp = workoutKeys[workoutCount].split('-')
    //       prevDay = Number(temp[2]) - 1
    //       prevDate = workoutKeys[workoutCount]
    //       workoutCount--


    //     } else if (prevDay === nextLogDayNum) {
    //       latestWorkouts.unshift(workoutVals[workoutCount])
    //       let temp = workoutKeys[workoutCount].split('-')
    //       prevDay = Number(temp[2]) - 1
    //       prevDate = workoutKeys[workoutCount]
    //       workoutCount--


    //     } else {
    //       let dateArr = prevDate.split('-')
    //       let day = prevDay
    //       let blank = {
    //         date: `${dateArr[0]}-${dateArr[1]}-0${day}`,
    //         exercises: null
    //     }
    //       latestWorkouts.unshift(blank)
    //       prevDay = day - 1
    //       prevDate = `${dateArr[0]}-${dateArr[1]}-${day}`

    //     }
    //   }

    //   // console.log('this is latest workouts', latestWorkouts)
    // }


    console.log('This is the selected date....', selectedDate)
    // This gets the past 7 days based on selectedDate...
    const selectedDates = []

    if (selectedDate !== undefined) {

      selectedDates.unshift(selectedDate)

      while (selectedDates.length !== 7) {
        let currDate = selectedDates[0]
        let dateArr = currDate.split('-')
        let newDay = Number(dateArr[2]) - 1
        let prevMonth = dateArr[1]
        let prevDate = selectedDate

      if (newDay !== 0) {
        let newDayStr = `${newDay}`
        let nextDate = `${dateArr[0]}-${dateArr[1]}-${newDayStr.length ===2 ? newDayStr: '0'+newDayStr}`

        selectedDates.unshift(nextDate)
        prevDate = nextDate
      } else {
        let newMonth = Number(prevMonth) - 1
        let lastDay = months[`${newMonth}`]
        let lastDayStr = `${lastDay}`
        let newMonthStr = `${newMonth}`

        selectedDates.unshift(`${dateArr[0]}-${newMonthStr.length === 2? newMonth: '0' + newMonth}-${lastDayStr.length ===2 ? lastDay: '0'+lastDay}`)
      }
    }
    // console.log('selectedDates ==>',selectedDates)
  }

  console.log('selectedDates ==>',selectedDates)


    // This grabs the workout data based on past 7 selected days
    for (let date of selectedDates) {
      console.log(workoutsObj[date])
      if (workoutsObj[date] !== undefined) {
        latestWorkouts.push(workoutsObj[date])
      } else {
        let blank = {
            date: date,
            exercises: null
        }
        latestWorkouts.push(blank)
      }
    }

    console.log('latest workouts-->',latestWorkouts)


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
