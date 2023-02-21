import React, { useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import TweetCard from "../TweetCard/TweetCard";
import ResponseButtons from "../ResponseButtons/ResponseButtons";
import { database } from "../../scripts/database";

import "./Quiz.css";

const tweets = database(); // tweets is an instance of database
const testLength = 8;
tweets.getTweets(testLength);
export default function Quiz() {
  const [tweet, setTweet] = useState(tweets.selectRandomTweet()); // initialize with a random prompt
  const [qNum, setQNum] = useState(0);

  console.log("runs on render");
  
  // DEBUG: This runs too many times!!!
  function nextQuestion() {
    // choose next random tweet

    // call child updater instead
    console.log("--- next question clicked ---")
    setTweet(tweets.selectRandomTweet());
    setQNum(qNum + 1);
  }

  return (
    <div id="Quiz">
      <ProgressBar percentage= {qNum / testLength * 100} />
      <TweetCard tweetText={tweet.content} />
      <ResponseButtons />
      <button onClick={nextQuestion}>Next question</button>
      {/* feedback */}
    </div>
  );
}
