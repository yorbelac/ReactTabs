import {useState} from 'react'
import {format, getDate} from 'date-fns'
import {FaTimes} from 'react-icons/fa'

const Test = () => {

  const [payment, setPayment] = useState('')
  const tab = 452.25
  const tax = (tab * 1.08) - tab
  const total = tab + tax
  const change = (total - payment)

  return (
    <>
      <div className="paymentBox">
        {/* //close button */}
        <FaTimes style={{float:'right', color: 'grey'}}/>
        {/* Customer Name Header */}
        <h2 className='receiptName'>Shane</h2>
        {/* Receipt Details */}
        {/* totals */}
        <div className='receiptDetails' style={{paddingRight:'10px',paddingLeft:'10px'}}>
          <div style={{textAlign:'left'}}>
            <b>Tab</b>
            <p>Tax</p>
            <b style={{fontSize:'1.2em', color:'#202020'}}>Total</b>
          </div>
          <div style={{textAlign:'right'}}>
            <b>${tab}</b>
            <p>${tax.toFixed(2)}</p>
            <b style={{fontSize:'1.2em', color:'#202020'}}>{total}</b>
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
        <form>
            <input 
              type="text" 
              placeholder="Enter payment amount."
              className='newCustomer' 
              style={{backgroundColor: 'white', width:'100%', textAlign:'center', fontSize:'1.2em', padding:'10px'}}
              value={payment} onChange={(e) => setPayment(e.target.value)}
            ></input>
            <div className='tabButton' style={buttonStyle}>CASH</div>
            <div className='tabButton' style={buttonStyle}>CREDIT</div>
        </form>
      </div>
    </>

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

export default Test
