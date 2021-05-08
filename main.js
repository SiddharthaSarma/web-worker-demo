import './style.css';

const startWorkerBtn = document.getElementById('startWorker');
const terminateWorkerBtn = document.getElementById('terminateWorker');
const mainThread = document.getElementById('mainThread');
const browserResponsiveBtn = document.getElementById('browserResponsive');

var worker = new Worker('./worker.js');
console.log(worker);

startWorkerBtn.addEventListener('click', () => {
  worker.onmessage = ((event) => {
    document.getElementById('workerOutput').innerHTML = event.data;
  });
  // need to send a single argument other wise it will throw a error
  worker.postMessage(true);
});

terminateWorkerBtn.addEventListener('click', () => {
  worker.terminate();
});

mainThread.addEventListener('click', () => {
  for (var i = 0; i < 200000; i++) {
    document.getElementById('mainThreadOutput').innerHTML =
      'Main Thread Counter: ' + i;
  }
});


browserResponsiveBtn.addEventListener('click', () => {
  alert('browser responsive!')
});