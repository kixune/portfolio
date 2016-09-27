module.exports = function(app) {
  var staticController = require('../controllers/staticController');

  //Home Page
  app.get('/', staticController.index);

};
