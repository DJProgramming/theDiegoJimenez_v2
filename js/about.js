var aboutInformation = {
  name: 'Diego Jimenez',
  profession: 'Software Engineer at Capital One',
  hometown: 'Bay Area, CA',
  degree: 'BS in Technology & Information Management',
  instagram: {
    name: 'diego_jimenez_photography',
    url: 'https://www.instagram.com/diego_jimenez_photography'
  },
  contact: 'diegojimenez1023@gmail.com'
}

var createAboutPage = function() {
  changeTitle('About');
  var $aboutContainer = $('<div class="col-12 col-m-12 about-container">').appendTo($('.main-container'));
  var $aboutImageContainer = $('<div class="col-6 col-m-6 about-image-container" id="about-image-container">').appendTo($aboutContainer);
  var $aboutPhoto = $(`<img class="photo" id="about-photo" src="./images/profile.jpg">`).appendTo($aboutImageContainer);
  var $aboutInfoContainer = $('<div class="col-6 col-m-6 about-info-container" id="about-info-container">').appendTo($aboutContainer);
  var $aboutInfoParagraph = $(`<p id="personal-info">
  Name: ${aboutInformation.name}<br><br>
  Profession: ${aboutInformation.profession}<br><br>
  Hometown: ${aboutInformation.hometown}<br><br>
  Degree: ${aboutInformation.degree}<br><br>
  Instagram: <a href="${aboutInformation.instagram.url}">${aboutInformation.instagram.name}</a><br><br>
  Contact: ${aboutInformation.contact}<br></p>`).appendTo($aboutContainer);
}
