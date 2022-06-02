import {format} from 'date-fns'
import PropTypes from 'prop-types'

const TabRow = ({date,item,cost}) => {

  const todaysDate = format(new Date(Date()).getTime(), 'MM/dd/yyyy')
  const entryDate = new Date(date).setHours(0,0,0,0)
  const displayDate = format(entryDate, 'MM/dd/yyyy')
  const today = todaysDate === displayDate


  return (
    <div className={`${today ? 'tabRowToday':'tabRow'}`}>
        <div className="tabRowDate" >{displayDate}</div>
        <div className="tabRowItem">{item}</div>
        <div className="tabRowTotal">${cost.toFixed(2)}</div>
    </div>
  )
}

TabRow.defaultProps = {
  date: 'Date',
  item: 'Menu Item',
  total: '00.00',
}

TabRow.propTypes = {
  item: PropTypes.string,
  // total: PropTypes.number,
}

export default TabRow
