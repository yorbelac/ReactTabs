import CustomerRows from "./CustomerRows"
import AddCustomer from "./AddCustomer"

const TabsPanelCustomers = ({today, customers, selectCustomer, addCustomer, deleteCustomer}) => {

  return (
    <div className="tabSelectPanel">
      {/* header */}
      <div className="tabSelectHeader">
        <div className="tabSelectHeaderDate">{today}</div>
        <div className="tabSelectHeaderTotal">$425.47</div>
        <div className="tabSelectHeaderOrders">27</div>
      </div>
      {/* customers */}
      {customers.length > 0 ? 
        <CustomerRows 
          customers={customers} 
          selectCustomer={selectCustomer} 
          deleteCustomer={deleteCustomer}
        />
      : 
        <p style={{color: 'grey'}}>Click + to add a customer.</p>}
      <AddCustomer newCustomer={addCustomer}/>
    </div>
  )
}

export default TabsPanelCustomers
