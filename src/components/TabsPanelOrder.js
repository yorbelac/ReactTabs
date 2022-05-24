import TabsPanelOrderPayment from './TabsPanelOrderPayment'
import TabsPanelOrderDropdowns from './TabsPanelOrderDropdowns'
import TabsPanelQuicklist from './TabsPanelQuicklist'

const PanelTabOrder = () => {
  return (
    <div className="tabOrderPanel">
    <TabsPanelOrderDropdowns/>
    <TabsPanelOrderPayment/>
    <TabsPanelQuicklist/>
  </div>
  )
}

export default PanelTabOrder
