import ProgressBar from "../ProgressBar/ProgressBar";
import TweetCard from "../TweetCard/TweetCard";
import ResponseButtons from "../ResponseButtons/ResponseButtons";

import "./Main.css";
// import { getTweets } from "../scripts/database";
// import { sendFeedback } from "../scripts/database";

export default function Main() {
  return (
    <div id="main">
      <ProgressBar percentage = '32'/>
      <TweetCard tweetText="Placeholder tweet." />
      <ResponseButtons />
      {/* feedback */}
    </div>
  );
}
