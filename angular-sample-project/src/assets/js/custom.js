$(document).ready(function(){
  $('#wrapper').on('click','.sidebar-button',function(){
    if ($("#wrapper").hasClass("collapse-menu")) {
      $("#wrapper").removeClass("collapse-menu");
    } else {
      $("#wrapper").addClass("collapse-menu");
    }
  });
})
