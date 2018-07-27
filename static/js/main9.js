
/* global main */

'use strict';

// Call main() in demo.js
main();
const canvas = document.querySelector('canvas');
const video = document.querySelector('video');
const stream = canvas.captureStream();
video.srcObject = stream;
