require("dotenv").config();
const schedule = require("node-schedule");

const utils = require("./src/utils");
const availabilityCheck = require("./src/checkAvailability");
const stats = {
  totalRuns: 0,
  lastRun: "never",
};

schedule.scheduleJob("*/5 * * * *", function () {
  const time = new Date();
  console.log("run check at " + new Date());
  stats.totalRuns++;
  stats.lastRun = time;
  availabilityCheck.runAvailabilityCheck();
});

schedule.scheduleJob("0 9 * * *", function () {
  utils.sendUpdate({
    text: `Total runs: ${stats.totalRuns}\nLast run at: ${stats.lastRun}`,
  });
});
