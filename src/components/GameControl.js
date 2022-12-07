import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChooseCharacter from './ChooseCharacter'
import MenuPage from './MenuPage';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { db, auth } from './../firebase';
import StoryPage from './StoryPage';
import {Routes, Route, useNavigate} from 'react-router-dom';

function GameControl() {

  const navigate = useNavigate();

  const navigateToStory = () => {
    navigate('/StoryPage');
  };

  const handleStartClick = () => {
    setContentVisibleOnPage(
      <ChooseCharacter
        onClick= {navigateToStory}/>
    )
  }

  const [contentVisibleOnPage, setContentVisibleOnPage] = useState(<MenuPage onClick= {handleStartClick}/>);
  const [error, setError] = useState(null);
  const [story, setStory] = useState(true);
  const [turn, setTurn] = useState(null);
  
  useEffect(() => { 
    console.log("EFFECT works!");
    const unSubscribe = onSnapshot(
      collection(db, "story"), 
      (collectionSnapshot) => {
        const story = [];
        collectionSnapshot.forEach((doc) => {
          story.push({
            gameText: doc.data().gameText,
            button1: doc.data().button1,
            button2: doc.data().button2,
            id: doc.id
          });
      });
      setStory(story);
      }, 
      (error) => {
      setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  if (error) {
    contentVisibleOnPage = <p>There was an error:{error}</p>
  }

  function changePath(choices, choice) {
    if (choices.button1 == choice) {
      const options = choices.filter(choice => choice.turn == setTurn)
      const filteredOptions = options.filter(choice => choice.from == setTurn)

    }
  }


  return (
    <React.Fragment>
      {contentVisibleOnPage}
    </React.Fragment>
  );
}

export default GameControl;

//need handle option1/option2
// on change value, currentlySelected image