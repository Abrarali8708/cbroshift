// document.getElementById('upload-btn').addEventListener('click', function() {
//     var fileInput = document.getElementById('image-upload');
//     var file = fileInput.files[0];

//     if (file) {
//       var imageUrl = URL.createObjectURL(file);
//       displayImageWithDelay(imageUrl, 'uploaded-image');
//     } else {
//       alert('Please select a file to upload.');
//     }
//   });

//   function displayImageWithDelay(imageUrl, imageDivId) {
//     var imageDiv = document.getElementById(imageDivId);
//     imageDiv.innerHTML = '<img src="' + imageUrl + '" alt="Image">';
    
//     // Schedule display of a random image after the delay
//     setTimeout(function() {
//       displayRandomImage('random-image');
//     }, 3000); // Delay of 3 seconds
//   }

document.getElementById('upload-btn').addEventListener('click', function() {
  var fileInput = document.getElementById('image-upload');
  var file = fileInput.files[0];

  if (file) {
      var imageUrl = URL.createObjectURL(file);
      // Create a new Image object
      var img = new Image();
      img.src = imageUrl;

      // When the image has loaded
      img.onload = function() {
          if (img.width === 389 && img.height === 389) {
              displayImageWithDelay(imageUrl, 'uploaded-image');
          } else {
              alert('Please upload an image with dimensions 389x389 pixels.');
          }
      };
  } else {
      alert('Please select a file to upload.');
  }
});

function displayImageWithDelay(imageUrl, imageDivId) {
  var imageDiv = document.getElementById(imageDivId);
  imageDiv.innerHTML = '<img src="' + imageUrl + '" alt="Image">';
  
  // Schedule display of a random image after the delay
  setTimeout(function() {
      displayRandomImage('random-image');
  }, 3000); // Delay of 3 seconds
}

  function displayRandomImage(imageDivId) {
    var imageUrls = [  // Update these URLs with your image paths
    'https://i.ibb.co/mXcpJWY/1.png',
    'https://i.ibb.co/HNdyZTQ/2.png',
    'https://i.ibb.co/S5RxKKZ/3.png',
    'https://i.ibb.co/1LLcrjj/4.png',
    'https://i.ibb.co/QrqWD3C/5.png',
    'https://i.ibb.co/wJ9DQdq/6.png',
    'https://i.ibb.co/Z87qHGz/7.png',
    'https://i.ibb.co/Q99Phcy/8.png',
    'https://i.ibb.co/CQW7NXJ/9.png',
    'https://i.ibb.co/qF2FF8d/10.png',
    'https://i.ibb.co/sbvmPPd/11.png',
    'https://i.ibb.co/VYKRqzQ/12.png',
    'https://i.ibb.co/gg52tLc/13.png',
    'https://i.ibb.co/GQ1M1n2/14.png',
    'https://i.ibb.co/VHcHsCK/15.png',
    'https://i.ibb.co/JQdbSM8/16.png',
    'https://i.ibb.co/31RJFqK/17.png',
    'https://i.ibb.co/85WxTMg/18.png',
    'https://i.ibb.co/b5W61tG/19.png',
    'https://i.ibb.co/yqjXHz3/20.png',
    'https://i.ibb.co/HqfXCws/21.png',
    'https://i.ibb.co/GRBGjkM/22.png',
    'https://i.ibb.co/nB8SHNQ/23.png',
    'https://i.ibb.co/g3RMzdZ/24.png',
    'https://i.ibb.co/4VPk8Lc/25.png',
    'https://i.ibb.co/Yp66zrT/26.png',
    'https://i.ibb.co/3ykHN0d/27.png',
    'https://i.ibb.co/GJy6WtG/28.png',
    ];

    var randomIndex = Math.floor(Math.random() * imageUrls.length);
    var randomImageUrl = imageUrls[randomIndex];
    
    var imageDiv = document.getElementById(imageDivId);
    imageDiv.innerHTML = '<img src="' + randomImageUrl + '" alt="Random Image">';
  }