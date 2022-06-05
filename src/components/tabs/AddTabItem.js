import {useState} from 'react'
import {format} from 'date-fns'

const AddTabItem = ({createTabItem, itemName, itemCost, customerName,taxRate}) => {

    //this form needs to check if a tab is selected, and then compile a new object consisting of the date, name, itemName, itemCost, and whether is today or not (later deprecate)
    // const [name, setName] = useState('Shane')
    // const [date, setDate] = useState(new Date(Date()).getTime())

    const newEntry = () => {

        const date = new Date(Date()).getTime()
        const item = itemName
        const cost = (itemCost * taxRate)
        const name = customerName

        createTabItem({name, date, item, cost})
    }

    return (
        <button onClick={newEntry} className="tabButton" style={{backgroundColor:'#34A853',height:'60px', lineHeight:'60px'}}>+</button>
    )
}

export default AddTabItem
