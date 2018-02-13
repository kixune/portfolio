const smooth = 'smooth';
console.log(smooth);

// Taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      var targetOffset = target.offset().top - $('nav').outerHeight(true);


      if (target.length) {
        $('html, body').animate({
          scrollTop: targetOffset
        }, 700);
        return false;
      }
    }
  });
});
