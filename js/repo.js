(function(module){
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.getJSON('/github/user/repos?per_page=50&sort=updated',
     function(json){
       repos.all = json;
       console.log('Repos.all ', repos.all);
       callback();
     });
  };

// filters the full collection of repos with a particular attribute
  repos.with = function(attr) {
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };
  module.repos = repos;
})(window);
