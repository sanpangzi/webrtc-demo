'use strict';
navigator.getUserMedia = navigator.getUserMedia ||navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var constraints = {
  audio: false,
  video: true
};
var video = document.querySelector('video');
navigator.getUserMedia(constraints, successCallback, errorCallback);
function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.srcObject =  stream;
  } else {
    video.src = stream;
  }
}
function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}