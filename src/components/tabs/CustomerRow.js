import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

const CustomerRow = ({customer,selectCustomer,deleteCustomer,customerTab}) => {

  const thisTab = customerTab.filter((entry) => entry.name === customer.name)
  const tabTotal = ((thisTab.reduce((x,y) => x = x + y.cost, 0)))

  return (
    <div className={`${customer.selected ? 'tabSelectRowActive':'tabSelectRow'}`}>
      <div className="tabSelectRowCheck"  onClick={() => selectCustomer(customer.name)}>
      </div>
      <div className="tabSelectRowName"  onClick={() => selectCustomer(customer.name)}>{customer.name}</div>
      <div className="tabSelectRowTotal"  onClick={() => selectCustomer(customer.name)}>${tabTotal.toFixed(2)}</div>
      <div className='buttonContainer'>
        <button className='buttonRemoveCustomer'onClick={() => deleteCustomer(customer.name)}><FaTimes/></button>
      </div>        
    </div>
  )
}

CustomerRow.defaultProps = {
  name:'Name',
  total:'00.00',
}

CustomerRow.propTypes = {
  name: PropTypes.string,
  // total: PropTypes.number,
}

export default CustomerRow
