function userDetails(){}

// alert('Hi my name is Siabi Mawunyo Kafui')
// let name1 = prompt('What is your name?');
//  alert(name1);

//  alert('I am 30 years old')
//  let age = prompt('what is your age')
//  alert(age)

//  alert('I come from the Volta Region')
// let age = 18;
// let hometown = 'Accra';
// let name1 = prompt('what is your name?');
// let title = prompt('what is your title?');
// let favoriteproduct = prompt('what is your favorite product');
//  alert(name1);
//  alert('hi ' + name1 + ' ,Welcome to our website');
//  alert(`Hi ${title},  ${name1}, do you like ${favoriteproduct}`);

// let name = prompt('what is your name?'); 
// if(name == 'Sandra'){
//  alert("hi beautiful🙌");
// }  else{

//     alert("hi there");
// }

// let name = prompt("what is your name?)
function findMe(){ //creating a function that executes when the event(click) is listened for
let pfour = document.getElementById("pfour"); //select the element(pfour) that you want to reappear which is hidden by CSS
pfour.style.display ="block"; //displaying the element 
}

function changecolor(){
    let ptwo = document.getElementById("ptwo");
    ptwo.style.backgroundColor = "pink";
}
let ptwo = document.getElementById("ptwo");
ptwo.addEventListener("click", changecolor);

function changewidth(){
    let pone = document.getElementById("pone");
    pone.style.width = "300px"
}
  


let pone = document.getElementById("pone");
pone.addEventListener("mouseleave",changewidth );



let pthree = document.getElementById("pthree"); //selecting the 3rd paragraph
pthree.addEventListener("click",findMe); //adding an event listener to the 3rd paragraph