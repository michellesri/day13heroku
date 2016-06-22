function setRouteMappings(){
  page.base('/');

  page('home', homeController.index);
  page('about', aboutController.index);
  page('projects', projectController.index);

  page();
}

setRouteMappings();
