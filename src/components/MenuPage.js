import React from "react";
import PropTypes from "prop-types";
// import background img

function MenuPage(props){

  return(
    <React.Fragment>
      <h1>Mouse Epic Code-us: A Choose Your Own Adventure Game</h1>
      <button onClick={props.onClick}>Start Your Adventure</button>
    </React.Fragment>
      
  )
}

export default MenuPage;