
function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText.split('').reverse().join('');
    document.getElementById('outputText').value = encryptedText;
}


function decryptText() {
    let encryptedText = document.getElementById('outputText').value;
    let decryptedText = encryptedText.split('').reverse().join('');
    document.getElementById('outputText').value = decryptedText;
}