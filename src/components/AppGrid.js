import TabsPanelCustomers from './TabsPanelCustomers'
import TabsPanelTab from './TabsPanelTab'
import TabsPanelOrder from './TabsPanelOrder'

const AppGrid = ({today, quicklist, customers, selectCustomer, addCustomer, deleteCustomer, customerTab}) => {

    return (
        <div className='appGrid'>
            <div className='header'>
                <div className="headerTitle"><h1>TABS</h1></div>
            </div>
            <TabsPanelOrder 
                quicklist={quicklist}
            />  
            <TabsPanelCustomers 
                today={today} 
                customers={customers} 
                selectCustomer={selectCustomer}
                addCustomer={addCustomer} 
                deleteCustomer={deleteCustomer}
                customerTab={customerTab}
            />
            <TabsPanelTab 
                customers={customers}
                customerTab={customerTab}
            /> 
        </div>
  )
}

export default AppGrid
