import CustomerRow from './CustomerRow'

const CustomerRows = ({customers,selectCustomer,deleteCustomer,customerTab}) => {

  return (
    <div className="tabSelectRows" style={{paddingLeft:'5px', paddingRight:'5px'}}>
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