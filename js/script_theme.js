// <!------ theme switcher script start ------>

function toggleTheme() {
    let body = document.body;
    let moonIcon = document.getElementById("moon-icon");
    let sunIcon = document.getElementById("sun-icon");

    body.classList.toggle("light-mode");
    let theme = body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      moonIcon.classList.add("move-down");
      sunIcon.style.display = "inline";
      sunIcon.classList.add("move-in");
      setTimeout(() => {
        moonIcon.style.display = "none";
        moonIcon.classList.remove("move-down");
        sunIcon.classList.remove("move-in");
      }, 100);
    } else {
      sunIcon.classList.add("move-down");
      moonIcon.style.display = "inline";
      moonIcon.classList.add("move-in");
      setTimeout(() => {
        sunIcon.style.display = "none";
        sunIcon.classList.remove("move-down");
        moonIcon.classList.remove("move-in");
      }, 300);
    }
  }

  // Load saved theme preference
  document.addEventListener("DOMContentLoaded", function () {
    let body = document.body;
    let moonIcon = document.getElementById("moon-icon");
    let sunIcon = document.getElementById("sun-icon");
    let savedTheme = localStorage.getItem("theme") || "dark";

    if (savedTheme === "light") {
      body.classList.add("light-mode");
      moonIcon.style.display = "none";
      sunIcon.style.display = "inline";
    } else {
      moonIcon.style.display = "inline";
      sunIcon.style.display = "none";
    }
  });
  
// <!------ theme switcher script end ------>