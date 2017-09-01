var webpageControl = {
  pages: ['home', 'media', 'projects', 'about'],
  currentPage: '',
  home: {},
  media: {
    photoSlides: '',
    lastPhoto: 0
  },
  projects: {},
  about: {}
}

// var information = {
//   profileInformation: 'Software Engineer at Capital One<br>BS in Technology & Information Management<br>Minor in Computer Science'
// }

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

// var createHomePage = function() {
//   var $profileImageContainer = $('<div class="col-12 col-m-12" id="profile-image-container">').appendTo($('.main-container'));
//   var $profileImage = $('<img class="photo", id="profile-image" src="./images/profile.jpg">').appendTo($profileImageContainer);
//   var $profileInfoContainer = $('<div class="col-12 col-m-12" id="profile-info-container">').appendTo($('.main-container'));
//   var $profileInfo = $(`<div class="info" id="about-info"><i>${information.profileInformation}</i></div>`).appendTo($profileInfoContainer);
//   setCurrentPage('home');
//   console.log(webpageControl.currentPage);
//   // setCurrentPage('home')
// }

var createMediaPage = function() {

}

var createProjectsPage = function() {}

var createAboutPage = function() {}

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

    eval(`create${label}Page()`);

    // set new current page
    webpageControl.currentPage = page;
  }
}

var run = function() {
  createLayout();
}

$(function() {
  console.log('main.js loaded');

  run();
})
