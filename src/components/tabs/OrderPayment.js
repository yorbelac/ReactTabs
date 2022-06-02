import ButtonPayment from './ButtonPayment'

const OrderPayment = ({customerName,createTabItem,setPaymentMode}) => {

  return (
    <div className="tabPaymentButtons">
      <ButtonPayment customerName={customerName} createTabItem={createTabItem} setPaymentMode={setPaymentMode}/>
      <button className="tabButton" style={{fontSize:'2em', lineHeight:'70px', backgroundColor:'#133e1f'}}>Tip</button>
      <button className="tabButton" style={{fontSize:'1.2em', lineHeight:'70px', backgroundColor:'#133e1f'}}>ToGo</button>
    </div>
  )
}

export default OrderPayment
