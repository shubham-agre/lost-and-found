// Add an event listener to each news card title
const newsCards = document.querySelectorAll('.news-card');

newsCards.forEach(card => {
  const title = card.querySelector('.news-title');
  const description = card.querySelector('.news-description');

  title.addEventListener('click', () => {
    description.classList.toggle('show-description');
  });
});



