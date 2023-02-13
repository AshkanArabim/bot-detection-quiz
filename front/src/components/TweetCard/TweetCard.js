import './TweetCard.css'

export default function TweetCard(props) {
  return (
    <div class = 'tweetcard'>
      <h3>Question x (placeholder)</h3>
      {props.tweetText}
    </div>
  )
}