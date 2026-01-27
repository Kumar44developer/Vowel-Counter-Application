function checkVowels(){


 let text = document.getElementById("inputText").value;
 let vowelCount = 0;

  text = text.toLowerCase();

  for(let i = 0; i < text.length; i++){
    let char = text.charAt(i);
    if (isVowel(char)){
