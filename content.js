const animals = [
    { name: 'Siberian Tiger', image: 'img/tiger.jpg', status: 'Critically Endangered', habitat: 'Forests of Russia', link: 'tiger.html' },
    { name: 'Vaquita', image: 'img/vaquita.jpg', status: 'Critically Endangered', habitat: 'Gulf of California, Mexico', link: 'vaquita.html' },
    { name: 'Amur Leopard', image: 'img/Amur Leopard.jpg', status: 'Critically Endangered', habitat: 'Russian Far East and Northeast China', link: 'leopard.html' },
    { name: 'Sumatran Orangutan', image: 'img/Sumatran Orangutan.jpg', status: 'Critically Endangered', habitat: 'Sumatra, Indonesia', link: 'orangutan.html' },
    { name: 'Black Rhino', image: 'img/Rhino.jpg', status: 'Critically Endangered', habitat: 'Eastern and Southern Africa', link: 'rhino.html' },
    { name: 'Mountain Gorilla', image: 'img/Gorilla.jpg', status: 'Endangered', habitat: 'Volcanic mountains of Central Africa', link: 'gorilla.html' },
    { name: 'Sumatran Tiger', image: 'img/s-tiger.jpg', status: 'Critically Endangered', habitat: 'Sumatra, Indonesia', link: 's-tiger.html' },
    { name: 'African Wild Dog', image: 'img/dog.jpg', status: 'Endangered', habitat: 'Botswana, Zimbabwe, South Africa, and Tanzania', link: 'dog.html' },
    { name: 'Snow Leopard', image: 'img/s-leopard.jpg', status: 'Endangered', habitat: 'China, India, Nepal, Pakistan, and Mongolia', link: 's-leopard.html' },
    { name: 'Markhor', image: 'img/markhor.jpg', status: 'Endangered', habitat: 'Central Asia, Pakistan, and Afghanistan', link: 'marhkor.html' },
    { name: 'Philippine Eagle', image: 'img/eagle.jpg', status: 'Critically Endangered', habitat: 'Forests of Luzon, Leyte, Samar, and Mindanao', link: 'eagle.html' },
    { name: 'Spoon-Billed Sandpiper', image: 'img/sandpiper.jpg', status: 'Critically Endangered', habitat: 'Russia, Southeast Asia', link: 'sandpiper.html' },
    { name: 'Northern Bald Ibis', image: 'img/Bald.jpg', status: 'Critically Endangered', habitat: 'Morocco and Syria', link: 'bald.html' },
    { name: 'Hawksbill Sea Turtle', image: 'img/turtle.jpg', status: 'Critically Endangered', habitat: 'Atlantic, Pacific, and Indian Oceans', link: 'turtle.html' },
    { name: 'Gharial', image: 'img/Gharialjpg.jpg', status: 'Endangered', habitat: 'India, Nepal, and Bhutan', link: 'gharial.html' },
  ];
  
  let currentPage = 1;
  const cardsPerPage = 12;
  const totalPages = Math.ceil(animals.length / cardsPerPage);
  
  function renderCards(page) {
    const start = (page - 1) * cardsPerPage;
    const end = page * cardsPerPage;
    const animalsToDisplay = animals.slice(start, end);
  
    const animalsGrid = document.getElementById('animalsGrid');
    animalsGrid.innerHTML = '';
  
    animalsToDisplay.forEach(animal => {
      const card = document.createElement('a');
      card.href = animal.link;
      card.className = 'animal-card';
  
      card.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}" loading="lazy" />
        <div class="card-content">
          <h2>${animal.name}</h2>
          <span class="status">${animal.status}</span>
          <p>Habitat: ${animal.habitat}</p>
        </div>
      `;
  
      animalsGrid.appendChild(card);
    });
  
    // Update page numbers
    document.getElementById('pageNumbers').innerHTML = `Page ${page} of ${totalPages}`;
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      renderCards(currentPage);
    }
  }
  
  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      renderCards(currentPage);
    }
  }
  
  // Initial render
  renderCards(currentPage);
  