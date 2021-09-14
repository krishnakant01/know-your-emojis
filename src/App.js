import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😉": "winking",
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤔": "confused",
  "🤮": "puke",
  "🥱": "bored",
  "🤡": "clown",
  "😋": "yummy",
  "🥰": "smiling face with hearts",
  "😂": "laughing with tears of joy",
  "🤣": "rolling on the floor laughing",
  "🥺": "pleading face",
  "😵‍": "confused and exhausted",
  "😭": "crying",
  "😰": "anxious",
  "😪": "sleepy",
  "😙": "kissing face",
  "🤩": "star struck",
  "😘": "face blowing a kiss",
  "😜": "wink face with tongue",
  "🤪": "zany face",
  "😝": "laughing with tongue",
  "🤗": "hugging face",
  "🤐": "zipped/shut face",
  "🤫": "shushing face",
  "🤭": "smiling with habd over mouth",
  "🤑": "money minded face",
  "🤨": "suspicious",
  "😐": "expressionless face",
  "🙄": "eye rolling face",
  "😒": "unamused face",
  "😬": "grimacing face",
  "🤥": "lying face",
  "😶": "face without mouth",
  "😌": "calm face",
  "🤤": "drooling face",
  "😴": "sleepy face",
  "😷": "face with mask",
  "🤒": "face with thermometer",
  "🤕": "head bandage",
  "🤢": "nauseated",
  "🤧": "sneezing",
  "🥵": "hot face",
  "🥶": "cold face",
  "🥴": "woozy face",
  "🤯": "head exploding",
  "🥳": "partying face",
  "😎": "smiling with sunglasses",
  "🤓": "nerd face",
  "🤬": "abusing face",
  "😠": "angry face",
  "😫": "irritated face",
  "😡": "red hot angry face",
  "🤠": "cowboy hat face",
  "😲": "ashtonished",
  "🐭": "mouse face",
  "🐷": "pig face",
  "🦁": "lion face",
  "🐯": "tiger face",
  "🐶": "dog face",
  "🐱": "cat face",
  "🔥": "fire",
  "💛": "yellow heart",
  "💚": "green heart",
  "💙": "blue heart",
  "💜": "purple heart"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> know your emojis!!</h1>

      <input
        className="input-box"
        onChange={emojiInputHandler}
        placeholder="put your emoji here to know its meaning"
      ></input>

      <h2>{meaning}</h2>

      <h3> emojis we know </h3>
      <div style={{ width: "70%", margin: "auto", padding: "1rem" }}>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              className="emoji-span"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
