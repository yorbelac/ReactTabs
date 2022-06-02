import PanelOrder from './tabs/PanelOrder'
import PanelCustomers from './tabs/PanelCustomers'
import PanelTabs from './tabs/PanelTabs'

const AppGrid = (props) => {

    return (
        <div className='appGrid'>
            <div className='header'>
                <div className="headerTitle"><h1>TABS</h1></div>
            </div> 
            <PanelCustomers 
                customers={props.customers} 
                selectCustomer={props.selectCustomer}
                addCustomer={props.addCustomer} 
                deleteCustomer={props.deleteCustomer}
                customerTab={props.customerTab}
            />
            <PanelTabs
                customers={props.customers}
                isSelected={props.isSelected}
                customerTab={props.customerTab}
            /> 
            <PanelOrder 
                now={props.now}
                isSelected={props.isSelected}
                customers={props.customers}
                menu={props.menu}
                createTabItem={props.createTabItem}
            /> 
        </div>
  )
}

export default AppGrid
