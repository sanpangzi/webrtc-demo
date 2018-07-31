'use strict';

const leftVideo = document.getElementById('leftVideo');
const rightVideo = document.getElementById('rightVideo');

let stream;

function maybeCreateStream() {
  if (stream) {
    return;
  }
  if (leftVideo.captureStream) {
    stream = leftVideo.captureStream();
    console.log(stream);
    rightVideo.srcObject = stream;
    console.log('Captured stream from leftVideo with captureStream', stream);
  } else if (leftVideo.mozCaptureStream) {
    stream = leftVideo.mozCaptureStream();
    rightVideo.srcObject = stream;
    console.log('Captured stream from leftVideo with mozCaptureStream()', stream);
  } else {
    console.log('captureStream() not supported');
  }
}

// Video tag capture must be set up after video tracks are loaded.
leftVideo.oncanplay = maybeCreateStream;
if (leftVideo.readyState >= 3) {  // HAVE_FUTURE_DATA
  // Video is already ready to play, call maybeCreateStream in case oncanplay
  // fired before we registered the event handler.
  maybeCreateStream();
}

leftVideo.play();