module.exports = function(app) {
  var staticController = require('../controllers/staticController');

  app.get('/', staticController.index);
};
