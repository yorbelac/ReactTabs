import TabsPanelCustomers from './TabsPanelCustomers'
import TabsPanelTab from './TabsPanelTab'
import TabsPanelOrder from './TabsPanelOrder'

const AppGrid = () => {

    return (
        <div className='appGrid'>
            <div className='header'>
            <div className="headerTitle"><h1>TABS</h1></div>
            </div>
            <TabsPanelOrder />  
            <TabsPanelCustomers />
            <TabsPanelTab />
 
        </div>
  )
}

export default AppGrid
