import TabRow from './TabRow'

const Tab = ({now,customers,customerTab}) => {

    const selectedName = customers.filter((customer) => customer.selected === true)[0].name
    const activeTab = customerTab.filter((entry) => entry.name === selectedName).sort((x,y) => y.date - x.date)
    const tabTotal = ((activeTab.reduce((x,y) => x = x + y.cost, 0)))

    return (
        <>
            <div className="tabHeader">
                <div className="tabHeaderName">{selectedName}</div>
                <div className="tabHeaderTotal">${tabTotal.toFixed(2)}</div>
            </div>
            <div className="tabRows">
                {activeTab.map((entry) => (
                    <TabRow 
                        now={now}    
                        key={entry.date} 
                        date={entry.date} 
                        item={entry.item} 
                        cost={entry.cost} 
                        today={entry.today}
                    />
                ))} 
            </div> 
        </>
    )
}

export default Tab
