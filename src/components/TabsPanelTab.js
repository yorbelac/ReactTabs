import TabRows from './TabRows'

const TabsPanelTab = ({customers,customerTab}) => {

    //this area is just logic to check if there is a tab selected. if nothing was selected it would break when it checked for the a tabName. needed another layer of scope. Probably should just bring this up to the app.js level
    const isSelected = customers.filter((customer) => customer.selected === true).length > 0



    return (
        <div className="tabPanel">
            <div className="tabHeader">
                <div className="tabHeaderName">activeCustomer</div>
                <div className="tabHeaderTotal">$tabTotal.toFixed(2)</div>
            </div>
            {isSelected ?
                <TabRows customers={customers} customerTab={customerTab}/>
            :
                <p style={{color:"darkgrey", paddingLeft:'10px'}}>Nothing is selected.</p>
            }
        </div>
    )
}

export default TabsPanelTab
