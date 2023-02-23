import "./ResponseButtons.css";

export default function ResponseButtons(props) {
  let ans = "";
  function setAnswer(val) {
    console.log("Old value: " + ans);
    console.log("New value: " + val);
    ans = val;
  }

  return (
    <div id="responseRoot">
      <h3>Do you think this is bot-generated or a scam?</h3>

      <form
        onSubmit= {(e) => props.handleSubmit(e, ans)}
      >
        <label htmlFor="userResponseYes" className="btnStyle">
          <input
            onClick={() => setAnswer("yes")}
            type="radio"
            name="userResponse"
            id="userResponseYes"
          ></input>
          Yes
        </label>
        <label htmlFor="userResponseNo" className="btnStyle">
          <input
            onClick={() => setAnswer("no")}
            type="radio"
            name="userResponse"
            id="userResponseNo"
          ></input>
          No
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
