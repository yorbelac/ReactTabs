import TabRow from './TabRow'

const TabsPanelTab = ({customers,customerTab}) => {

    const selectedName = customers.filter((customer) => customer.selected === true)[0].name
    const activeTab = customerTab.filter((entry) => entry.name === selectedName)
    //totals the tab
    const tabTotal = ((activeTab.reduce((x,y) => x = x + y.cost, 0)))

    return (
        <div className="tabRows">
            {activeTab.map((entry) => (
                <TabRow 
                    key={entry.id} 
                    date={entry.date} 
                    item={entry.item} 
                    cost={entry.cost} 
                    today={entry.today}
                />
            ))} 
        </div> 
    )
}

export default TabsPanelTab
