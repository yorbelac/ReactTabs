import {useState} from 'react'
import Test from './components/Test'
import NavPanel from './components/NavPanel'
import AppGrid from './components/AppGrid'

function App() {

  // variables
  var today = new Date(); today = String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0') + '/' + today.getFullYear();
  const author = 'Caleb Roy'
  const client = 'Jalal Alkhatib'
  const company = 'Bites & Pipes'
  
  const [customers, setCustomers] = useState([ 
    {
      id: 1,
      name: 'Caleb',
      total: 250.47,
      selected: false,
    },
    {
      id: 2,
      name: 'Shane',
      total: 450.47,
      selected: false,
    },
    {
      id: 3,
      name: 'Mikey',
      total: 150.47,
      selected: false,
    },
    {
      id: 4,
      name: 'Steve',
      total: 50.47,
      selected: false,
    }
  ])

  const [quicklist, setQuicklist] = useState([
    {
      id:1,
      item:'Beer (Premium)',
      cost:3.50,
    },
    {
      id:2,
      item:'Shot',
      cost:5.00,
    },
    {
      id:3,
      item:'Mixed Drink',
      cost:6.00,
    },
    {
      id:4,
      item:'Soda (Premium)',
      cost:3.00,
    },
    {
      id:5,
      item:'Soda (Regular)',
      cost:2.00,
    },
    {
      id:6,
      item:'Beer (Regular)',
      cost:3.00,
    },
    {
      id:7,
      item:'Hookah Special',
      cost:10.00,
    },
    {
      id:8,
      item:'Hookah Al Fakher',
      cost:12.99,
    },
    {
      id:9,
      item:'Tea',
      cost:5.00,
    },
    {
      id:10,
      item:'Chicken Masala',
      cost:10.99,
    }
  ])

  const [customerTab, setCustomerTab] = useState([
    {
      id: 1,
      name:'Mikey',
      date: '5/10/2022',
      item: 'Food-Chicken-Masala',
      cost: 10.99,
      today: true,
    },
    {
      id: 2,
      name:'Shane',
      date: '5/10/2022',
      item: 'Hookah-10',
      cost: 10.00,
      today: true,
    },
    {
      id: 3,
      name:'Caleb',
      date: '5/10/2022',
      item: 'Drinks-Soda (Regular)',
      cost: 2.00,
      today: false,
    },
    {
      id: 4,
      name:'Shane',
      date: '5/10/2022',
      item: 'Gyro Sandwich',
      cost: 10.99,
      today: true,
    },
    {
      id: 5,
      name:'Caleb',
      date: '5/10/2022',
      item: 'Beer-Premium',
      cost: 3.50,
      today: false,
    },
    {
      id: 6,
      name:'Shane',
      date: '5/10/2022',
      item: 'Beer-Premium',
      cost: 3.50,
      today: false,
    },
    {
      id: 7,
      name:'Shane',
      date: '5/10/2022',
      item: 'Beer-Premium',
      cost: 3.50,
      today: false,
    },
  ])

  const selectCustomer = (name) => {
    setCustomers(
      customers.map((customer) => 
        customer.name === name ? { ... customer, selected: true} : {... customer, selected: false}))
  }

  const createCustomer = (customer) => {
    const id = Math.floor(Math.random()* 10000) + 1
    console.log(customer)
    const newCustomer = { id, ...customer }
    setCustomers([...customers, newCustomer])
  }

  const deleteCustomer = (name) => {
    setCustomers(
      customers.map((customer) => 
        customer.name === name ? { ... customer, selected: false}:''))
    setCustomers(
      customers.filter((customer) => customer.name !== name))
  }
  
  // app
  return (
    <div className='container'>
      <NavPanel />
      <AppGrid 
        today={today} 
        quicklist={quicklist} 
        customers={customers}
        selectCustomer={selectCustomer}
        addCustomer={createCustomer} 
        deleteCustomer={deleteCustomer}
        customerTab={customerTab} 
      />   
      {/* <Test/>  */}
    </div>
  );
}

export default App;
