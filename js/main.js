var webpageControl = {
  pages: ['home', 'media', 'projects', 'about'],
  currentPage: ''
}

function changeTitle(title) {
  $('head title').text(`${title} | Diego Jimenez`);
}

var createNavigationBar = function() {
  var $header = $('<header>').appendTo('body');
  var $topBanner = $('<div class="top-banner">').appendTo($header);
  var $navBar = $('<nav class="row">').appendTo($header);
  var $menuBar = $('<div class="col-12 menu-bar">').appendTo($navBar);
  var $menuIcon = $('<img class="menu-icon" id="menu" src="images/icons/menu.png" />').appendTo($menuBar);
  var $navigationButtons = $('<ul class="navigation-buttons" id="navigation">').appendTo($menuBar);
  for(let i of webpageControl.pages) {
    // $(`<li id="${i}"><b><a href="#">${i.toUpperCase()}</a></b></li>`).appendTo($navigationButtons);
    var label = i[0].toUpperCase();
    for(var letter = 1; letter < i.length; letter++) { label += i[letter]; }
    $(`<li id="${i}"><b><a class="navigation-button" href="#">${label}</a></b></li>`).appendTo($navigationButtons);
    $(`#${i}`).on('click', () => { changeContnet(i)})
  }
}

var createMainContainer = function() {
  $('<div class="row main-container">').appendTo('body');
}

var emptyMainContainer = function() {
  $('.main-container').empty();
}

var setCurrentPage = function(page) {
  for(let i of webpageControl.pages) {
    webpageControl.currentPage = i === page ? page : webpageControl.currentPage;
  }
}

var createLayout = function() {
  createNavigationBar();
  createMainContainer();
  createHomePage();
}

var changeContnet = function(page) {
  // if different page is selected
  if(webpageControl.currentPage !== page) {
    // empty contents of current page
    emptyMainContainer();

    // capitalize first letter of each label
    var label = page[0].toUpperCase();
    for(var letter = 1; letter < page.length; letter++) { label += page[letter]; }
    // run corresponding create page function
    eval(`create${label}Page()`);

    // set new current page
    webpageControl.currentPage = page;
  }
}

function resize() {
  mediaResize();
}

var run = function() {
  createLayout();

  $(window).on('resize', resize);
}

$(function() {
  console.log('main.js loaded');

  run();
})
