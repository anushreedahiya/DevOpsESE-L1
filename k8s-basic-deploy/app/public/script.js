async function loadNews() {
  try {
    const res = await fetch('/api/news');
    const data = await res.json();
    const container = document.getElementById('news-container');
    container.innerHTML = '';

    data.articles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" />
        <div class="news-card-content">
          <h3>${article.title}</h3>
          <p>${article.description}</p>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading news:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadNews);
