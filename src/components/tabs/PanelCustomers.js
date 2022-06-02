import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import CustomerRows from "./CustomerRows"
import AddCustomer from "./AddCustomer"

const PanelCustomers = ({customers, selectCustomer, addCustomer, deleteCustomer, customerTab}) => {

  const today = format(new Date(Date()).getTime(), 'MM/dd/yyyy')
  const activeTab = customerTab.filter((entry) => format(entry.date, 'MM/dd/yyyy') === today).sort((x,y) => y.date - x.date)
  const tabTotal = ((activeTab.reduce((x,y) => x = x + y.cost, 0)))
  const tabCount = activeTab.length

  return (
    <div className="tabSelectPanel">
      {/* header */}
      <div className="tabSelectHeader">
        <div className="tabSelectHeaderDate">{today}</div>
        <div className="tabSelectHeaderTotal">${tabTotal.toFixed(2)}</div>
        <div className="tabSelectHeaderOrders">{tabCount}</div>
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
