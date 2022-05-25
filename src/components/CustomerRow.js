import PropTypes from 'prop-types'

const CustomerRow = ({paint,name,total}) => {
  return (
    <div className={paint}>
        <div className="tabSelectRowCheck"><input type="radio" name='customer'/></div>
        <div className="tabSelectRowName">{name}</div>
        <div className="tabSelectRowTotal">${total}</div>
        <div className='buttonContainer'>
          <button className='buttonRemoveCustomer'>-</button>
        </div>
        
    </div>
  )
}

CustomerRow.defaultProps = {
  paint: 'tabSelectRow',
  name:'Name',
  total:'000.00',
}

CustomerRow.propTypes = {
  name: PropTypes.string,
  total: PropTypes.number,
}

export default CustomerRow
