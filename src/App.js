import { useState } from "react";
import "./App.css";
import MoodDisplay from "./Mooddisplay";

function App() {
  const [mood, setMood] = useState(""); 

  return (
  
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div>
        <button class="happy" onClick={() => setMood("happy")}>Happy</button>
        <button class="sleepy" onClick={() => setMood("sleepy")}>Sleepy</button>
        <button class="hungry" onClick={() => setMood("hungry")}>Hungry</button>
        <button class="sad" onClick={() => setMood("sad")}>Sad</button>
      </div>
      <div className="mood">Mood: {mood || "None selected"}</div>
      <MoodDisplay mood={mood} />
    </div>
  );
}

export default App;
