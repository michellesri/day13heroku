(function(module){
  var homeController = {};

  homeController.index = function() {
    $('#about').hide();
    $('#home').show();
    $('#projectsHandle').hide();
    $('#gitAbout').hide();

  };

  module.homeController = homeController;
})(window);
