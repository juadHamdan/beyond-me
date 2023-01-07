import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  disabled = false,
  fullWidth = false,
  onClick = () => {},
  size = "md",
  style = "basic",
  display = "inline",
  textColor = "black",
  backgroundColor = "#ffa726",
}) => {
  const buttonStyle = {
    display: display,
    cursor: disabled ? 'default' : '',
    border: style === 'outline' ? `1px solid ${backgroundColor}` : '',
    width: fullWidth ? '100%' : '',
    textColor: textColor,
    backgroundColor: style === 'outline' || style === 'text' ? 'transparent' : backgroundColor,
    fontSize: size === "lg" ? "1.5rem" : size === "md" ? "1.25rem" : "",
    padding: style === 'pill' ? '5px 15px' : size === "lg" ? "10px" : size === "md" ? "7.5px" : "",
  };

  return (
    <button 
      onClick={() => disabled ? null : onClick()}
      style = {buttonStyle} 
      className={`btn btn-${style} ${disabled ? 'disabled' : null}`}
      disabled={disabled}
      >
        {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  style: PropTypes.oneOf(["outline", "text", "basic", "pill"]),
  display: PropTypes.oneOf(["inline", "block"]),
  onClick: PropTypes.func
};

export default Button;
