import OrderDropdowns from './OrderDropdowns'
import OrderPayment from './OrderPayment'
import Quicklist from './Quicklist'

const PanelOrder = ({now, isSelected, customers, menu, addQuicklist, removeQuicklist,createTabItem}) => {
  return (
    <div className="tabOrderPanel">
      {isSelected ? 
        <><OrderDropdowns /><OrderPayment /><Quicklist
          now={now}
          customers={customers}
          menu={menu}
          addQuicklist={addQuicklist}
          removeQuicklist={removeQuicklist}
          createTabItem={createTabItem} />
        </>
      :
        <></>
      }
    </div>
  )
}

export default PanelOrder
