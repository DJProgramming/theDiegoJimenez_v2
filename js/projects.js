function insertToShowcase(label, project) {
  var $showcase = $(`<div class=col-12 col-m-12 showcase"><h1>${label}</h1>${project}`).appendTo($('.main-container'));
}

var createProjectsPage = function() {
  changeTitle('Projects');
  for(let i in projects) insertToShowcase(projects[i].label, projects[i].project);
  insertToShowcase('More to come...', null);
}
