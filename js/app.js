// ----------------------------------
// A - DOM ELEMENT BASICS
// ----------------------------------

// **(A-1)** Select the <h2 id="sweetness">...</h2>
//          w/ document.querySelector(«el»)
//          (pass CSS Selector as string argument, returns a JS DOM element)

var h2SweetnessEl = document.querySelector('#sweetness')

// **(A-2)** Read Text Content inside an element; capture in variable
var innerTxt = h2SweetnessEl.textContent
// console.log(innerTxt)

// **(A-3)** Reassign Text Content inside an element
h2SweetnessEl.textContent = 'We are <em>CRAZY</em> about JS'

// **(A-4)** Add HTML Markup inside an element
var coolListEl = document.querySelector('.cool-list')

var myFavoriteCity = `Cuernavaca`

coolListEl.innerHTML = `
  <li>Tokyo</li>
  <li>${myFavoriteCity}</li>
`
// **(A-5)** Append additional HTML Markup inside an element
coolListEl.innerHTML += `
<li>Dallas, TX</li>
`

// **(A-6)** Modify the class name values of an element

//  (i) domEl.className for reading + assignming
coolListEl.className += ' bold-text'
coolListEl.className = ''
coolListEl.className = 'list-cool is-active'

//  (ii) domEl.classList methods (preferred)
coolListEl.classList.contains('is-active')
  // => true
coolListEl.classList.remove('list-cool')
coolListEl.classList.add('very-important')

//=================================================

// ----------------------------------
// B - READING + MODIFYING STYLES DIRECTLY
// ----------------------------------
var someLineEl = document.querySelector('.some-text')

// **(B-1)** Change Style of an element with «element».style.«property»
//           (Use regular CSS property values)
someLineEl.style.border = '8px solid #aaaaaa'
someLineEl.style.fontFamily = 'sans-serif '


// **(B-2)** Access styles to readw/ window.getComputedStyle(el)
var someLineElStylesObj = window.getComputedStyle(someLineEl)
console.log(someLineElStylesObj.paddingTop)
  // => '4px'
console.log(someLineElStylesObj.color)
  // => 'rgb(255, 255, 255)'

// **(B-3)** Convert px to number (w/ parseInt)
var numStr = someLineElStylesObj.paddingTop.slice(0,-2)
  // => '4' // the string

var intNum = parseInt(numStr)
  // => 4 // the integer

// **(B-4)** Rewrite number (w/ parseInt)
someLineEl.style.paddingTop = `${intNum * 10}px`
someLineEl.style.paddingBottom = `${intNum * 10}px`

// **(B-5)**  READ el width/height with el.offsetWidth / el.offsetHeight ;
//            WRITE with el.style.width , el.style.height

//  READ
var elWidth = someLineEl.offsetWidth
 // => 300 // the integer number

// WRITE
someLineEl.style.width = `${elWidth * 3}px`

//=================================================

// ----------------------------------
// C - SELECTING + MODIFYING MULTIPLE ELEMENTS
// ----------------------------------

// **(C-1)**  access all '<ul class="list-of-chores"> ... <li>' w/
//            document.querySelectorAll(...selector...)
var listElsNodeList = document.querySelectorAll('.list-of-chores li')


// **(C-2)** Use ES6 [...] to destructure into an array of DOM elements
var listElsArray = [ ...listElsNodeList ]

// **(C-3)** Iterate over Array of DOM ELEMENTS

for (var i = 0 ; i < listElsArray.length; i++){
  var listEl = listElsArray[i]
  listEl.textContent = 'eat chocolate!!'
}

//  **(C-4)**  OR (preferred)-- Use forEach to iterate over element
//           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach       

listElsArray.forEach(function(listEl, i){
  listEl.classList.add('done')
  listEl.classList.remove('not-done')
  listEl.innerHTML = `${i + 1} - ${listEl.textContent}`
})
