import TabRow from './TabRow'

const PanelTabs = ({now,customers,customerTab}) => {

    const selectedName = customers.filter((customer) => customer.selected === true)[0].name
    const activeTab = customerTab.filter((entry) => entry.name === selectedName).sort((x,y) => y.date - x.date)
    const tabTotal = ((activeTab.reduce((x,y) => x = x + y.cost, 0)))
    const empty = (activeTab.length === 0)

    return (
        <div className="tabPanel">
            <div className="tabHeader">
                <div className="tabHeaderName">{selectedName}</div>
                <div className="tabHeaderTotal">${tabTotal.toFixed(2)}</div>
            </div>
            <div className="tabRows">
                {empty ? 
                <>
                    <p style={{ color: "grey", paddingLeft: '10px' }}>Tab is empty.</p>
                </>
                :
                <>
                    {activeTab.map((entry) => (
                        <TabRow 
                            now={now}    
                            key={entry.id} 
                            date={entry.date} 
                            item={entry.item} 
                            cost={entry.cost} 
                            today={entry.today}
                        />
                    ))}
                </>
                }
            </div> 
        </div>
    )
}


export default PanelTabs
