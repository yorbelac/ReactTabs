import Tab from './Tab'

const PanelTabs = ({customers,isSelected,customerTab}) => {

    //this checks if there is a tab selected. if nothing was selected it would break when it checked for the a tabName. needed another layer of scope. Probably should just bring this up to the app.js level

    return (
        <div className="tabPanel">
            {isSelected ?
                <Tab customers={customers} customerTab={customerTab} />
            :
                <>
                    <div className="tabHeader">
                        <div className="tabHeaderName">Customer</div>
                        <div className="tabHeaderTotal">$0.00</div>
                    </div>
                    <p style={{ color: "darkgrey", paddingLeft: '10px' }}>Nothing is selected.</p>
                </>
            }
        </div>
    )
}

export default PanelTabs
