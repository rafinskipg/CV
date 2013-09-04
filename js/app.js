(function( $ , exports){

  exports.CV = function () {
    this.addBindings= function(){
    
      //Show the elements on the page
      $('ul.menu li').bind('click', function(e){
        e.preventDefault();
        var destination = $(this).find('a').attr('href');
        console.log(destination);
        if(!$(destination).hasClass('show')){
          $('#descriptions div.show').removeClass('show').addClass('hide');
          $(destination).removeClass('hide').addClass('show');
        }
      });
      
      //Make the descriptions fancy
      $('#experiments .experiment').hover(   function(){
        $(this).find('p').addClass('show');
      }, function(){
        $(this).find('p').removeClass('show');
      });
      
      //Show images on top
      $('#logo').hover(   function(){
        $('#logo').addClass('bg');
        $('.responsive-badge').addClass('show');
      }, function(){
        $('#logo').removeClass('bg');       
        $('.responsive-badge').removeClass('show');
      });
    }
  };
})( jQuery, window );

//Rafael Pedrola
$(document).ready(function(){
 var app = new CV();
 app.addBindings();
});