// for History
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("clicked");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
        coll = document.getElementsByClassName("collapsible");
    }
  });
}

function Responsive(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
  {
    x.className += " responsive";
  } 
  else 
  {
    x.className = "topnav";
  }
}


filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i , hed;
  x = document.getElementsByClassName("row");
  hed = document.getElementsByClassName("posHeader");
  if (c == "all"){
      c = ""; 
      for (i = 0; i < hed.length; i++) {
          w3RemoveClass(hed[i], "hide");
      }
  }else{
      for (i = 0; i < hed.length; i++) {
          AddClass(hed[i], "hide");
      }   
  }
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
  
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[1].className = ("btn");
    this.className = "btn active";
  });
}



