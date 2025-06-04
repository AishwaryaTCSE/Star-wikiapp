const footerClock = document.getElementById('footer-clock');
const detailContainer = document.getElementById('character-detail');

// Live-updating footer clock
function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  const date = now.toLocaleDateString('en-GB', options);
  footerClock.textContent = `${time} ${date}`;
}
setInterval(updateClock, 1000);
updateClock();

// Extract ID from URL
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('id');

// Fetch character details
async function fetchCharacterDetails(id) {
  try {
    const res = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`);
    const char = await res.json();

    detailContainer.innerHTML = `
      <img src="${char.image}" alt="${char.name}" style="max-width:300px"/>
      <h2>${char.name}</h2>
      <p><strong>Gender:</strong> ${char.gender || 'Unknown'}</p>
      <p><strong>Species:</strong> ${char.species || 'Unknown'}</p>
      <p><strong>Homeworld:</strong> ${char.homeworld || 'Unknown'}</p>
      <p><strong>Affiliations:</strong> ${char.affiliations?.join(', ') || 'None'}</p>
      <p><strong>Height:</strong> ${char.height || 'N/A'} cm</p>
      <p><strong>Mass:</strong> ${char.mass || 'N/A'} kg</p>
      <p><strong>Eye Color:</strong> ${char.eyeColor || 'Unknown'}</p>
      <p><strong>Hair Color:</strong> ${char.hairColor || 'Unknown'}</p>
      <p><strong>Skin Color:</strong> ${char.skinColor || 'Unknown'}</p>
    `;
  } catch (error) {
    detailContainer.innerHTML = '<p>Failed to load character details.</p>';
    console.error(error);
  }
}

if (characterId) {
  fetchCharacterDetails(characterId);
} else {
  detailContainer.innerHTML = '<p>Invalid character ID.</p>';
}
