const port = 9000;
const fetchurl = `http://localhost:${port}`;

async function getTweets() {
  const response = await fetch(fetchurl + "/tweets", {
    method: "GET",
  });
  return response.json();
}

async function getRandomTweet() {
  return getTweets()
    .then()
  
}

async function sendFeedback(word, id) {
  const data = {
    word: word,
    id: id,
  };

  // DEBUG
  console.log(data);
  console.log(JSON.stringify(data));

  // send string to the backend.
  const response = await fetch(`${fetchurl}/response`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
}

export {getTweets, sendFeedback};