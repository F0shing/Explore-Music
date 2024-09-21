//
// ALL THE JS CODE HAVE BEEN PROVIDED BY AI
//

function searchArtists() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const genreCards = document.querySelectorAll('.genre-section .genre-card');
    let firstMatch = null; // To track the first matching result

    genreCards.forEach(card => {
        const topArtists = card.querySelectorAll('.top-artists li');
        let isMatch = false;

        // If the search bar is empty, show all cards and reset any previous highlights
        if (query === '') {
            card.style.display = "block"; // Show all cards
            topArtists.forEach(artist => {
                artist.innerHTML = artist.textContent; // Clear previous highlights
            });
            return; // Skip further processing
        }

        // If there is a query, proceed with the search logic
        topArtists.forEach(artist => {
            const artistName = artist.textContent.toLowerCase();

            if (artistName.includes(query)) {
                isMatch = true;

                // Highlight the matching part in the artist name
                const highlightedName = artist.textContent.replace(new RegExp(query, 'gi'), (match) => {
                    return `<span class="highlight">${match}</span>`;
                });
                artist.innerHTML = highlightedName;
            } else {
                // Clear any previous highlights in non-matching artists
                artist.innerHTML = artist.textContent;
            }
        });

        // Show the card if there is a match, otherwise hide it
        if (isMatch) {
            card.parentElement.style.display = "block";  // Display the parent genre-section of the card
            if (!firstMatch) {
                firstMatch = card.parentElement; // Set the first matching card for scrolling
            }
        } else {
            card.parentElement.style.display = "none";  // Hide the genre-section if no match
        }
    });

    // Scroll to the first matching result if one is found
    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



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