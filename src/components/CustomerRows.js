import CustomerRow from './CustomerRow'

const CustomerRows = () => {
  return (
    <div className="tabSelectRows">
        <CustomerRow name='Caleb' total='250.25'/>
        <CustomerRow name='Shane' total='475.50' paint='tabSelectRowActive'/>
        <CustomerRow name='Mikey' total='125.75'/>
        <CustomerRow name='Table 2' total='47.35'/>
        <CustomerRow name='Table 2' total='47.35'/>
        <CustomerRow name='Table 2' total='47.35'/>
    </div>
  )
}

export default CustomerRows
