
const apiUrl = 'https://akabab.github.io/starwars-api/api/all.json';
const charactersPerPage = 6;
let currentPage = 1;
let characters = [];

const container = document.getElementById('character-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const footerClock = document.getElementById('footer-clock');

// Fetch characters from API
async function fetchCharacters() {
  try {
    const res = await fetch(apiUrl);
    characters = await res.json();
    renderPage(currentPage);
  } catch (error) {
    container.innerHTML = '<p>Failed to load characters.</p>';
    console.error(error);
  }
}

// Render characters for the current page
function renderPage(page) {
  container.innerHTML = ''; // Clear previous cards
  const start = (page - 1) * charactersPerPage;
  const end = start + charactersPerPage;
  const pageCharacters = characters.slice(start, end);

  pageCharacters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <a href="detail.html?id=${char.id}" target="_blank" style="text-decoration:none; color:inherit;">
        <img src="${char.image}" alt="${char.name}" />
        <h3>${char.name}</h3>
        <p>Species: ${char.species || 'Unknown'}</p>
        <p>Gender: ${char.gender || 'Unknown'}</p>
      </a>
    `;
    container.appendChild(card);
  });

  updateButtons();
}

// Update Previous/Next buttons state
function updateButtons() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage * charactersPerPage >= characters.length;
}

// Event Listeners
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage * charactersPerPage < characters.length) {
    currentPage++;
    renderPage(currentPage);
  }
});

// Live-updating clock in footer
function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  const date = now.toLocaleDateString('en-GB', options);
  footerClock.textContent = `${time} ${date}`;
}
setInterval(updateClock, 1000);
updateClock();

// Initialize
fetchCharacters();
