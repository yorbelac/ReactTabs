import QuicklistItem from './QuicklistItem'

const TabsPanelQuicklist = ({quicklist, addQuicklist, removeQuicklist}) => {
  return (
<div className="quicklistPanel">
      <div className="quicklistHeader">Popular Menu Items</div>
      <div className="quicklist">
        {quicklist.map((entry) => (<QuicklistItem key={entry.id} item={entry.item} cost={entry.cost} addQuicklist={addQuicklist} removeQuicklist={removeQuicklist}/>))}
      </div>
    </div>
  )
}

export default TabsPanelQuicklist
