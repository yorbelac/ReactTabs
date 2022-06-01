import PropTypes from 'prop-types'

const TabRow = ({date,item,cost,today}) => {
  return (
    <div className={`${today ? 'tabRowToday':'tabRow'}`}>
        <div className="tabRowDate">{date}</div>
        <div className="tabRowItem">{item}</div>
        <div className="tabRowTotal">${cost.toFixed(2)}</div>
    </div>
  )
}

TabRow.defaultProps = {
  date: '5/24/2022',
  item: 'Menu Item',
  total: '00.00',
}

TabRow.propTypes = {
  item: PropTypes.string,
  // total: PropTypes.number,
}

export default TabRow
