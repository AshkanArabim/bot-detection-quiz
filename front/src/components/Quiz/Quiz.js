import React, { useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import TweetCard from "../TweetCard/TweetCard";
import ResponseButtons from "../ResponseButtons/ResponseButtons";
import Feedback from "../feedback/Feedback";
import { database } from "../../scripts/database";

import "./Quiz.css";
import Results from "../Results/Results.jsx";

const tweets = database(); // tweets is an instance of database
const testLength = 3; // how many questions to import from database
tweets.getTweets(testLength); // get a number of random tweets form database
const firstTweet = tweets.selectRandomTweet();

export default function Quiz() {
  const [tweet, setTweet] = useState(firstTweet);
  const [qNum, setQNum] = useState(0);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  // declare varialbe for user answers
  const [answers, setAnswers] = useState(Array(testLength).fill(null));

  // DEBUG
  console.log(tweet)

  function nextQuestion() {
    console.log("--- next question clicked ---");
    setTweet(tweets.selectRandomTweet());

    setQNum(qNum + 1);
    setIsSubmitted(false);
    setIsCorrect(false);
  }

  function handleSubmit(e, ans) {
    e.preventDefault();
    let isCorrectDuplicate = false;

    if (ans === tweet.answer) {
      setIsCorrect(true);
      isCorrectDuplicate = true;
      setScore(score + 1);
    }

    // update answer array 
    console.log("isCorrect: ")
    let newAns = [...answers];
    newAns[qNum] = isCorrectDuplicate;
    setAnswers(newAns)
    console.log(isCorrectDuplicate)

    setIsSubmitted(true);
  }

  // if there are not questions left, display result
  const output = (tweet === undefined) ? (
    <div id="Quiz">
      <Results answers = {answers}></Results>
      {/* restart button */}
      
    </div>
  ) : (
    <div id="Quiz">
      <ProgressBar answers = {answers} />
      <TweetCard tweetText={tweet.content} tweetNum={qNum + 1} />
      <ResponseButtons
        handleSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      />

      {/* This only shows when the test is submitted */}

      {isSubmitted && <Feedback isCorrect={isCorrect}></Feedback>}
      {isSubmitted && (
        <button onClick={nextQuestion}>Next Tweet</button>
      )}
    </div>
  )

  return output;
}
