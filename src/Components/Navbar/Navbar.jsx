import React from "react";
import Navbar_Content from "./Navbar-Content";
import BrandLogo from "./Brand-Logo";
import { connect } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { HandleHamburger } from "../../Redux/ActionCreators/BasicActions.Creators/HandleHamburger.ActionCreator";

function Navbar(props) {
  const { handleHamberger } = props;
  const handleClick = () => {
    handleHamberger();
  };

  return (
    <>
      <nav className="navbar-container">
        {/* brand logo */}
        <BrandLogo />
        {/* Content */}
        <Navbar_Content />
        {/* {mobile view} */}
        <button onClick={() => handleClick()} className="hamburger-btn">
          <BiMenu className="hamburger" />
        </button>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return state.BasicHandler;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleHamberger: () => dispatch(HandleHamburger()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
