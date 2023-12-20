import './styles.scss'
import { CalendarDirectionButton, SelectedMonth } from './calendarComponents'

const Calendar = () => {
  return (
    <div>
      <div className="calendar grid">
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