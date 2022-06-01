import CustomerRow from './CustomerRow'

const CustomerRows = ({customers,selectCustomer,deleteCustomer,customerTab}) => {

  return (
    <div className="tabSelectRows">
      {customers.map((customer) => (
        <CustomerRow 
          key={customer.id} 
          customer={customer}
          selectCustomer={selectCustomer}
          deleteCustomer={deleteCustomer}
          customerTab={customerTab} 
        />
      ))}
    </div>
  )
}

export default CustomerRows