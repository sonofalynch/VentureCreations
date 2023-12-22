const urlgit = 'https://sonofalynch.github.io/VentureCreations/pricing.json';
const cards = document.querySelector('#cards');

async function getPricingData() {
    const response = await fetch(urlgit);
    const data = await response.json();
    displayPricing(data.pricing);
}

getPricingData();

const displayPricing = (pricing) => {
    pricing.forEach((cost) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let price = document.createElement('h4');
        let image = document.createElement('img');
  
        name.textContent = `${cost.name}`;
        price.textContent = `Walk-In - Half Day: ${cost.price}`;

        image.setAttribute('src', cost.image);
        image.setAttribute('alt', `Vehicle Type ${cost.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
  
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(image);
  
        cards.appendChild(card);
    });
}