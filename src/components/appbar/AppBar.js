import "./AppBar.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ToolTip from "../tooltip/ToolTip";
import Button from'../button/Button';


const AppBar = ({
  menuItems,
  leftElement,
  rightElement,
  direction = "ltr",
  backgroundColor = "#ba68c8",
  textColor = "black",
}) => {
  const appbarStyle = {
    textColor: textColor,
    background: backgroundColor,
    direction: direction,
  };

  return (
    <div class="appbar" style={appbarStyle}>
        <ToolTip action="click" top={5} element={menuItems} style={{position: 'absolute'}}>
          <div class="icon-container">
              <FontAwesomeIcon icon={faBars}/>
          </div>
        </ToolTip>

        <div class="elements">
          <div class="left-element">
            {leftElement}
          </div>

          <div class="right-element">
            {rightElement}
          </div>
        </div>
    </div>
  );
};

AppBar.propTypes = {
  menuItems: PropTypes.element.isRequired,
  rightElement: PropTypes.element,
  leftElement: PropTypes.element,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  direction: PropTypes.oneOf(["rtl", "ltr"])
};

export default AppBar;
