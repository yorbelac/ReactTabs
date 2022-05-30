import TabsPanelOrderPayment from './TabsPanelOrderPayment'
import TabsPanelOrderDropdowns from './TabsPanelOrderDropdowns'
import TabsPanelQuicklist from './TabsPanelQuicklist'

const TabsPanelOrder = ({quicklist, addQuicklist, removeQuicklist}) => {
  return (
    <div className="tabOrderPanel">
    <TabsPanelOrderDropdowns/>
    <TabsPanelOrderPayment/>
    <TabsPanelQuicklist 
      quicklist={quicklist} 
      addQuicklist={addQuicklist} 
      removeQuicklist={removeQuicklist}
    />
  </div>
  )
}

export default TabsPanelOrder
