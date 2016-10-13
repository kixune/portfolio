module.exports = function(app) {
  var staticController = require('../controllers/staticController');


  app.get('/', staticController.index);
  app.get('/projects', staticController.projects);
  app.get('/cabin', staticController.secret);
};
