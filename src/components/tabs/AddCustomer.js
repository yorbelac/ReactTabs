import {useState} from 'react'

const AddCustomer = ({newCustomer}) => {

    const [name, setName] = useState('')
    const [selected, setSelected] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please enter a name.')
            return
        }
        newCustomer({name, selected})

        setName('')
        // setTotal('')
        // setSelected('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input className="newCustomer" type="text" placeholder='Type here to add new customer' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='submit' className='buttonAddCustomer' value="+"/>
        </form>
  )
}

export default AddCustomer
