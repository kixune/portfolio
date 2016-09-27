var  express        = require('express'),
     expressLayouts = require('express-ejs-layouts');

module.exports = function(){
  var app = express();


  app.set('view engine', 'ejs');
  app.use(expressLayouts);
  app.set('views', './app/views/');


  require('../app/routes/static.routes')(app);

  app.use(express.static('./public'));

  return app;

};
