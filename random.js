const postJs = document.getElementById("form");

postJs.addEventListener("submit", function(e){
    const checkboxOne = document.getElementById("value1");
const checkboxTwo = document.getElementById("value2");
const checkboxThree = document.getElementById("value3");
const output = document.getElementById("output");
var numsWords = document.getElementById("nums").value;
const content = {
    words:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "v", "x", "y", "z"],
    nums :[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    special : ["<", ">", "%", "#", "!", "?", "¿", "(", ")", ".", ",", "-", "_", "&", "="],
    mayus:function(){
    var mWords = this.words.map(v=> v.toUpperCase());
    return mWords;
    }
};
//hacer las funciones para las respectivas contraseñas
function normalWords(numsOfChars, {words}){
 var randomThings;
 var out = "";
 for(let i = 0; i< numsOfChars; i++){
     randomThings = Math.floor(Math.random()* words.length);
     out += words[randomThings];
 }
 
 output.innerHTML= out;
}

function wordsAndMayus(numsOfChars, {words}){
    var mayus = content.mayus();
    var joinWAndN = [...words, ...mayus];
    var randomThings;
    var out = "";
     for(let i = 0; i< numsOfChars; i++){
        randomThings = Math.floor(Math.random()* joinWAndN.length);
        out += joinWAndN[randomThings];
    }
    output.innerHTML= out;
   }

function wordsAndNums(numsOfChars, {words, nums}){
    var mayus = content.mayus();
    var joinWAndN = [...words, ...nums, ...mayus];
    var randomThings;
    var out = "";
     for(let i = 0; i< numsOfChars; i++){
        randomThings = Math.floor(Math.random()* joinWAndN.length);
        out += joinWAndN[randomThings];
    }
    output.innerHTML= out;
   }

   function wordsandNumsandSpecial(numsOfChars, {words, nums, special}){
    var may = content.mayus();
    var joinWandNandS = [...words, ...special, ...nums, ...may];
    var randomThings;
    var out = "";
     for(let i = 0; i< numsOfChars; i++){
        randomThings = Math.floor(Math.random()* joinWandNandS.length);
        out += joinWandNandS[randomThings];
    }
    output.innerHTML= out;
   }
   
    if(checkboxOne.checked == true){
        wordsAndMayus(numsWords, content);
    }else if(checkboxTwo.checked == true){
        wordsAndNums(numsWords, content);
    }else if(checkboxThree.checked == true ){
        wordsandNumsandSpecial(numsWords, content);
    }else{
        normalWords(numsWords, content);
    }
    e.preventDefault();
});   


