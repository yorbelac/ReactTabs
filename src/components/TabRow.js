import PropTypes from 'prop-types'

const TabRow = ({item,total}) => {
  return (
    <div className="tabRow">
        <div className="tabRowDate">5/17/2022</div>
        <div className="tabRowItem">{item}</div>
        <div className="tabRowTotal">{total}</div>
    </div>
  )
}

TabRow.defaultProps = {
  item: 'Menu Item',
  total: '00.00',
}

TabRow.propTypes = {
  item: PropTypes.string,
  total: PropTypes.number,
}

export default TabRow
