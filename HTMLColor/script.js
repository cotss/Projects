const backgroundColorInput = document.getElementById('background-color');
const textColorInput = document.getElementById('text-color');
const fontFamilySelect = document.getElementById('font-family');
const textInput = document.getElementById('text-input');
const output = document.getElementById('output');

textInput.addEventListener('input', function() {
  output.textContent = textInput.value;
});

backgroundColorInput.addEventListener('input', function() {
  output.style.backgroundColor = backgroundColorInput.value;
});

textColorInput.addEventListener('input', function() {
  output.style.color = textColorInput.value;
});

fontFamilySelect.addEventListener('change', function() {
  output.style.fontFamily = fontFamilySelect.value;
});
