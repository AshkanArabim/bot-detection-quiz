export default function TweetCard(props) {
  return (
    <div className = 'card'>
      <h3>Tweet {props.tweetNum}</h3>
      {props.tweetText}
    </div>
  )
}