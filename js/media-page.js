var photoSlides;
var lastPhoto = 0;

var main = function() {
  photoSlides = document.getElementsByClassName("photoSlide");
  displayViewer();
  navigate();
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
  $(photoSlides[lastPhoto]).hide();
  $(photoSlides[number]).show();
  lastPhoto = number;
  // alert(lastPhoto);
  if(lastPhoto-1 >= 0) {
    $(".previous").show();
  } else {
    $(".previous").hide();
  }
  if(lastPhoto+1 < photoSlides.length) {
    $(".next").show();
  } else {
    $(".next").hide();
  }
}

// navigate to next or previous photo
var navigate = function() {
  $(".next").click(function() {
    if(lastPhoto+1 < photoSlides.length)  // make sure there is a next photo
      displayPhoto(lastPhoto+1);
  });
  $(".previous").click(function() {
    if(lastPhoto-1 >= 0)                  // make sure there is a previous photo
      displayPhoto(lastPhoto-1);
  });
}

$(document).ready(main);