// console.dir(document)
// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.forms[0]);


// ------- selector ---- 

// GET ELEMENT BY ID
var title = document.getElementById("header-title");


// console.log(title);
// var header = document.getElementById("main-header");

//show only text content -----------------
// title.textContent = 'hello'; 

//aware pof css styling --------
// title.innerText = "hi"; 

//show text nad element inside -------
// title.innerHTML = "good";
console.log(title.textContent)

// // Changing style  -----------------------
// header.style.borderBottom = "solid 4px black"


// GET ELEMENTS BY CLASS NAME 
// var items = document.getElementsByClassName('list-group-item')
// console.log(items[1])

// items[2].textContent = 'hello 3'
// items[2].style.backgroundColor = 'green'


// for (var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'green'
// }

// document.querySelectorAll('li').textContent = 'hello'
// console.log(li);
// console.log(odd[0]);





// GET ELEMENT BY TAGNAME
// var li = document.getElementsByTagName("li");
// console.log(items[1]);

// li[1].textContent = "hello 3";
// li[2].style.backgroundColor = "green";

// for (var i = 0; i < li.length; i++) {
// 	li[i].style.backgroundColor = "green";
// }



//Queryselector
// var header = document.querySelector('li')
// header.style.color = 'blue'



// var h1 = document.querySelector("input[type='submit']");
// h1.style.backgroundColor = "blue";


// var item = document.querySelector(".list-group-item:last-child");
// item.style.color = "yellow";

// var seconditem = document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.color = "yellow";



// QUERYSELECTOR ALL

var odd = document.querySelectorAll('li:nth-child(odd)')
// console.log(odd)
// console.log(odd[0])
// var even = document.querySelectorAll("li:nth-child(even)");

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'gray'
//     even[i].style.backgroundColor = "blue";

// }

// --------- PARENT NODE --------
// var item = document.querySelector('#items');
// console.log(item.parentNode)
// item.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(item.parentNode.parentNode.parentNode);

// --------- PARENT Element --------
// var item = document.querySelector("#items");
// console.log(item.parentElement);
// item.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(item.parentElement.parentElement.parentElement);


// ---------- CHILD NODE ---------

// Better to use Children cuz of white space ------
// console.log(item.childNodes)


// --------- Children ------
// console.log(item.children)
// console.log(item.children[1])

// ---------- First  child ------
// Caution of whitespace when using
// console.log(item.firstChild)


// ---------- First Element child ------
// Use this more 
// console.log(item.firstElementChild)
// item.firstElementChild.textContent = 'hello1'


// ---------- Last Element child ------
// Use this more 
// console.log(item.lastElementChild)
// item.lastElementChild.textContent = 'hello4'


// ---------- SIBLING  ---------

// ---------- nextSibling ------
// console.log(item.nextSibling)

// ---------- nextElementSibling ------
// console.log(item.nextElementSibling);

// ---------- previousSibling ------
// console.log(item.previousSibling);

// ---------- previousElementSibling ------
// console.log(item.previousElementSibling);


//------------ Create A div in DOM --------
// var newDiv = document.createElement('div')

// // add class
// newDiv.className = 'hello'

// // add id
// newDiv.id = 'hello'

// // set attribute
// newDiv.setAttribute('title', 'Hello world')
// newDiv.setAttribute("href", "https://www.youtube.com/watch?v=mPd2aJXCZ2g");

// // create text node 
// var newDivText = document.createTextNode('hello world') 

// // add text to div
// newDiv.appendChild(newDivText)

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// container.insertBefore(newDiv, h1)
// console.log(newDiv)




// -------- EVENT LISTENER -------------

// var button = document.getElementById("button").addEventListener("click", buttonClick);

// console.log(li)

// function buttonClick(e){
	//  var li = document.querySelectorAll(".list-group-item:nth-child(odd)");
	// 		console.log(li);

	// for(var i = 0; i < li.length; i++){
	//     li[i].style.backgroundColor = 'green'

	//     // console.log(li[i]);

	// }

// ------what ever the event is fired from------
	//show all kind of propety -----------------
	// console.log(e);

	// show element of event -------------------
	// console.log(e.target);

	// show element id of event ----------------
	// console.log(e.target.id);

	// show element class of event -------------
	// console.log(e.target.className);

	// show element list of event --------------
	// console.log(e.target.classList);

	// show what type of event -----------------
	// console.log(e.type);

    // show position of the mouse in window ----
    // console.log(e.clientX)
    // console.log(e.clientY)

    // show position of the mouse in element ----
    // console.log(e.offsetX)
    // console.log(e.offsetY)

    // console.log(e.altKey)
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }


// ------------- Mouse EVENT -----------
// var button = document.getElementById("button")

// button.addEventListener("click", buttonClick);
// button.addEventListener("dblclick", buttonClick);

// // when mouse is clickdown even not release up
// button.addEventListener("mousedown", buttonClick);

// // after when mouse is clickdown then release up
// button.addEventListener("mouseup", buttonClick);

// function buttonClick(e){
//     console.log('Event Type: ' +e.type)
// }


// var button = document.getElementById("button");
// var box = document.getElementById("box");

// box.addEventListener('mouseenter', buttonClick )
// box.addEventListener("mouseleave", buttonClick);

// work also with inner element
// box.addEventListener("mouseover", buttonClick);
// box.addEventListener("mouseout", buttonClick);

// box.addEventListener("mousemove", buttonClick);


// function buttonClick(e){
//     console.log('Event Type: ' +e.type)

//     output.innerHTML =
// 			"<h3>Mouse Y: " + e.offsetY + "</h3> <h3>Mouse X: " + e.offsetX + "</h3>";
    
//     // var setX = e.offsetX;
//     // var setY = e.offsetY
//     // var total = setY + setX;
//     // console.log(total)

//     box.style.backgroundColor = 'rgb( '+e.offsetY+','+e.offsetX+', '+total+' )'
// }

// --------- KEYBOARD EVENT ---------------

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form')

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);

function runEvent(e){
    console.log('Event Type: ' +e.type)

	// console.log(e.target.value)
	// document.querySelector('#output').innerHTML = '<h3>'+e.target.value+'</h3>';
}
