import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

const QuicklistItem = ({item,cost,addQuicklist, removeQuicklist}) => {
  return (
    <div className="quicklistItem">
      <button onClick={addQuicklist} className="tabButton" style={{backgroundColor:'#34A853',height:'30px', lineHeight:'30px'}}>+</button>
      <div className="quicklistItemName">{item}</div>
      <div className="quicklistItemPrice">${cost.toFixed(2)}</div>
      <button onClick={removeQuicklist} className="tabButton" style={{backgroundColor:'#EA4335',height:'30px', lineHeight:'30px'}}>-</button>
    </div>
  )
}

QuicklistItem.defaultProps = {
  item: 'Menu Item',
  total: '00.00',
}

QuicklistItem.propTypes = {
  item: PropTypes.string,
  // total: PropTypes.number,
}

export default QuicklistItem
