window.onload = function () {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const categories;
    const chosenCategory;
    //const getHint; // UZYSKAC WSKAZÓWKE
    const word;
    //const guess;// ODGADNĄĆ, ZAGADKA (?)
    const geusses = []; // ODGADNIĘTE
    let lives 
    let counter //  LICZNIK
    const space // PRZESTRZEŃ

    let showLives = document.getElementById("myLives")
    const showCategory = document.getElementById("scategory")
    const getHint = document.getElementById("hint")
    const showClue = document.getElementById("clue")

    const buttons = function () {
        myButtons = document.getElementById('buttons')
        letters = document.createElement('ul') //LISTY

        for (var i = 0; i< alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
      check(); //SPRAWDZAC 
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }

        }

// SELECT CATEGORY
const selectCat = function () {
    if (chosenCategory === categories [0] {
        categoryName.innerHTML = "The Chosen Category Is Premier League Football Teams"
    }
    else if (chosenCategory === categories [1]) {
        categoryName.innerHTML = "The Chosen Category Is Films"
    }else if (chosenCategory === categories [2]) {
        categoryName.innerHTML = "The Chosen Category Is Cities"
    }
}
// CREATE GEUSSES ul 
result = function () {
    wordHolder = document.getElementById('hold')//
    correct = document.createElement('ul')

    for (let i = 0; i< word.length; i++) {
        correct.setAttribute('id', 'my-word')
        guess = document.createElement('li')
        guess.setAttribute('class', 'guess')
        if (word[i] === "-") {
            guess.innerHTML = "-"
            space = 1
        } else {
            guess.innerHTML = "_"
        }
        geusses.push(guess)
        wordHolder.appendChild(correct)
        correct.appendChild(guess)
    }
}
// SHOW LIVES - pokaż życia
comments = function () {
showLives.innerHTML = "You have" + lives + "lives"
if (lives < 1) {

}
}

}

    