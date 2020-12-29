// When the user scrolls the page, execute myFunction


// Get the navbar

// Get the offset position of the navbar


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function dropFunc() {
    var x = document.getElementById("menuContainer");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  