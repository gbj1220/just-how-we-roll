/**********
 * DATA *
 **********/

const sixes = [8, 3];
const doubleSixes = [8, 3];
const twelves = [8, 3];
const twenties = [8, 3];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6button = document.querySelector(`#d6-roll`)
const doubleD6Button = document.querySelector(`#double-d6-roll-1`)
const doubleD6Button2 = document.querySelector(`#double-d6-roll-2`)
const d12Roll = document.querySelector(`#d12-roll`)
const d20Roll = document.querySelector(`#d20-roll`)

/******************
 * RESET FUNCTION *
 ******************/
const initialReset = () => {
  d6button.src = `images/start/d6.png` 
  doubleD6Button.src = `images/start/d6.png`
  doubleD6Button2.src = `images/start/d6.png`
  d12Roll.src = `images/start/d12.jpeg`
  d20Roll.src = `images/start/d20.jpg`
}
initialReset()

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/
const rollD6 = () => { 
  roll = getRandomNumber(6)
  sixes.push(roll)
  d6button.src=`./images/d6/${roll}.png`
}

const doubleD6Roll = () => {
  roll1 = getRandomNumber(6)
  roll2 = getRandomNumber(6)
  doubleSixes.push('roll1' + 'roll2')
  doubleD6Button.src = `images/d6/${roll1}.png`
  doubleD6Button2.src = `images/d6/${roll2}.png`
}

const rollD12 = () => {
  roll = getRandomNumber(12)
  twelves.push(roll)
  d12Roll.src = `images/start/d12${roll}.jpeg`
}


/****************
 * MATH SECTION *
 ****************/



/*******************
 * EVENT LISTENERS *
 *******************/
d6button.addEventListener(`click`, rollD6)
doubleD6Button.addEventListener(`click`, doubleD6Roll)
doubleD6Button2.addEventListener(`click`, doubleD6Roll)
d12Roll.addEventListener(`click`, rollD12)
