import './ToolTip.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group";

const ToolTip = ({
    children,
    text = '',
    top = 0,
    left = 0,
    right = 0,
    bottom = 0,
    action = "hover",
    element = null,
    backgroundColor = "white",
    transition = "fade",
    transitionTime = 200
}) => {
    const [show, setShow] = useState(false);

    const tooltipStyle = {
        position: 'absolute',
        backgroundColor: backgroundColor,
        top: top ? `${top}rem` : '',
        bottom: bottom ? `${bottom}rem`: '',
        right: right ? `${right}rem` : '',
        left: left ? `${left}rem` : '',
    }

    return (
        <div>
            <div 
                style={{position: "relative"}}
                onMouseEnter={() => action === 'hover' ? setShow(true) : null}
                onMouseLeave={() => action === 'hover' ? setShow(false) : null}
                onClick={() => action === 'click' ? setShow(!show) : null}
            >
                <div>{children}</div>
                <CSSTransition
                    in={show}
                    timeout={transitionTime}
                    classNames={`tooltip-${transition}`}
                    unmountOnExit
                >
                    <div style={tooltipStyle} class="tooltip">
                        {text}
                        {text && element ? <br/> : null}
                        {element}{' '}
                    </div> 
                </CSSTransition>
            </div>
        </div>
    )
}

ToolTip.propTypes = {
    text: PropTypes.string,
    action: PropTypes.oneOf(["click", "hover"]),
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    element: PropTypes.element,
    backgroundColor: PropTypes.string,
    transition: PropTypes.oneOf(["fade", "scale"]),
    transitionTime: PropTypes.number
};

export default ToolTip;