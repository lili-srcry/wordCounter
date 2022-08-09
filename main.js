(function () {
  'use strict';

  const inputText = document.getElementById('input_text');
  const countText = document.getElementById('count_text');

  inputText.addEventListener('keyup', function () {
    let typingText = inputText.value;
    typingText = typingText.replace(/\r?\n/g, '');
    countText.innerHTML = typingText.length;
  });
})();
