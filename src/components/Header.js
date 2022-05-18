import PropTypes from 'prop-types'
import Button from './Button.js'

//this is the component
const Header = (props) => {

    const run = () => {
        console.log('clicked')
    }

  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <Button text='hiya' color='green' click={run}/>
    </header>
  )
}

//setting default properties
Header.defaultProps = {
    title: "Tabs:",
    subtitle: "Tracking Customer Tabs",
}

//setting default property types
Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

const headingStyles = {
    color: 'red',
    backgroundColor: 'black',
}

export default Header
