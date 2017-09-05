var mediaInformation = {
  photoSlides: [],
  lastPhoto: 0
}

var createMediaNavigation = function() {
  var $mediaNavigation = $('<div class="row media-navigation">').appendTo($('.main-container'));
  var $buttonRow = $('<div class="col-12 button-row">').appendTo($mediaNavigation);
  var $mediaToggle = $('<div class="col-4 col-m-4 media-nav-button" id="media-toggle">All</div>').appendTo($buttonRow);
  var $videoToggle = $('<div class="col-4 col-m-4 media-nav-button" id="video-toggle">Video</div>').appendTo($buttonRow);
  var $photoToggle = $('<div class="col-4 col-m-4 media-nav-button" id="photo-toggle">Photo</div>').appendTo($buttonRow);
}

var createMediaVideos = function() {
  var $videos = $('<div class="row videos">').appendTo($('.main-container'));
  var $videoRow = $('<div class="col-12 video-row">').appendTo($videos);
  for(let i in videosArray) {
    var $videoDiv = $('<div class="col-6 col-m-6 video-div">').appendTo($videoRow);
    var $video = $(`<iframe width="1280" height="720" class="video" src="${videosArray[i].url}" frameborder="0" allowfullscreen>`).appendTo($videoDiv);
    mediaResize();
    // console.log(videosArray[i].name);
    // console.log(videosArray[i].url);
  }
}

var createMediaPhotos = function() {
  var $photos = $('<div class="row photos">').appendTo($('.main-container'));
  var $photoRow = $('<div class="col-12 photo-row">').appendTo($photos);
}

var createMediaPage = function() {
  createMediaNavigation();
  createMediaVideos();
  mediaInformation.photoSlides = $('.photoSlide');
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
}

var displayViewer = function(number) {
  $(".photoRow .photo").click(function() {          // show viewer
    $(".viewer").show();
    displayPhoto(number);
  });
  $(".close").click(function() {          // hide viewer
    $(".viewer").hide();
  });
}

var displayPhoto = function(number) {
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
    if(mediaInformation.lastPhoto+1 < mediaInformation.photoSlides.length)  // make sure there is a next photo
      displayPhoto(mediaInformation.lastPhoto+1);
  });
  $(".previous").click(function() {
    if(mediaInformation.lastPhoto-1 >= 0)                  // make sure there is a previous photo
      displayPhoto(mediaInformation.lastPhoto-1);
  });
}
