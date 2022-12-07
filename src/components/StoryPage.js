//give a story scenario
//link background image 
//2 buttons to control story options
//form with the story, maybe add a reusable form page and update text?
//image of character
//image of npc/villains as needed
import React from "react";
import PropTypes from "prop-types";


function StoryPage(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p>{props.gameText}</p>
        <button type='submit'class="option1">{props.button1}</button>
        <button type='submit' class="option2">{props.button2}</button>
      </form>
    </React.Fragment>
  );
}

StoryPage.propTypes = {
  formSubmissionHandler: PropTypes.func,
  gameText: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string
}

const sceneIntro = {
  gameText: "There is a cat. Do you pet him?",
  button1: 'Duh, Mama ain\'t raise no fool',
  button2: 'no'
};

const selectYes = {
  gameText: 'The cat loves you. do you take him home',
  button1: 'yes',
  button2: 'no'
};

const selectNo = {
  gameText: 'The cat is sad.',
  button1: 'Change your mind and pet cat',
  button2: 'Go home disappointed in your choices'
};


export default StoryPage;