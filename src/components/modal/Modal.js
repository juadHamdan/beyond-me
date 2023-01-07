import "./Modal.css";
import { CSSTransition } from "react-transition-group";
import * as PropTypes from "prop-types";

const Modal = ({
  children,
  show,
  onClose,
  header,
  text,
  size = "sm",
  backgroundColor = "#ffa726",
  textColor = "black",
  transition = "scale",
  transitionTime = 300
}) => {
  const modalStyle = {
    textColor: textColor,
    background: backgroundColor,
    width: size === "lg" ? "80%" : size === "md" ? "50%" : "",
    height: size === "lg" ? "60%" : size === "md" ? "40%" : ""
  };

  function handleOutsideClick(e) {
    if (e.target.className !== "modal") onClose();
  }

  return (
    <>
      <CSSTransition
        in={show}
        timeout={transitionTime}
        classNames={`modal-${transition}`}
        unmountOnExit
      >
        <div class="modal-bg" onClick={(e) => handleOutsideClick(e)}>
          <div class="modal" style={modalStyle}>
            <button class="close-btn" onClick={onClose}>
              x
            </button>
            {header ? <p class="header"> {header} </p> : null }
            {text ? <p class="text">{text}</p> : null}
            
            {children ? 
            <div class="element">
              {children}
            </div>
            : null}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool.isRequired,
  transition: PropTypes.oneOf(["scale", "fade", "slide"]),
  transitionTime: PropTypes.number,
  text: PropTypes.string,
  header: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;