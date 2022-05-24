import PropTypes from 'prop-types'

const CustomerRow = ({title,total}) => {
  return (
    <div className="tabSelectRow">
        <div className="tabSelectRowCheck"><input type="radio" name='customer'/></div>
        <div className="tabSelectRowName">{title}</div>
        <div className="tabSelectRowTotal">{total}</div>
        <button className='buttonRemoveCustomer'>-</button>
    </div>
  )
}

CustomerRow.defaultProps = {
  title:'Name',
  total:'000.00',
}

CustomerRow.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
}

export default CustomerRow
