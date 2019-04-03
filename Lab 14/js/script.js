/*eslint-env browser*/

function getWords(text) {
    "use strict";
    var words;
    //REMOVE ALL CHARACTERS FROM TEXT
    text = text.replace(/,/, ""); //remove all commas and replace with nothing
    text = text.replace(/:/, "");
    text = text.replace(/\./g, ""); //backslash is an espace character (to not throw off)
    text = text.toLowerCase();
    //CONVERT TEXT TO AN ARRAY
    words = text.split(" "); //split into an array
    words.sort(); //sort them?
    return words;
}

function getUniqueWords(words) {
    "use strict";
    var i, uniqueWords = []; //set to an empty array--will later "push" into it
    uniqueWords.push(words[0]);
    for (i = 0; i < words.length; i += 1) {
        if (words[i] !== words[i - 1]) { //i - 1 to hit zero
            uniqueWords.push(words[i]); //pushing "A" into our array, then scanning to see if "A" exists already on its own
        }
    }
    return uniqueWords;
}

function main() {
    "use strict";
    var text, words, uniqueWords, i;
    
    text = "With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience.";
    
    window.console.log("The Word List Application");
    
    //GET ALL WORDS AND THEN GET UNIQUE WORDS
    words = getWords(text);
    uniqueWords = getUniqueWords(words); //"words" is now our array
    //DISPLAY NUMBER OF WORDS AND UNIQUE WORDS
    window.console.log("Number of words: " + words.length);
    window.console.log("Number of unique words: " + uniqueWords.length);
    //DISPLAY WORDS AND THEIR COUNTS
    window.console.log("Unique word occurrences: ");
    for (i = 0; i < words.length; i += 1) {
        window.console.log(words[i] + "\n");
    }
}
main();