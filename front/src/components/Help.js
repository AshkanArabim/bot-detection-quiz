export default function Help() {
  function showHelp() {
    alert(
      "You will see a series of random tweets. Try your best to decide whether they are genuine or bot-generated content."
    );
  }

  return (
    <div>
      <button onClick={showHelp}>Click for help.</button>
    </div>
  );
}
