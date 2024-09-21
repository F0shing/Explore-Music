// JavaScript for dynamic 3D effect on text based on mouse movement
const cards = document.querySelectorAll('.genre-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;

        // Calculate rotation limits (-15deg to 15deg)
        const rotateX = ((y / cardRect.height) - 0.5) * 30; // -15 to 15 degrees
        const rotateY = ((x / cardRect.width) - 0.5) * -30; // -15 to 15 degrees

        // Apply transform to the card
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        // Reset rotation when mouse leaves
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});

// Array of predefined colors
const colors = [
  '#ef4444',
  '#f97316',
  '#84cc16',
  '#22c55e',
  '#3b82f6',
  '#06b6d4',
  '#0ea5e9',
  '#8b5cf6',
  '#d946ef',
  '#ec4899',
  '#f43f5e'
];

// Function to select a random color from the array
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Set the random color to the CSS variable --default-color
function switchColor() {
  const randomColor = getRandomColor();
  document.documentElement.style.setProperty('--highlight-color', randomColor);
}

// Call the function when the page loads
window.onload = switchColor;
