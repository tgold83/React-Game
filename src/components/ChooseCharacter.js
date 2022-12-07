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
        <button type='submit'>{props.buttonText}</button>
    {/* character images with onClick corresponding to background */}
     </form>
    </React.Fragment>
  )
}

ChooseCharacter.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ChooseCharacter;

//pick character name
//pick image, display img, create a checkbox that is assosciated w/ each img, 
//button to submit form