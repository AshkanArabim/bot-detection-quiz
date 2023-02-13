import './Score.css'

export default function Score(props) {
  return (
    <h3>
      {`Score: ${props.num}/${props.total}`}
    </h3>
  )
}