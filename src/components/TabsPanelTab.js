import TabRow from './TabRow'

const PanelTab = () => {
  return (
    <div className="tabPanel">
        <div className="tabHeader">
            <div className="tabHeaderName">Caleb Roy</div>
            <div className="tabHeaderTotal">$487.26</div>
        </div>
        <div className="tabRows">
            <TabRow item='Food-Tacos 4x' total='9.87' paint='tabRowToday'/>
            <TabRow item='Food-Chicken Masala' total='11.87' paint='tabRowToday'/>
            <TabRow item='Drinks-Soda $2' total='2.15' paint='tabRowToday'/>
            <TabRow/>
            <TabRow/>
            <TabRow/>
            <TabRow/>
            <TabRow/>
            <TabRow/>
            <TabRow/>
            <TabRow/>
            <TabRow/>
            <TabRow/>
        </div>
    </div>
)
}

export default PanelTab
