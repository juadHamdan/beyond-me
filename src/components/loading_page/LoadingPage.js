import "./LoadingPage.css";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingPage = ({
  show
}) => {

  return (
    <>
      <CSSTransition
        in={show}
        timeout={300}
        classNames={"loading"}
        unmountOnExit
      >
        <div class="loading-bg">
            <FontAwesomeIcon style={{fontSize: "3rem", color: 'white'}}icon={faSpinner} spin/>
        </div>
      </CSSTransition>
    </>
  );
};

LoadingPage.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default LoadingPage;
