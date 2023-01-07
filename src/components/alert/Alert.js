import "./Alert.css";
import Progress from "../progress/Progress";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faExclamation, faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const Alert = ({
  show,
  timer,
  size = 'sm',
  onClose,
  style = "info",
  header = "Optional Header",
  text = "This is an alert.",
  textColor = 'black',
  backgroundColor,
  position = "top",
  transition = "scale",
  transitionTime = 300
}) => {

  const icons = {"info": faInfo, "error": faExclamation, "success": faCheck, "warning": faTriangleExclamation }

  const alertBGStyle = {
    top: position === "top" ? "0px" : '',
    bottom: position === "bottom" ? "0px": '',
  };

  const alertStyle = {
    width: size === "lg" ? "95%" : size === "md" ? "70%" : '',
    textColor: textColor,
    backgroundColor: backgroundColor ? backgroundColor : ""
  };

  return (
    <>
      <CSSTransition
        in={show}
        timeout={transitionTime}
        classNames={`alert-${transition}${transition === "slide" ? `-${position}` : ''}`}
        unmountOnExit
      >
        <div style={alertBGStyle} class="alert-container">
          <div style={alertStyle} className={`alert alert-${style}`}>
            <button className="close-btn" onClick={onClose}>
              x
            </button>
            <div class="alert-text">
              <FontAwesomeIcon style={{fontSize: "1.5rem", margin: "0 10px"}}icon={icons[style]}/>
              <p class="header"> {header} </p>
              <p class="text">{text}</p>
            </div>
            {timer ? 
              <Progress class="timer" timer={timer} activateProgress={show} onProgressComplete={onClose}/>
              : null}
            </div>
        </div>
      </CSSTransition>
    </>
  );
};

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  timer: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.oneOf(["info", "error", "warning", "success"]),
  transition: PropTypes.oneOf(["scale", "fade", "slide"]),
  position: PropTypes.oneOf(["top", "bottom"]),
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  transitionTime: PropTypes.number
};

export default Alert;
