const projects = [
  {
    quote: "“Mohsin's delivered an outstanding website on time and exceeded expectations.”",
    cite: "– John Doe",
  },
  {
    quote: "“The design was sleek, modern, and perfectly aligned with our brand.”",
    cite: "– Jane Smith",
  },
  {
    quote: "“Exceptional work! The website is fast, responsive, and visually stunning.”",
    cite: "– Michael Brown",
  },
  {
    quote: "“Mohsin's attention to detail and creativity are unmatched.”",
    cite: "– Sarah Wilson",
  },
];

let currentProjectIndex = 0;

function updateProject() {
  const projectQuote = document.getElementById("project-quote");
  const currentQuote = projectQuote.querySelector("p");
  const currentCite = projectQuote.querySelector("cite");

  // Add exiting class and lower z-index to current elements
  if (currentQuote && currentCite) {
    currentQuote.classList.add("exiting");
    currentCite.classList.add("exiting");
    currentQuote.style.zIndex = 1; // Lower z-index for the current project
    currentCite.style.zIndex = 1; // Lower z-index for the current project
  }

  // Wait for the fade-out animation to complete before adding the new project
  setTimeout(() => {
    // Remove the old elements
    if (currentQuote && currentCite) {
      projectQuote.removeChild(currentQuote);
      projectQuote.removeChild(currentCite);
    }

    // Move to the next project
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    const { quote, cite } = projects[currentProjectIndex];

    // Create new elements for the next project
    const newQuote = document.createElement("p");
    newQuote.textContent = quote;
    newQuote.classList.add("active");
    newQuote.style.zIndex = 2; // Higher z-index for the new project

    const newCite = document.createElement("cite");
    newCite.textContent = cite;
    newCite.classList.add("active");
    newCite.style.zIndex = 2; // Higher z-index for the new project

    // Append new elements to the container
    projectQuote.appendChild(newQuote);
    projectQuote.appendChild(newCite);
  }, 1500); // Match the fade-out duration
}

// Change project every 5 seconds
setInterval(updateProject, 5000);

// Typewriter Effect
const typewriterText = "A Web Developer and Designer.";
let typewriterIndex = 0;

function typeWriter() {
  const typewriterElement = document.getElementById("typewriter");
  if (typewriterIndex < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(typewriterIndex);
    typewriterIndex++;
    setTimeout(typeWriter, 100); // Adjust typing speed here
  }
}

typeWriter();

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.classList.toggle("light-mode", savedTheme === "light-mode");
  themeToggle.querySelector(".icon").textContent = savedTheme === "light-mode" ? "☀️" : "🌙";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const isLightMode = body.classList.toggle("light-mode");
  themeToggle.classList.toggle("light-mode", isLightMode);
  localStorage.setItem("theme", isLightMode ? "light-mode" : "dark-mode");
  themeToggle.querySelector(".icon").textContent = isLightMode ? "☀️" : "🌙";
});

// Scroll to the top of the page on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};