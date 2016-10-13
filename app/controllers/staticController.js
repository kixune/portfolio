module.exports = {

  // Home Page
  index: function(req, res) {
    res.render('pages/index', {
        title: 'index'
    });
  },

  projects: function(req, res) {
    res.render('pages/projects', {
        title: 'ba la ba cha'
    });
  },

  // Secret Page
  secret: function(req, res) {
    res.render('pages/secret', {
        title: 'secret'
    });
  }


 };
