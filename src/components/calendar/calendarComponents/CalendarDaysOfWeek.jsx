import Cell from "./Cell"

const CalendarDaysOfWeek = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

  return (
    <>
      {/* Loop over daysOfWeek to make cells */}
      { daysOfWeek.map((day, i) => <Cell key={i} className='text-sm font-bold'>{day}</Cell>) }
    </>
  )
}

export default CalendarDaysOfWeek