(function(module){
  var projectController = {};
  Project.fetchAll(articleView.initIndexPage);

  projectController.index = function() {
    $('#about').hide();
    $('#home').hide();
    $('#projectsHandle').show();
    $('#gitAbout').hide();
  };

  module.projectController = projectController;
})(window);
