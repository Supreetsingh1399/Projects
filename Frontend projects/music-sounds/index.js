window.addEventListener('keydown', function_playing);

function function_playing(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  // if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(function(key) {
  key.addEventListener('transitionend', removeTransition);
});