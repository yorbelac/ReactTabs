import CustomerRows from "./CustomerRows"

const PanelTabs = () => {

  //date
  var today = new Date();
  today = String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0') + '/' + today.getFullYear();

  return (
    <div className="tabSelectPanel">
      <div className="tabSelectHeader">
        <div className="tabSelectHeaderDate">{today}</div>
        <div className="tabSelectHeaderTotal">$425.47</div>
        <div className="tabSelectHeaderOrders">27</div>
      </div>
      <CustomerRows/>
      {/* new tab button */}
      <button className='buttonAddCustomer'>+</button>
    </div>
  )
}

export default PanelTabs
