var word1 = prompt("enter the string 1");
var word2 = prompt("enter the string 2");
function anagram(a, b) {
     word1 = a.length;
     word2 = b.length;
    if(word1 !== word2){
       document.write("Length does not match");
       return ;
    }
    word1 = a.split('').sort().join('');
    word2 = b.split('').sort().join('');
     if(word1 === word2){
       document.write("Is a anagram");
    } else { 
       document.write("Is a not  a anagram");
    }
 }
 anagram(word1,word2);