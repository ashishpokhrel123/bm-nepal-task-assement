const copyButton = document.getElementById('copyButton');
const copyText = document.getElementById('copyText');

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(copyText.textContent)
    .then(() => {
      console.log('Text copied to clipboard:', copyText.textContent);
    })
    .catch(error => {
      console.error('Unable to copy text to clipboard:', error);
    });
});
