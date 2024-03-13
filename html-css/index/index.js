document.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox and the navigation ul
    const checkbox = document.getElementById("check");
    const navUl = document.querySelector("nav ul");

    // Add a click event listener to the checkbox
    checkbox.addEventListener("click", function() {
      // Toggle the "show" class on the navigation ul
      navUl.classList.toggle("show");
    });
  });