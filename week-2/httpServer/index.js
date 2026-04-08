const express = require("express");
const users = require("./db/users");
const port = 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;

  const numberOfHealthyKidneys = johnKidneys.filter(
    (kidney) => kidney.healthy,
  ).length;

  const numberOfUnhealthyKidneys = johnKidneys.filter(
    (kidney) => !kidney.healthy,
  ).length;

  res.status(200).json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.healthy;

  users[0].kidneys.push({
    healthy: isHealthy,
  });

  // console.log(req.body);
  // console.log(typeof req.body.healthy);

  res.status(200).json({
    msg: isHealthy ? "Healthy kidney added" : "Unhealthy kidney added",
  });
});

app.put("/", (req, res) => {
  if (users[0].kidneys.filter((kidney) => !kidney.healthy).length === 0) {
    return res.status(411).json({
      msg: "No unhealthy kidneys to update",
    });
  }

  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  // console.log(users[0].kidneys);

  res.status(200).json({
    msg: "All kidneys are now healthy.",
  });
});

app.delete("/", (req, res) => {
  if (users[0].kidneys.filter((kidney) => !kidney.healthy).length === 0) {
    return res.status(411).json({
      msg: "No unhealthy kidneys to delete",
    });
  }

  let removedKidneys = [];
  // for (let i = 0; i < users[0].kidneys.length; i++) {
  //   if (users[0].kidneys[i].healthy) {
  //     removedKidneys.push({
  //       healthy: true,
  //     });
  //   }
  // }
  users[0].kidneys.filter((kidney) => kidney.healthy);
  users[0].kidneys = removedKidneys;

  res.status(200).json({
    msg: "Unhealthy kidneys deleted.",
  });
});

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
