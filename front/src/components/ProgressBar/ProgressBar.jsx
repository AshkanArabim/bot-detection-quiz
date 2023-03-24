import "./ProgressBar.css";
// we will only use the array of user answers from props

// define progressBar function
export default function ProgressBar(props) {
  console.log(props);

  return (
    <div className="progressBar">
      {
        // more divs based on length of props.answers
        props.answers.map(
          // assign the class name based on whether question is right, wrong, or unanswered
          (answer, idx) => (
            <div
              key={idx}
              className={
                answer
                  ? "correct"
                  : answer === false
                  ? "incorrect"
                  : "unanswered"
              }
            ></div>
          )
        )
      }
    </div>
  );
}
