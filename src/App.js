import {useState} from 'react'
import { format } from 'date-fns'

import Test from './components/Test'
import NavPanel from './components/NavPanel'
import AppGrid from './components/AppGrid'


function App() {

  // variables
  const now = new Date(Date()).getTime()
  
  const author = 'Caleb Roy'
  const client = 'Jalal Alkhatib'
  const company = 'Bites & Pipes'
  const taxRate = 1.08
  
  const [customers, setCustomers] = useState([ 
    {
      name: 'Caleb',
      selected: false,
    },
    {
      name: 'Shane',
      selected: false,
    },
    {
      name: 'Mikey',
      selected: false,
    },
    {
      name: 'Steve',
      selected: false,
    }
  ])

  const [menu, setMenu] = useState([
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
    
  ])

  const isSelected = customers.filter((customer) => customer.selected === true).length > 0

  const selectCustomer = (name) => {
    setCustomers(
      customers.map((customer) => 
        customer.name === name ? { ... customer, selected: !customer.selected} : {... customer, selected: false}))
  }

  const createCustomer = (customer) => {
    const id = Math.floor(Math.random()* 10000) + 1
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

  const createTabItem = (entry) => {
    const id = Math.floor(Math.random()* 100000) + 1
    const newEntry = { id, ...entry }
    setCustomerTab([...customerTab, newEntry])
  }

  const deleteTabItem = (entry) => {
    const id = Math.floor(Math.random()* 100000) + 1
    const newEntry = { id, ...entry }
    setCustomerTab([...customerTab, newEntry])
  }

  // app
  return (
    <div className='container'>
      <NavPanel now={now} />
      <AppGrid
        now={now} 
        isSelected={isSelected}
        menu={menu} 
        taxRate={taxRate}
        customers={customers}
        selectCustomer={selectCustomer}
        addCustomer={createCustomer} 
        deleteCustomer={deleteCustomer}
        customerTab={customerTab} 
        createTabItem={createTabItem}
        deleteTabItem={deleteTabItem}
      />   
      {/* <Test/>  */}
    </div>
  );
}

export default App;
