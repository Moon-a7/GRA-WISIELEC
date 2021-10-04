window.onload = function () {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const categories
    const chosenCategory
    const getHint
    const word
    const guess
    const geusses = []
    let lives
    let counter
    const space

    let showLives = document.getElementById("myLives")
    const showCategory = document.getElementById("scategory")
    const getHint = document.getElementById("hint")
    const showClue = document.getElementById("clue")

    const buttons = function () {
        myButtons = document.getElementById('buttons')
        letters = document.createElement('ul')

        for (var i = 0; i< alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }

        }
    }
    