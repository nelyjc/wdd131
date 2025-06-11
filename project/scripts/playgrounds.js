document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("playground-container");
  const gridBtn = document.getElementById("grid-view-btn");
  const listBtn = document.getElementById("list-view-btn");
  const playgroundsURL = "data/playgrounds.json";

  // Toggle View
  if (gridBtn && listBtn && container) {
    gridBtn.addEventListener("click", () => {
      container.classList.add("grid-view");
      container.classList.remove("list-view");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    });

    listBtn.addEventListener("click", () => {
      container.classList.add("list-view");
      container.classList.remove("grid-view");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    });

    container.classList.add("grid-view");
    gridBtn.classList.add("active");
  }

  // Fetch and Display Playgrounds
  async function getPlaygroundsData() {
    try {
      const response = await fetch(playgroundsURL);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      displayPlaygrounds(data.playgrounds);
    } catch (error) {
      console.error("Could not fetch playground data:", error);
      container.innerHTML = '<p class="error-message">Playground info unavailable. Try again later.</p>';
    }
  }

  function displayPlaygrounds(playgroundsArray) {
    if (!container) return;

    container.innerHTML = ""; // clear container

    playgroundsArray.forEach(playground => {
      const card = document.createElement("div");
      card.classList.add("playground-card");

      card.innerHTML = `
        <img src="images/${playground.image}" alt="${playground.name}" class="playground-image" loading="lazy">
        <h2>${playground.name}</h2>
        <p><strong>Address:</strong> ${playground.address}</p>
        <p><strong>City:</strong> ${playground.city}</p>
        <p><strong>Features:</strong> ${playground.features}</p>
        <p>${playground.description}</p>
        <a href="${playground.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
      `;

      container.appendChild(card);
    });
  }

  // Footer Info
  const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedP = document.getElementById("lastModified");
  if (lastModifiedP) {
    lastModifiedP.textContent = `Last Updated: ${document.lastModified}`;
  }

  getPlaygroundsData();
});
