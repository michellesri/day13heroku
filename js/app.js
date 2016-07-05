(function(module) {
  Project.all = [];

  var articleView = {};
// use OOP
  function Project(object) {
    this.name = object.name;
    this.location = object.location;
    this.experience = object.experience;
    this.gear = object.gear;
  }

  Project.prototype.toHtml = function(){
    var template = Handlebars.compile($('#project-template').text());
    return template(this);
  // var $newProject = $('.projects').clone();
  // $newProject.removeClass('projects');
  // $newProject.find('h2').text(this.name);
  // $newProject.find('#one').text(this.location);
  // $newProject.find('#two').text(this.experience);
  // $newProject.find('#three').text(this.gear);
  // return $newProject;

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

  articleView.handleAuthorFilter = function() {
    $('#filter1').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-author="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#category-filter').val('');
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

// i am going to wrap everything into an IFFE in order to expose the module to the window object.
// remove these comments later
//
// function handleMainNav() {
//   $('.main-nav').on('click', '.tab', function(e){
//     $('.tab-content').hide();
//     $('#' + $(this).data('content')).fadeIn();
//   });
//   $('.main-nav .tab:first').click();
//
// }
//
// handleMainNav();
