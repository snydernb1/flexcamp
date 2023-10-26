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

    useEffect(() => {
      setSelectedDate(workoutKeys[workoutKeys.length - 1])
    }, [workoutsObj])


    // This gets the past 7 days based on selectedDate...
    const selectedDates = []
    if (selectedDate !== undefined) {

      let i = 6

      while (selectedDates.length !== 6) {
        let currDate = selectedDate
        let dateArr = currDate.split('-')
        let newDay = Number(dateArr[2]) - i
        let prevMonth = dateArr[1]


        if (newDay > 0) {

          let newDayStr = `${newDay}`
          let nextDate = `${dateArr[0]}-${dateArr[1]}-${newDayStr.length ===2 ? newDayStr: '0'+newDayStr}`

          selectedDates.push(nextDate)


        } else {

          let newMonth = Number(prevMonth) - 1 // 5
          let lastDay = months[`${newMonth}`] - Math.abs(newDay)// 31
          let lastDayStr = `${lastDay}` // 31 - 2
          let newMonthStr = `${newMonth}`

          selectedDates.push(`${dateArr[0]}-${newMonthStr.length === 2? newMonth: '0' + newMonth}-${lastDayStr.length ===2 ? lastDay: '0'+lastDay}`)
        }

        i--

    }
    selectedDates.push(selectedDate)
  }


  const latestWorkouts = []
    // This grabs the workout data based on past 7 selected days
    for (let date of selectedDates) {
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
