import {useState} from 'react'

const AddCustomer = ({addCustomer}) => {

    const [customerName, setCustomerName] = useState('')
    const [customerTotal, setCustomerTotal] = useState(0.00)
    const [customerSelected, setCustomerSelected] = useState(false)

    return (
        <form>
            <input className="newCustomer" type="text" placeholder='Type here to add new customer' value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            <input type='submit' className='buttonAddCustomer' value="+" onClick={addCustomer}/>
        </form>
  )
}

export default AddCustomer
