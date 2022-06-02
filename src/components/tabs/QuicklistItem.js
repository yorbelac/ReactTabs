import PropTypes from 'prop-types'
import AddTabItem from './AddTabItem'

const QuicklistItem = ({now,isToday,customerName,item,cost,name,addQuicklist,removeQuicklist,createTabItem}) => {

  return (
    <div className="quicklistItem">
      {/* <button onClick={addQuicklist} className="tabButton" style={{backgroundColor:'#34A853',height:'30px', lineHeight:'30px'}}>+</button> */}
      <AddTabItem createTabItem={createTabItem} itemName={item} itemCost={cost} customerName={customerName}/>
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
