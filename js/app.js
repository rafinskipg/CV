(function( $ , exports){

  exports.CV = function () {
    this.addBindings= function(){
      $('ul.menu li').bind('click', function(e){
        e.preventDefault();
        var destination = $(this).find('a').attr('href');
        console.log(destination);
        if(!$(destination).hasClass('show')){
          $('#descriptions div.show').removeClass('show').addClass('hide');
          $(destination).removeClass('hide').addClass('show');
        }
      });
      
      $('#experiments .col-md-4').hover(   function(){
      
        $(this).find('p').addClass('show');
      }, function(){
        $(this).find('p').removeClass('show');
      });
      
       $('#logo').hover(   function(){
      
        $('#logo').addClass('bg');
        
      }, function(){
        $('#logo').removeClass('bg');
      });
    }
  };
})( jQuery, window );


$(document).ready(function(){
 var app = new CV();
 app.addBindings();
});