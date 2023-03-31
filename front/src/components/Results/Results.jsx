import "./Results.css";

export default function Results(props) {
  const answers = props.answers;
  const resultData = {
    total: answers.length,
    right: answers.filter((answer) => answer === true).length,
    wrong: answers.filter((answer) => answer === false).length,
  };

  resultData.accuracy = (resultData.right / resultData.total * 100).toFixed(2) + "%";

  console.log(resultData.total);
  console.log(resultData.right);
  console.log(resultData.wrong);

  return (
    <div className="card">
      {Object.entries(resultData).map(([key, val]) => (
        <h3 className="resultLine" key={key}>
          <span>{key}:</span>
          <span>{val}</span>
        </h3>
      ))}
    </div>
  );
}
