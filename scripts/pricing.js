const urlgit = 'https://sonofalynch.github.io/venturecreations/data/products.json';
const cards = document.querySelector('#cards');

async function getPricingData() {
    const response = await fetch(urlgit);
    const data = await response.json();
    displayPricing(data.shirts);
}

getPricingData();

const displayPricing = (shirts) => {
    shirts.forEach((product) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let price = document.createElement('h4');
        let image = document.createElement('img');
  
        name.textContent = `${product.name}`;
        price.textContent = `Walk-In - Half Day: ${product.price}`;

        image.setAttribute('src', product.image);
        image.setAttribute('alt', `Vehicle Type ${product.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
  
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(image);
  
        cards.appendChild(card);
    });
}