const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

//Add a New Feature
//Using the “get compliment” feature and code as an example, create a new feature that
//allows the user to get a random fortune, similar to the kind you would see in a
//fortune cookie. There are some great ideas for fortunes here. You should include
//at least 5 possible fortunes.

//This feature needs to include JavaScript code on the front-end to handle the
//button click event, as well as JavaScript (Node) code on the back end to handle
//the request for a fortune and producing an appropriate HTTP response.

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A golden egg of opportunity falls into your lap this month.",
    "All will go well with your new project.",
    "An inch of time is an inch of gold.",
    "At the touch of love, everyone becomes a poet.",
  ];

  // choose random compliment
  let index = Math.floor(Math.random() * fortunes.length);
  let cookieFortune = fortunes[index];

  res.status(200).send(cookieFortune);
});



app.get("/api/question", (req, res) => {
  const questions = [
    "They are called fortune cookies, because each cookie breaks open to reveal a small slip of paper — a fortune — with a prediction for the future, a wise saying, a Chinese word or phrase with its translation, or even a list of lucky numbers.",
    "The fortune cookie likely arrived in the United States along with Japanese immigrants who came to Hawaii and California between the 1880s and early 1900s, after the Chinese Exclusion Act's expulsion of Chinese workers left a demand for cheap labor. ",
    "While the origin of the fortune cookie is a little murky, it is strongly believed to have begun in Japan, not China",
  ];

  // choose random compliment
  let index = Math.floor(Math.random() * questions.length);
  let questionFortune = questions[index];

  res.status(200).send(questionFortune);
});


app.listen(4000, () => console.log("Server running on 4000"));
