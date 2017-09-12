var mediaInformation = {
  photoSlides: [],
  lastPhoto: 0
}

var createMediaNavigation = function() {
  var $mediaNavigation = $('<div class="row media-navigation">').appendTo($('.main-container'));
  var $buttonRow = $('<div class="col-12 button-row">').appendTo($mediaNavigation);
  var $mediaToggle = $('<div class="col-4 col-m-4 media-display-button" id="media-toggle">All</div>').appendTo($buttonRow);
  var $videoToggle = $('<div class="col-4 col-m-4 media-display-button" id="video-toggle">Video</div>').appendTo($buttonRow);
  var $photoToggle = $('<div class="col-4 col-m-4 media-display-button" id="photo-toggle">Photo</div>').appendTo($buttonRow);

  $('.media-display-button').on('click', (button) => {
    // button.target.id is the id of the clicked button
    switch (button.target.id) {
      case 'media-toggle':
        if($('.videos').css('display') === 'none') $('.videos').slideDown(1000);
        if($('.photos').css('display') === 'none') $('.photos').slideDown(1000);
        break;
      case 'video-toggle':
        if($('.videos').css('display') === 'none') $('.videos').slideDown(1000);
        if($('.photos').css('display') !== 'none') $('.photos').slideUp(1000);
        break;
      case 'photo-toggle':
        if($('.videos').css('display') !== 'none') $('.videos').slideUp(1000);
        if($('.photos').css('display') === 'none') $('.photos').slideDown(1000);
        break;
      default:
    }
  });
}

var createMediaVideos = function() {
  var $videos = $('<div class="row videos">').appendTo($('.main-container'));
  var $videoRow = $('<div class="col-12 video-row">').appendTo($videos);
  for(let i in videosArray) {
    var $videoDiv = $('<div class="col-6 col-m-6 video-div">').appendTo($videoRow);
    var $video = $(`<iframe width="1280" height="720" class="video" src="${videosArray[i].url}" frameborder="0" allowfullscreen>`).appendTo($videoDiv);
    // mediaResize();
  }
  mediaResize();
}

var createMediaPhotos = function() {
  var $photos = $('<div class="row photos">').appendTo($('.main-container'));

  for(let i in photosArray) {
    if(i%3 === 0) var $photoRow = $('<div class="col-12 photo-row">').css('display', 'flex').appendTo($photos);

    var $photoDiv = $(`<div class="col-4 col-m-4 photo-div" id="photo-div-${i}">`).appendTo($photoRow);
    var $photo = $(`<img class="photo" id="photo-${i}" src="${photosArray[i].url}">`).appendTo($photoDiv);

    $photo.on('click', displayViewer);
  }
  mediaResize();
}

function createMediaViewer() {
  var $viewer = $('<div class="viewer viewer-m">').appendTo($('.main-container'));
  var $close = $('<div class="close">close</div>').appendTo($viewer);
  var $mediaViewer = $('<div class="photo-viewer-box">').appendTo($viewer);
  var $navButtons = $('<div class="media-nav-buttons">').appendTo($mediaViewer);
  var $previous = $('<button class="previous media-nav-button"><</button>').appendTo($navButtons);
  var $next = $('<button class="next media-nav-button">></button>').appendTo($navButtons);
  for(let i in photosArray) {
    var $photoSlide = $('<div class="photo-slide">').appendTo($mediaViewer);
    var $photo = $(`<img class="photo" src="${photosArray[i].url}">`).appendTo($photoSlide);
  }
}

var createMediaPage = function() {
  changeTitle('Media');
  createMediaNavigation();
  createMediaVideos();
  createMediaPhotos();
  createMediaViewer();
  mediaInformation.photoSlides = $('.photo-slide');
  displayViewer();
  navigate();
}

function mediaResize() {
  // if the window width is greater than 1000px make sure that video width does not exceed 500px
  var videoCellWidth = $(window).width() < 1000 ? $(window).width() / 2 : 500;
  // if the window width is less than 600px make video width 100% of the window
  videoCellWidth = $(window).width() > 600 ? videoCellWidth : $(window).width();
  $('.video-div').css('width', `${videoCellWidth}px`).css('height', `${videoCellWidth * 9 / 16}`);
  $('iframe').css('width', '100%').css('height', '100%');

  if($(window).width() < 600) {
    $('.photo-row').css('display', 'inline');
  }
}

var displayViewer = function() {
  $(".photo-row .photo").click(function() {          // show viewer
    $(".viewer").show();
    // var number = Number(this.id.split('-')[1]);
    displayPhoto(Number(this.id.split('-')[1]));
  });
  $(".close").click(function() {          // hide viewer
    $(".viewer").hide();
  });
}

var displayPhoto = function(number) {
  console.log('display photo');
  $(mediaInformation.photoSlides[mediaInformation.lastPhoto]).hide();
  $(mediaInformation.photoSlides[number]).show();
  mediaInformation.lastPhoto = number;
  // alert(lastPhoto);
  if(mediaInformation.lastPhoto-1 >= 0) {
    $(".previous").show();
  } else {
    $(".previous").hide();
  }
  if(mediaInformation.lastPhoto+1 < mediaInformation.photoSlides.length) {
    $(".next").show();
  } else {
    $(".next").hide();
  }
}

// navigate to next or previous photo
var navigate = function() {
  $(".next").click(function() {
    console.log('clicked');
    if(mediaInformation.lastPhoto+1 < mediaInformation.photoSlides.length)  // make sure there is a next photo
      displayPhoto(mediaInformation.lastPhoto+1);
  });
  $(".previous").click(function() {
    if(mediaInformation.lastPhoto-1 >= 0)                  // make sure there is a previous photo
      displayPhoto(mediaInformation.lastPhoto-1);
  });
}
