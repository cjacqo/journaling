import { CalendarDirectionButton, SelectedMonth } from './calendarComponents'

const Calendar = () => {
  return (
    <div className='w-[400px] border-t border-l'>
      <div className='grid grid-cols-7 items-center justify-center text-center'>
        <CalendarDirectionButton icon={'<<'} />
        <CalendarDirectionButton icon={'<'} />
        <SelectedMonth month='December' year='2023' />
        <CalendarDirectionButton icon={'>'} />
        <CalendarDirectionButton icon={'>>'} />
      </div>
    </div>
  )
}

export default Calendar