import TabRow from './TabRow'

const PanelTab = ({customerTab}) => {
    return (
        <div className="tabPanel">
            <div className="tabHeader">
                <div className="tabHeaderName">Caleb Roy</div>
                <div className="tabHeaderTotal">$487.26</div>
            </div>
            <div className="tabRows">
                {customerTab.map((entry) => (<TabRow key={entry.id} date={entry.date} item={entry.item} total={entry.cost}/>))}  
            </div>
        </div>
    )
}

export default PanelTab
