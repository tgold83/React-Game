//give a story scenario
//link background image 
//2 buttons to control story options
//form with the story, maybe add a reusable form page and update text?
//image of character
//image of npc/villains as needed
import React, { useState } from "react";
import PropTypes from "prop-types";


function StoryPage(props) {
  return (
    <React.Fragment>
      <h1>Story Page</h1>

      <form onSubmit={props.formSubmissionHandler}>
        <p>{props.gameText}</p>
        <button type='submit'class="option1">{props.button1}</button>
        <button type='submit' class="option2">{props.button2}</button>
      </form>
    </React.Fragment>
  );
}

// const [gameText, setGameText] = useState(null);
// const [button1, setButton1] = useState('Click');
// const [button2, setButton2] = useState('Click');

// function handleGameText(button1, button2) {
//   setGameText("There is a cat. Do you pet him?");
//   setButton1('Duh, Mama ain\'t raise no fool');
//   setButton2('no');
//   if (selectedButton = (button1)) {
//     return ( selectYes;
//   } else (selectedButton = (button2)){
//     //thing 2 happens here
//   }
// }

// handleClick = () => {
//   const selectedButton = //button here
//   selectedButton: //button
//   handleGameText(selectedButton)
// }

StoryPage.propTypes = {
  formSubmissionHandler: PropTypes.func,
  turn: PropTypes.string,
  path: PropTypes.string,
  from: PropTypes.string,
  gameText: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string
}

const sceneIntro = {
  turn: "0",
  path: "start",
  from: "null",
  gameText: "There is a cat. Do you pet him?",
  button1: 'Duh, Mama ain\'t raise no fool',
  button2: 'no'
};

const selectYes = {
  turn: "1",
  path: "left",
  from: "There is a cat. Do you pet him?",
  gameText: 'The cat loves you. do you take him home',
  button1: 'yes',
  button2: 'no'
};

const selectNo = {
  turn: "1",
  path: "right",
  from: "There is a cat. Do you pet him?",
  gameText: 'The cat is sad.',
  button1: 'Change your mind and pet cat',
  button2: 'Go home disappointed in your choices'
};


export default StoryPage;