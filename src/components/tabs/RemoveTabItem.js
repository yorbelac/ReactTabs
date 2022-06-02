import {useState} from 'react'
import {format} from 'date-fns'

const RemoveTabItem = ({createTabItem, itemName, itemCost, customerName,taxRate}) => {

    //this form needs to check if a tab is selected, and then compile a new object consisting of the date, name, itemName, itemCost, and whether is today or not (later deprecate)
    // const [name, setName] = useState('Shane')
    // const [date, setDate] = useState(new Date(Date()).getTime())
    const [today, setToday] = useState(true)

    const newEntry = () => {

        const date = new Date(Date()).getTime()
        const item = itemName
        const cost = itemCost * -1 * taxRate
        const name = customerName
        
        createTabItem({name, date, item, cost, today})
    }

    return (
        <button onClick={newEntry} className="tabButton" style={{backgroundColor:'#EA4335',height:'30px', lineHeight:'30px'}}>-</button>
    )
}

export default RemoveTabItem
