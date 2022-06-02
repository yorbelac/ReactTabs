import QuicklistItem from './QuicklistItem'

const Quicklist = ({isToday, customers, menu, addQuicklist, removeQuicklist, createTabItem}) => {
  
  const customerName = customers.filter((customer) => customer.selected === true)[0].name
  
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
          />
        ))}
      </div>
    </div>
  )
}

export default Quicklist
