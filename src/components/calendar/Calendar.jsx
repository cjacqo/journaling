import { Cell } from './calendarComponents'

const Calendar = () => {
  return (
    <div className='w-[400px] border-t border-l'>
      <div className='grid grid-cols-7 items-center justify-center text-center'>
        <Cell>{'<<'}</Cell>
        <Cell>{'<'}</Cell>
        <Cell className='col-span-3'>December 2023</Cell>
        <Cell>{'>'}</Cell>
        <Cell>{'>>'}</Cell>
        {/* <CalendarDirectionButton icon={'<<'} />
        <CalendarDirectionButton icon={'<'} />
        <SelectedMonth month='December' year='2023' />
        <CalendarDirectionButton icon={'>'} />
        <CalendarDirectionButton icon={'>>'} /> */}
      </div>
    </div>
  )
}

export default Calendar