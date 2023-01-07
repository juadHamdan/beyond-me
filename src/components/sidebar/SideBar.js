import "./SideBar.css";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const SideBar = ({
  children,
  show,
  onClose,
  headerText = "Text",
  headerElement,
  rtl = false,
  footerText = "Click outside to close",
  backgroundColor = "#ba68c8",
  textColor = "black",
  transition = "slide",
  transitionTime = 300
}) => {
  const sidebarStyle = {
    textColor: textColor,
    background: backgroundColor,
    right: rtl ? '0' : ''
  };

  function handleOutsideClick(e) {
    if (e.target.className !== "sidebar") onClose();
  }

  return (
      <CSSTransition
        in={show}
        timeout={transitionTime}
        classNames= {`sidebar-${transition}${rtl && transition === 'slide' ? '-left' : '-right'}`}
        unmountOnExit
      >
        <div class="sidebar-bg" onClick={(e) => handleOutsideClick(e)}>
          <div class="sidebar" style={sidebarStyle}>

            <button class="close-btn" style={{textAlign: rtl ? 'left' : 'right'}} onClick={onClose}> x </button>

            {headerText ? <h1 class="header-text"> {headerText} </h1> : null }
            {headerElement ? <div class="header-element">{headerElement}</div>:null}

            <div class="component">
              {children}
            </div>

            {footerText ? <p class="footer"> {footerText} </p> : null }

          </div>
        </div>
      </CSSTransition>
  );
};

SideBar.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  rtl: PropTypes.bool,
  headerText: PropTypes.string,
  headerElement: PropTypes.element,
  footerText: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  transition: PropTypes.oneOf(["scale", "fade", "slide"]),
  transitionTime: PropTypes.number
};

export default SideBar;
