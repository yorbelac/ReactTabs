import PropTypes from 'prop-types'
import AddTabItem from './AddQuicklistItem'
import RemoveTabItem from './RemoveQuicklistItem'

const QuicklistItem = ({now,isToday,customerName,item,cost,name,addQuicklist,removeQuicklist,createTabItem,taxRate}) => {

  return (
    <div className="quicklistItem">
      {/* <button onClick={addQuicklist} className="tabButton" style={{backgroundColor:'#34A853',height:'30px', lineHeight:'30px'}}>+</button> */}
      <AddTabItem 
        createTabItem={createTabItem} 
        itemName={item} 
        itemCost={cost} 
        customerName={customerName} 
        taxRate={taxRate}
      />
      <div className="quicklistItemName">{item}</div>
      <div className="quicklistItemPrice">${cost.toFixed(2)}</div>
      <RemoveTabItem 
        createTabItem={createTabItem} 
        itemName={item} 
        itemCost={cost} 
        customerName={customerName} 
        taxRate={taxRate}
      />
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
