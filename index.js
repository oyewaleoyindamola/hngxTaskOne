const express = require("express");
const utcTime = require('./utcTime')

const app = express();


const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDay = days[new Date().getDay()];

app.get("/api", (request, response) => {
  response.status(200).json({
    slack_name: request.query.slack_name,
    track: request.query.track,
    current_day: currentDay,
    utc_time: utcTime(),
    github_file_url:
      "https://github.com/oyewaleoyindamola/hngxTaskOne",
    github_repo_url: "https://github.com/oyewaleoyindamola?tab=repositories",
    status: 200,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

