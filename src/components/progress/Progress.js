import './Progress.css'
import PropTypes from "prop-types";
import {useEffect, useState} from 'react'
    
const Progress = ({
    activateProgress = false, 
    timer, 
    refreshRateMS = 10, 
    value, 
    border, 
    label,
    labelPosition = "right",
    bufferValue, 
    onProgressComplete = () => {},
    backgroundColor = "inherit", 
    color = "black", 
    height = 10 
}) => {

    const [percentage, setPrecentage] = useState(0)

    const progressBGStyle = {
        border: border ? `1px solid ${color}` : null,
        height: `${height}px`,
        backgroundColor: backgroundColor
    }

    const progressStyle = {
        backgroundColor: color,
        height: `${height}px`, 
        width: value? `${value}%` : `${percentage}%`
    }

    const bufferStyle = {
        backgroundColor: color,
        opacity: 0.25,
        height: `${height}px`, 
        width: bufferValue? `${bufferValue}%` : null
    }

    useEffect(() => {
        if(timer && activateProgress){
            if(percentage >= 100){
                setPrecentage(100);
                clearInterval(x);
            }
            // Update percentage every intervalDelay milli seconds
            var x = setInterval(() => {
                setPrecentage(percentage => Math.min(100, percentage + (refreshRateMS / (timer * 10))));

                }, refreshRateMS);
        }
    }, [activateProgress])


    return (
        <div className={`progress-container ${labelPosition === "left" ? "label-left" : "label-right"}`}>
            {percentage === 100? onProgressComplete() : null}
            {label ? <label className="label" style={{color: color}}>{label}</label> : null}
            <div class="progress-bg" style={progressBGStyle}>
                <div class="buffer-progress" style={bufferStyle}></div>
                <div class="progress" style={progressStyle}></div>
            </div>
        </div>
    )
}

Progress.propTypes = {
    timer: PropTypes.number,
    refreshRateMS: PropTypes.number,
    value: PropTypes.number,
    bufferValue: PropTypes.number,
    activateProgress: PropTypes.bool,
    border: PropTypes.bool,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(["left", "right"]),
    onProgressComplete: PropTypes.func,
  };
  

export default Progress;