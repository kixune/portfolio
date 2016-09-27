var express = require('./config/express'),
    app     = express();

app.set('port', (process.env.PORT || 1337));

app.listen(app.get('port'), function() {
  console.log('loading...\nrunninon localhost:1337')
});
