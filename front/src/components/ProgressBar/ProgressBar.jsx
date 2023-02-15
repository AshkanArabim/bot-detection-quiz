import './ProgressBar.css';

export default function ProgressBar(props) {
  return (
    <div>
      <progress id = 'testProgress' value = {props.percentage} max='100'>{props.percentage}</progress>
    </div>
  )
}