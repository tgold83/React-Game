import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import ChooseCharacter from './ChooseCharacter'
import MenuPage from './MenuPage';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { db, auth } from './../firebase';
import StoryPage from './StoryPage';

function GameControl() {

  const [contentVisibleOnPage, setContentVisibleOnPage] = useState(false);
  const [error, setError] = useState(null);
  const [story, setStory] = useState(null);
  
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

const handleStartClick = () => {
  setContentVisibleOnPage(
    <ChooseCharacter
      onClick= {nextAction}/>
  )
}

const currentlyVisibleState = null;

if (error) {
  currentlyVisibleState = <p>There was an error:{error}</p>
} else if(story) {
  currentlyVisibleState = 
  <MenuPage 
    onClick= {handleStartClick}/>;
}





  return (
    <React.Fragment>
      {currentlyVisibleState}
      {contentVisibleOnPage}
      {/* {error ? null : <button onClick={handleClick}>Start Adventure</button>} */}
    </React.Fragment>
  );
}

export default GameControl;

//need handle option1/option2