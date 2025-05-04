const express = require('express');
const moment = require('moment-timezone');

const app = express();
const PORT = 3000;

app.get('/gettime', (req, res) => {
  const timezones = moment.tz.names();
  const timezoneData = {};

  timezones.forEach((tz) => {
    timezoneData[tz] = moment().tz(tz).format();
  });

  res.json(timezoneData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
