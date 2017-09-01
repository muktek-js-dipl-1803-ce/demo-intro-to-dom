// **** Select an Element w/ document.querySelector(«el»)
//      ...returns first matching element
var headerSweetness = document.querySelector('#sweetness')
var h2Sweetness = document.querySelector('.cool-class')


// **** Add Text Content inside an element
headerSweetness.textContent = "My favorite element by far is the <hr/>"


// **** Add HTML Markup inside an element
var theGottenEl = document.querySelector('.the-gotten')
theGottenEl.innerHTML = "I've been <strong>got</strong>"

var tagsContainertEl = document.querySelector('.tagged-as')
tagsContainertEl.innerHTML += "<span>lavender soap</span>"


// **** Modify the class name of an element, with a css class that will provide
//      a different style
var hotTagItem = document.querySelector('.tagged-as span')
hotTagItem.className = 'so-hot'


// **** Change Style of an element with «element».style.«property»
var listOfChores = document.querySelector('.list-of-chores');
listOfChores.style.border = "10px cadetblue solid";
listOfChores.style.padding = "50px";
listOfChores.style.listStyleType = "square";


// **** Read then write width of line with window.getComputedStyle
var someLineEl = document.querySelector('.some-line')
var lineElStyles = window.getComputedStyle(someLineEl)


// **** Convert px to number
var widthNumString = lineElStyles.width.slice(0, -2)
var widthNum = parseInt(widthNumString)
someLineEl.style.width = widthNum * 2 + "px";


// **** Selecting multiple elements w/ document.querySelectorAll(«css-selector»)
//   and basic iteration

var choreLiEls = document.querySelectorAll('.list-of-chores li')


// **** Using ES6 [...] to destructure element into an array

var choreLiElsArray = [...choreLiEls]


// **** Use custom forEach to iterate over element
function forEach(arr, callbackFunc){
  for(var i = 0; i < arr.length; i++){
    callbackFunc(arr[i], i, arr)
  }
}

forEach(choreLiElsArray, function(liEl){
  console.log(liEl)
})
