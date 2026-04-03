import QrScanner from './qr-scanner.min.js';

const video = document.getElementById('video');
const resultText = document.getElementById('result');

QrScanner.WORKER_PATH = './qr-scanner-worker.min.js';

const scanner = new QrScanner(video, result => {
    console.log("Scanned:", result);
    resultText.textContent = "Result: " + result;
});

scanner.start();