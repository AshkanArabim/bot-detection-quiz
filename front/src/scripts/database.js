import data from "./sampleData.json";

export const database = (function database() {
  let tweetsNotAccessed = data.tweets;
  let selectedTweets;

  // returns a list of a specific number of random tweets from data
  function getTweets(quantity = 10) {
    selectedTweets = [];
    for (let i = 0; i < quantity; i++) {
      let randomIndex = randInt(tweetsNotAccessed.length);
      selectedTweets.push(tweetsNotAccessed[randomIndex]);
      delete tweetsNotAccessed[randomIndex];
    }
  }

  // choose one random tweet from the saved list, return it, and pop it from the list
  function selectRandomTweet() {
    let randomIndex = randInt(selectedTweets.length);
    let randomTweet = selectedTweets[randomIndex];
    delete selectedTweets[randomIndex];
    console.log(selectedTweets);
    return randomTweet;
  }
  // returns a random integer
  function randInt(upperBound) {
    return Math.floor(Math.random() * upperBound);
  }

  return {
    getTweets,
    selectRandomTweet,
  };
});
