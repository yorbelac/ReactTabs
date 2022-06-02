import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import CustomerRows from "./CustomerRows"
import AddCustomer from "./AddCustomer"

const PanelCustomers = ({customers, selectCustomer, addCustomer, deleteCustomer, customerTab}) => {

  const today = format(new Date(Date()).getTime(), 'MM/dd/yyyy')

  return (
    <div className="tabSelectPanel">
      {/* header */}
      <div className="tabSelectHeader">
        <div className="tabSelectHeaderDate">{today}</div>
        <div className="tabSelectHeaderTotal">$N/A</div>
        <div className="tabSelectHeaderOrders">N/A</div>
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

export default PanelCustomers
