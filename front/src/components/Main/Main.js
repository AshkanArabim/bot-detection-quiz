import TweetCard from "../TweetCard/TweetCard";
import ResponseButtons from "../ResponseButtons/ResponseButtons";

import './Main.css';
// import { getTweets } from "../scripts/database";
// import { sendFeedback } from "../scripts/database";

export default function Main() {
  return (
    <div id = 'main'>
      {/* tweet card */}
      <TweetCard tweetText="Placeholder tweet." />
      {/* response buttons */}
      <ResponseButtons />
      {/* feedback */}
    </div>
  );
}
