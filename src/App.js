import {useState} from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import Test from './components/Test'
import NavPanel from './components/NavPanel'
import AppGrid from './components/AppGrid'


function App() {

  // variables
  const now = new Date(Date()).getTime()
  const today = format(new Date(Date()).getTime(), 'MM/dd/yyyy')
  
  const author = 'Caleb Roy'
  const client = 'Jalal Alkhatib'
  const company = 'Bites & Pipes'
  
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
        customer.name === name ? { ... customer, selected: true} : {... customer, selected: false}))
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
    //really all this needs to do is to add a new item with the cost inverted. Not remove from the tab. Simpler?
    console.log('delete tab item')
    // setCustomerTab(
    //   customerTab.map((entry) => 
    //     entry.id === name ? { ... customer, selected: false}:''))
    // setCustomers(
    //   customers.filter((customer) => customer.name !== name))
  }

  // app
  return (
    <div className='container'>
      <NavPanel now={now} />
      <AppGrid
        now={now} 
        isSelected={isSelected}
        menu={menu} 
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
