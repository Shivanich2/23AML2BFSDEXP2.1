// Get references to the textarea and the character count span
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

// Add an event listener to the textarea for the 'input' event
textInput.addEventListener('input', function() {
    // Update the character count as the user types
    charCount.textContent = textInput.value.length;
});
