import PropTypes from 'prop-types'

const QuicklistItem = ({item,total}) => {
  return (
    <div className="quicklistItem">
    <button className="tabButton" style={{backgroundColor:'#34A853',height:'30px', lineHeight:'30px'}}>+</button>
    <div className="quicklistItemName">{item}</div>
    <div className="quicklistItemPrice">{total}</div>
    <button className="tabButton" style={{backgroundColor:'#EA4335',height:'30px', lineHeight:'30px'}}>+</button>
  </div>
  )
}

QuicklistItem.defaultProps = {
  item: 'Menu Item',
  total: '00.00',
}

QuicklistItem.propTypes = {
  item: PropTypes.string,
  total: PropTypes.number,
}

export default QuicklistItem
