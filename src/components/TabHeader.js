const TabHeader = () => {

  //this needs logic to calculate active tab names and totals, or could just include this in the tabRows, but need an alternate everything for if not render because none selected.

  return (
    <div className="tabHeader">
      <div className="tabHeaderName">activeCustomer</div>
      <div className="tabHeaderTotal">$tabTotal.toFixed(2)</div>
    </div>
  )
}

export default TabHeader
