import React from "react";

function MoodDisplay({ mood }) {
  const moods = {
    happy: "Keep smiling 😊",
    sad: "It's okay to be sad sometimes 💙",
    excited: "Let's celebrate 🎉",
    angry: "Take a deep breath 😌",
  };

  return (
    <div>
      {mood ? <p>{moods[mood]}</p> : <p>Select a mood to see a message!</p>}
    </div>
  );
}

export default MoodDisplay;
