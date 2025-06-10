document.addEventListener('DOMContentLoaded', () => {
    const playgroundsContainer = document.querySelector('.playground-cards');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');
    const playgroundsURL = 'data/playgrounds.json';

    async function getPlaygroundsData() {
        try {
            const response = await fetch(playgroundsURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const jsonData = await response.json();
            displayPlaygrounds(jsonData.playgrounds);
        } catch (error) {
            console.error('Could not fetch playground data:', error);
            if (playgroundsContainer) {
                playgroundsContainer.innerHTML = '<p class="error-message">Sorry, playground information is currently unavailable. Please try again later.</p>';
            }
        }
    }

    function displayPlaygrounds(playgroundsArray) {
        if (!playgroundsContainer) {
            console.error('Playgrounds container not found in the DOM!');
            return;
        }
        playgroundsContainer.innerHTML = '';

        playgroundsArray.forEach(playground => {
            const card = document.createElement('div');
            card.classList.add('playground-card');

            const img = document.createElement('img');
            img.src = `images/${playground.image}`;
            img.alt = `${playground.name} Image`;
            img.classList.add('playground-image');
            img.loading = 'lazy';

            const name = document.createElement('h3');
            name.textContent = playground.name;

            const address = document.createElement('p');
            address.textContent = playground.address;

            const features = document.createElement('p');
            features.textContent = `Features: ${playground.features}`;

            const website = document.createElement('a');
            website.href = playground.website;
            website.textContent = "More Info";
            website.target = '_blank';
            website.rel = 'noopener noreferrer';

            const city = document.createElement('p');
            city.textContent = `City: ${playground.city}`;

            const description = document.createElement('p');
            description.textContent = playground.description;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(city);
            card.appendChild(features);
            card.appendChild(website);
            card.appendChild(description);

            playgroundsContainer.appendChild(card);
        });
    }

    if (gridViewBtn && listViewBtn && playgroundsContainer) {
        gridViewBtn.addEventListener('click', () => {
            playgroundsContainer.classList.remove('list-view');
            playgroundsContainer.classList.add('grid-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });

        listViewBtn.addEventListener('click', () => {
            playgroundsContainer.classList.remove('grid-view');
            playgroundsContainer.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });

        playgroundsContainer.classList.add('grid-view');
        gridViewBtn.classList.add('active');
    } else {
        console.warn('View toggle buttons or playgrounds container not found.');
    }

    // Year and last modified footer updates
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedP = document.getElementById('lastModified');
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Updated: ${document.lastModified}`;
    }

    getPlaygroundsData();
});
