const ButtonPayment = ({setPaymentMode}) => {

  const paymentMode = () => {
    setPaymentMode(true)
}

  return (
    <>
      <button onClick={paymentMode} className="tabButton" style={{fontSize:'3em', fontWeight:'600', lineHeight:'70px', backgroundColor:'#34A853'}}>$</button>
    </>
  )
}

export default ButtonPayment
