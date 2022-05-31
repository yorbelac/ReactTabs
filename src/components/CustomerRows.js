import CustomerRow from './CustomerRow'

const CustomerRows = ({customers,selectCustomer,deleteCustomer}) => {

  return (
    <div className="tabSelectRows">
      {customers.map((customer) => (
        <CustomerRow 
          key={customer.id} 
          customer={customer}
          selectCustomer={selectCustomer}
          deleteCustomer={deleteCustomer} 
        />
      ))}
    </div>
  )
}

export default CustomerRows