import {useState} from 'react'

import PanelOrder from './tabs/PanelOrder'
import PanelCustomers from './tabs/PanelCustomers'
import PanelTabs from './tabs/PanelTabs'
import PaymentModule from './PaymentModule'

const AppGrid = (props) => {

    const [paymentMode, setPaymentMode] = useState(false)

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
            {props.isSelected ? 
            <>
                <PanelTabs
                    customers={props.customers}
                    customerTab={props.customerTab}
                /> 
                {paymentMode ? 
                    <PaymentModule 
                        createTabItem={props.createTabItem}
                        customers={props.customers}
                        customerTab={props.customerTab}
                        setPaymentMode={setPaymentMode}
                        taxRate={props.taxRate}
                    />
                : 
                    <PanelOrder 
                        now={props.now}
                        customers={props.customers}
                        menu={props.menu}
                        createTabItem={props.createTabItem}
                        setPaymentMode={setPaymentMode}
                        taxRate={props.taxRate}
                    /> 
                }
            </>
            :
            <>
                <p style={{ color: "grey", paddingLeft: '10px' }}>Nothing is selected.</p>
            </>
            }

        </div>
  )
}

export default AppGrid
