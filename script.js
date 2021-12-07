const word = document.getElementById('string');
const result = document.querySelector('.result');

word.addEventListener('keyup', () => {
  result.innerHTML = `${word.value.length} characters`;
});
