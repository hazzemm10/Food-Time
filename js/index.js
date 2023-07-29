// Get the container element

var navItem = document.getElementsByClassName("nav-item");

// Get all buttons with class="btn" inside the container
var navLink = document.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}