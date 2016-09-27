module.exports = {

  //Home Page
  index: function(req, res) {
       res.render('pages/index', {
         title: 'Home'
       }); //load the index.ejs file
  }

 };
