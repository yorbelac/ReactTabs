import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

const CustomerRow = ({customer,selectCustomer,deleteCustomer}) => {

  return (
    <div className={`${customer.selected ? 'tabSelectRowActive':'tabSelectRow'}`}>
      <div className="tabSelectRowCheck">
        <input type="radio" name='customer' onChange={() => selectCustomer(customer.name)}/>
      </div>
      <div className="tabSelectRowName">{customer.name}</div>
      <div className="tabSelectRowTotal">${customer.total}</div>
      <div className='buttonContainer'>
        <button className='buttonRemoveCustomer'onClick={() => deleteCustomer(customer.name)}><FaTimes/></button>
      </div>        
    </div>
  )
}

CustomerRow.defaultProps = {
  name:'Name',
  total:'000.00',
}

CustomerRow.propTypes = {
  name: PropTypes.string,
  // total: PropTypes.number,
}

export default CustomerRow
