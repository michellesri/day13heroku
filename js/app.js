(function(module) {
  Project.all = [];

  var articleView = {};

  function Project(object) {
    this.name = object.name;
    this.location = object.location;
    this.experience = object.experience;
    this.gear = object.gear;
  }

  Project.prototype.toHtml = function(){
    var template = Handlebars.compile($('#project-template').text());
    return template(this);

  };

  Project.loadAll = function(projectData) {
    Project.all = projectData.map(function(ele){
      return new Project(ele);
    });
  };

  Project.fetchAll = function(){
    if(localStorage.projectData) {
      console.log('i am being logged through the local storage if statement');

      var projParse = JSON.parse(localStorage.projectData);
      Project.loadAll(projParse);
      articleView.initIndexPage();
    }
    else {
      console.log('getjson branch');

      $.getJSON('data.json').done(myFunction);
      function myFunction(data) {
        Project.loadAll(data);
        localStorage.projectData = JSON.stringify(Project.all);
        articleView.initIndexPage();
      }
    }
  };

  articleView.initIndexPage = function() {
    Project.all.forEach(function(a){
      $('#projectsHandle').append(a.toHtml());
    });
  };

  module.Project = Project;
  module.articleView = articleView;
  var arr = [1,2,3];
  var x = arr.reduce(function(a,b){
    return a + b;
  });
  console.log(x);
})(window);
