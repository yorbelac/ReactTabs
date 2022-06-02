import QuicklistItem from './QuicklistItem'

const Quicklist = ({isToday, customerName, menu, addQuicklist, removeQuicklist, createTabItem,taxRate}) => {
  
  return (
    <div className="quicklistPanel">
      <div className="quicklistHeader">Popular Menu Items</div>
      <div className="quicklist">
        {menu.map((entry) => (
          <QuicklistItem 
            isToday={isToday} 
            key={entry.id} 
            customerName={customerName}
            item={entry.item} 
            cost={entry.cost} 
            addQuicklist={addQuicklist} 
            removeQuicklist={removeQuicklist} 
            createTabItem={createTabItem}
            taxRate={taxRate}
          />
        ))}
      </div>
    </div>
  )
}

export default Quicklist
