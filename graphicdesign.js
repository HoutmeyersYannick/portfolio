var main = function () {
  "use strict";
}

$("document").ready(function(){
	function gallery(navigation,pictures){  
  
      var navi = $(navigation);
      var fotos = $(pictures);
      var activeClass = 'activenav'; 
    
      navi.find('li:first').addClass(activeClass);
      fotos.find('li:not(:first)').hide();
     
      navi.find('li').on('mouseover click', function(){
      
        var activePic = $(this);
        var childNumber = activePic.index() + 1;
         
        activePic
          .addClass(activeClass)
          .siblings()
          .removeClass(activeClass);
        
        fotos
          .find('li:nth-child(' + childNumber + ')')
          .stop(true, true).fadeIn()
          .siblings().hide();  
        
      });
  } 
  

  gallery('.navi','.fotos');
});