import TweetCard from "./TweetCard";
import ResponseButtons from "./ResponseButtons";

export default function Main() {
  return (
    <div>
      <h3>Question x (placeholder)</h3>
      {/* tweet card */}
      <TweetCard tweetText = "Placeholder tweet" />
      {/* response buttons */}
      <ResponseButtons />
      {/* feedback */}
    </div>
  );
}
