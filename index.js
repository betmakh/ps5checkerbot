const cypress = require('cypress');
const schedule = require('node-schedule');


schedule.scheduleJob('*/5 * * * *', function(){
    console.log('run cypress at ' + new Date())
    cypress.run({
        quiet: true,
        config: {
            video: false
          },
    })
  });