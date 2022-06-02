import OrderDropdowns from './OrderDropdowns'
import OrderPayment from './OrderPayment'
import Quicklist from './Quicklist'

const PanelOrder = ({now, customers, menu, addQuicklist, removeQuicklist, createTabItem,setPaymentMode,taxRate}) => {
  
  const customerName = customers.filter((customer) => customer.selected === true)[0].name

  return (
    <div className="tabOrderPanel">
          <OrderDropdowns />
          <OrderPayment 
            createTabItem={createTabItem}
            customerName={customerName} 
            setPaymentMode={setPaymentMode}
            taxRate={taxRate}
          />
          <Quicklist
            now={now}
            customerName={customerName}
            menu={menu}
            addQuicklist={addQuicklist}
            removeQuicklist={removeQuicklist}
            createTabItem={createTabItem} 
            taxRate={taxRate}/>
    </div>
  )
}

export default PanelOrder
