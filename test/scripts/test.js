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
        let type = document.createElement('h3');
        let price = document.createElement('h4');
        let image = document.createElement('img');
  
        type.textContent = `${product.type}`;
        price.textContent = `Price: ${product.price}`;

        image.setAttribute('src', product.image);
        image.setAttribute('alt', `Product Type ${product.type}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');
 
        card.appendChild(type);
        card.appendChild(image);
        card.appendChild(price);
  
        cards.appendChild(card);
    });
}