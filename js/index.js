var information = {
  profileInformation: 'Software Engineer at Capital One<br>BS in Technology & Information Management<br>Minor in Computer Science'
}

var createHomePage = function() {
  var $profileImageContainer = $('<div class="col-12 col-m-12" id="profile-image-container">').appendTo($('.main-container'));
  var $profileImage = $('<img class="photo", id="profile-image" src="./images/profile.jpg">').appendTo($profileImageContainer);
  var $profileInfoContainer = $('<div class="col-12 col-m-12" id="profile-info-container">').appendTo($('.main-container'));
  var $profileInfo = $(`<div class="info" id="about-info"><i>${information.profileInformation}</i></div>`).appendTo($profileInfoContainer);
  setCurrentPage('home');
  // console.log(webpageControl.currentPage);
}
