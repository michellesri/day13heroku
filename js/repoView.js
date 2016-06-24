(function(module) {
  $('#repo-template').hide();
  $('#gitAbout').hide();

  var repoView = {};

  var ui = function(){
    var $gitAbout = $('#gitAbout');

    $gitAbout.find('ul').empty();
    $gitAbout.show().siblings();
  };

  var render = Handlebars.compile($('#repo-template').html());
  console.log('render: ', render);

  repoView.index = function(){
    ui();

    $('#gitAbout ul').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;

})(window);
