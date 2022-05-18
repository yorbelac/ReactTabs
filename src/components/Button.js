import PropTypes from 'prop-types'

const Button = ({color, text, click}) => {

    return (
        <button 
            onClick={click}
            className="btn" 
            style={{backgroundColor: color}}>
                {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'button',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    click: PropTypes.func
}

export default Button
