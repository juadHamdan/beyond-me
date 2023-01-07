import './Input.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Input = ({
    type,
    placeHolder='',
    fullWidth = true,
    isRequired = false,
    isDisabled = false,
    onChange
}) => {
    const [showInputPopper, setShowInputPopper] = useState(false)

    return (
        <div class="input-container" style={{width: fullWidth ? '100%' : 'max-content'}}>
            {showInputPopper ? <div className={`popper ${type === "password" ? `popper-password` : ''}`}>{placeHolder} 
            {type === 'password' ? 
            " Must contain at least 8 or more characters, at least 1 number, 1 uppercase and lowercase letter." : ''}</div> : null}
            
            <input 
                disabled={isDisabled}
                required={isRequired}
                class={`input ${type === "number" ? `input-number` : ''}`}
                onChange={onChange}
                onFocus={() => setShowInputPopper(true)} 
                type={type} 
                pattern= {type === "password" ? "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" : null}
                placeholder={placeHolder} />
            <br/>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(["text", "number", "email", "password"]).isRequired,
    placeHolder: PropTypes.string,
    isRequired: PropTypes.bool,
    fullWidth: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func
}

export default Input;