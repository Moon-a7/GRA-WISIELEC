window.onload = function () {
  var alphabet = [
    'a',
    'ą',
    'b',
    'c',
    'ć',
    'd',
    'e',
    'ę',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'ł',
    'm',
    'n',
    'ń',
    'o',
    'ó',
    'p',
    'q',
    'r',
    's',
    'ś',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'ź',
    'ż',
  ]

  var categories
  var chosenCategory
  //var getHint; // UZYSKAC WSKAZÓWKE
  var word
  var guess // ODGADNĄĆ, ZAGADKA (?)
  var geusses = [] // ODGADNIĘTE
  var lives
  var counter //  LICZNIK
  var space // PRZESTRZEŃ
  var animate
  var myStickman
  var head

  var showLives = document.getElementById('myLives')
  var showCategory = document.getElementById('scategory')
  var getHint = document.getElementById('hint')
  var showClue = document.getElementById('clue')

  var buttons = function () {
    myButtons = document.getElementById('buttons')
    letters = document.createElement('ul') //LISTY

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet'
      list = document.createElement('li')
      list.id = 'letter'
      list.innerHTML = alphabet[i]
      check() //SPRAWDZAC
      myButtons.appendChild(letters)
      letters.appendChild(list)
    }
  }

  // SELECT CATEGORY
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML =
        'The Chosen Category Is Premier League Football Teams'
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = 'The Chosen Category Is Films'
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = 'The Chosen Category Is Poland Cities'
    } else if (chosenCategory === categories[3]) {
      categoryName.innerHTML = 'The Chosen Category Is World Land'
    }

    // CREATE GEUSSES ul
    result = function () {
      wordHolder = document.getElementById('hold') //
      correct = document.createElement('ul')

      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word')
        guess = document.createElement('li')
        guess.setAttribute('class', 'guess')
        if (word[i] === '-') {
          guess.innerHTML = '-'
          space = 1
        } else {
          guess.innerHTML = '_'
        }
        geusses.push(guess)
        wordHolder.appendChild(correct)
        correct.appendChild(guess)
      }
    }
    // SHOW LIVES - pokaż życia
    comments = function () {
      showLives.innerHTML = 'You have' + lives + 'lives'
      if (lives < 1) {
        showLives.innerHTML = 'Game Over'
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = 'You Win!'
        }
      }
    }
    // ANIMATE MAN
    var animate = function () {
      var drawMe = lives
      animate[drawMe()]
    }
    //HANGMAN
    var CanvasRenderingContext2D = () => {
      myStickman = document.getElementById('stickman')
      CanvasRenderingContext2D = myStickman.getContext('2d')
      CanvasRenderingContext2D.beginPath()
      CanvasRenderingContext2D.strokeStyle = '#fff'
      CanvasRenderingContext2D.lineWidth = 2
    }
    head = function () {
      myStickman = document.getElementById('stickman')
      CanvasRenderingContext2D.beginPath()
      CanvasRenderingContext2D.arc(60, 25, 10, 0, Math.PI * 2, true)
      CanvasRenderingContext2D.stroke()
    }
    draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
      CanvasRenderingContext2D.moveTo($pathFromx, $pathFromy)
      CanvasRenderingContext2D.lineTo($pathTox, $pathToy)
      CanvasRenderingContext2D.stroke()
    }
  }
}
