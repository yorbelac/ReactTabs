import DropDownMenu from "./DropDownMenu"

const TabsPanelOrderDropdowns = () => {
  return (
    <div className="tabOrderMenu">
        <DropDownMenu/>
        <DropDownMenu/>
        <DropDownMenu/>
        <div className="tabOrderButtons">
            <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
            <div className="tabOrderTotal">$16.55</div>
            <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
        </div>
    </div>
  )
}

export default TabsPanelOrderDropdowns
