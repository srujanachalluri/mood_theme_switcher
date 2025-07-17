// Get the <select> element with the ID "mood"
const moodSelector = document.getElementById("mood");

// Add an event listener that triggers when the selected mood changes
moodSelector.addEventListener("change", function () {

    // Remove any existing class from the <body> element: previous selected mood
    document.body.className = "";
    // Add the selected mood (e.g., "happy", "sad") as a class to the <body>  
    document.body.classList.add(this.value);


    const tips = [
  "💡 Use semantic HTML for better accessibility.",
  "🚀 Minify your CSS and JS to improve page speed.",
  "🔐 Always validate form input to prevent security issues.",
  "🎨 Use responsive units like rem/em for flexible layouts.",
  "🛠️ Use version control (Git) for every project!"
];

document.getElementById("tech-tip").innerText = tips[Math.floor(Math.random() * tips.length)];
});