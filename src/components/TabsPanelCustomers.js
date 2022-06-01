import CustomerRows from "./CustomerRows"
import AddCustomer from "./AddCustomer"

const TabsPanelCustomers = ({today, customers, selectCustomer, addCustomer, deleteCustomer, customerTab}) => {

  return (
    <div className="tabSelectPanel">
      {/* header */}
      <div className="tabSelectHeader">
        <div className="tabSelectHeaderDate">{today}</div>
        <div className="tabSelectHeaderTotal">$237.04</div>
        <div className="tabSelectHeaderOrders">18</div>
      </div>
      {/* customers */}
      <CustomerRows 
        customers={customers} 
        selectCustomer={selectCustomer} 
        deleteCustomer={deleteCustomer}
        customerTab={customerTab}
      />
      <AddCustomer newCustomer={addCustomer}/>
    </div>
  )
}

export default TabsPanelCustomers
