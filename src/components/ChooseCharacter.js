import React from "react";
import PropTypes from "prop-types";

function ChooseCharacter(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name Your Character' />
        <button onClick={props.onClick}>Save</button>
    {/* character images with onClick corresponding to background */}
     </form>
    </React.Fragment>
  )
}

ChooseCharacter.propTypes = {
  formSubmissionHandler: PropTypes.func,
}

export default ChooseCharacter;

//pick character name
//pick image, display img, create a checkbox that is assosciated w/ each img, 
//button to submit form