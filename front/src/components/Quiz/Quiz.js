import React, { useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import TweetCard from "../TweetCard/TweetCard";
import ResponseButtons from "../ResponseButtons/ResponseButtons";
import { database } from "../../scripts/database";

import "./Quiz.css";

const tweets = database(); // tweets is an instance of database
const testLength = 8;
tweets.getTweets(testLength); // get a number of random tweets form database
const firstTweet = tweets.selectRandomTweet();

export default function Quiz() {
  const [tweet, setTweet] = useState(firstTweet);
  const [qNum, setQNum] = useState(0);
  const [score, setScore] = useState(0);

  function nextQuestion() {
    console.log("--- next question clicked ---");
    setTweet(tweets.selectRandomTweet());
    setQNum(qNum + 1);
  }

  function handleSubmit(e, ans) {
    e.preventDefault();
    if (ans === tweet.answer) {
      setScore(score + 1);
      console.log("Your answer: " + ans);
      console.log("Correct answer: " + tweet.answer);
      console.log("Answer is correct!!!");
    } else {
      console.log("answer is wrong!!!");
    }
  }

  return (
    <div id="Quiz">
      <ProgressBar percentage={(qNum / testLength) * 100} />
      <TweetCard tweetText={tweet.content} tweetNum={qNum} />
      <ResponseButtons handleSubmit={handleSubmit} />
      {/* feedback */}
    </div>
  );
}
