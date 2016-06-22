(function(module){
  var aboutController = {};

  aboutController.index = function() {
    $('#projectsHandle').hide();
    $('#home').hide();
    $('#about').show();

    console.log('calling repos.requestRepos');
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
