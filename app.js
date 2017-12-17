const mongoose = require('mongoose');

// get the vars from private env
require('dotenv').config({ path: 'private.env' });

// connect to mongoose
// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
// mongoose.connection.on('error', err => {
//   console.error(`🚫 ☠️ 🚫 → ${err.message}`);
// });

// import any models here..
// i.e. require('./models/User');

// K now lets start the app up..
const app = require('./server');

app.set('port', process.env.PORT || 8080);
const server = app.listen(app.get('port'), () => {
  console.log(`✅  App has launched! PORT → ${server.address().port}`);
});

// and off we go..
