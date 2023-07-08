const immagine = document.querySelector('.secchia');
const button = document.querySelector('button');
const audioPlayer = document.getElementById('audioPlayer');
const testo = document.querySelector('.testo');


button.addEventListener('click', function() {
immagine.src = "auguri.jpg";
});


button.addEventListener('click', function() {
  audioPlayer.play();
});

button.addEventListener('click', function() {
    testo.style.display = "block";
  
  });
  