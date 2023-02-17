import "./ResponseButtons.css";

export default function ResponseButtons() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="responseRoot">
      <h3>Do you think this is bot-generated or a scam?</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="userResponseYes" className="btnStyle">
          <input type="radio" name="userResponse" id="userResponseYes"></input>
          Yes
        </label>
        <label htmlFor="userResponseNo" className="btnStyle">
          <input type="radio" name="userResponse" id="userResponseNo"></input>
          No
        </label>
      </form>
    </div>
  );
}
