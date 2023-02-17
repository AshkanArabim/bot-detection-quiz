import ProgressBar from "../ProgressBar/ProgressBar";
import TweetCard from "../TweetCard/TweetCard";
import ResponseButtons from "../ResponseButtons/ResponseButtons";
import { database } from "../../scripts/database";

import "./Quiz.css";

export default function Quiz() {
  const tweets = database(); // tweets is an instance of database
  tweets.getTweets(8);
  console.log("This is quiz");
  let randomTweet = tweets.selectRandomTweet();

  return (
    <div id="Quiz">
      <ProgressBar percentage="32" />
      <TweetCard tweetText={randomTweet.content} />
      <ResponseButtons />
      <button>Next question</button>
      {/* feedback */}
    </div>
  );
}
