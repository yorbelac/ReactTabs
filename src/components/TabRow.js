import PropTypes from 'prop-types'

const TabRow = ({paint,date,item,total}) => {
  return (
    <div className={paint}>
        <div className="tabRowDate">{date}</div>
        <div className="tabRowItem">{item}</div>
        <div className="tabRowTotal">${total.toFixed(2)}</div>
    </div>
  )
}

TabRow.defaultProps = {
  paint: 'tabRow',
  // paint: 'tabRowToday',
  date: '5/24/2022',
  item: 'Menu Item',
  total: '00.00',
}

TabRow.propTypes = {
  item: PropTypes.string,
  // total: PropTypes.number,
}

export default TabRow
