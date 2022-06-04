import {useState} from 'react'
import {FaTimes} from 'react-icons/fa'

const PaymentModule = ({customers,customerTab,createTabItem,setPaymentMode,taxRate}) => {

  const [payment, setPayment] = useState('')

  const paymentMode = () => {
    setPaymentMode(false)
}

  const date = new Date(Date()).getTime()  
  const name = customers.filter((customer) => customer.selected === true)[0].name
  const thisTab = customerTab.filter((entry) => entry.name === name)
  const total = ((thisTab.reduce((x,y) => x = x + y.cost, 0)))
  const tax = total - (total/(taxRate))
  const tab = total - tax
  const change = (total - payment)


  const newCashEntry = (e) => {

    e.preventDefault()

    const item = 'Cash'
    const cost = payment * -1

    createTabItem({name, date, item, cost})

    setPayment(0)
  }

  const newCreditEntry = () => {

    const item = 'Credit'
    const cost = payment * -1

    createTabItem({name, date, item, cost})

    setPayment(0)
  } 

  const makeChange = () => {
    if (total < 0) {
      const date = new Date(Date()).getTime()  
      const item = 'Change'
      const cost = total * -1  
      createTabItem({name, date, item, cost})
    }
  }

  return (
    <div>

      {/* paymentBox */}
      <div className="paymentBox">
        {/* //close button */}
        <FaTimes style={{float:'right', color: 'grey'}} onClick={paymentMode}/>
        {/* Customer Name Header */}
        <h2 className='receiptName'>{name}</h2>

        {/* Receipt Details */}
        {/* totals */}
        <div className='receiptDetails' style={{paddingRight:'10px',paddingLeft:'10px'}}>
          <div style={{textAlign:'left'}}>
            <b>Tab</b>
            <p>Tax</p>
            <b style={{fontSize:'1.2em', color:'#202020'}}>Total</b>
          </div>
          <div style={{textAlign:'right'}}>
            <b>${tab.toFixed(2)}</b>
            <p>${tax.toFixed(2)}</p>
            <b style={{fontSize:'1.2em', color:'#202020'}}>{total.toFixed(2)}</b>
          </div>
        </div>
        {/* payment */}
        <div className='receiptDetails' style={{paddingRight:'10px',paddingLeft:'10px'}}>
          <div style={{textAlign:'left'}}>
            <b>Payment</b>
            <p>{change > 0 ? 'Balance':'Change'}</p>
          </div>
          <div style={{textAlign:'right'}}>
            <b>${payment < 1 ? '0.00':payment}</b>
            <p>${change > 0 ? change.toFixed(2):change.toFixed(2)*-1}</p>
          </div>
        </div>

        {/* payment form */}
        <form onSubmit={newCashEntry}>
            <input 
              type="text" 
              placeholder="Enter payment amount."
              className='newCustomer' 
              style={{backgroundColor: 'white', width:'100%', textAlign:'center', fontSize:'1.2em', padding:'10px'}}
              value={payment} onChange={(e) => setPayment(e.target.value)}
            ></input>
            <div type='submit' onClick={newCashEntry} className='tabButton' style={buttonStyle}>CASH</div>
            <div onClick={newCreditEntry} className='tabButton' style={buttonStyle}>CREDIT</div>
            {total < 0 ?
            <div onClick={makeChange} className='tabButton' style={buttonStyle}>Give Change</div>
            :
            <></>
            }            
        </form>

      </div>
    </div>
  )
}

const buttonStyle = {
  marginTop:'10px', 
  backgroundColor:'green', 
  padding:'10px',
  borderRadius: '5px',
  fontSize: '1em',
  fontFamily: 'poppins',
  boxShadow: '0px 3px 5px -3px grey',
  fontWeight: 500,
}

export default PaymentModule
