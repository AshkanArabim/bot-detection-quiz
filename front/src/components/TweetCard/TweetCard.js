import './TweetCard.css'

export default function TweetCard(props) {
  return (
    <div className = 'tweetcard'>
      <h3>Tweet {props.tweetNum}</h3>
      {props.tweetText}
    </div>
  )
}