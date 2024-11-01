// value
function toggleDetails(item) {
    const details = item.querySelector(".details");
    const icon = item.querySelector(".icon");
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        icon.textContent = "-";
    } else {
        details.style.display = "none";
        icon.textContent = "+";
    }
}
// objective part 
function revealOnScroll() {
    const title = document.querySelector('.section-title');
    const cards = document.querySelectorAll('.objective-card');

    if (title.getBoundingClientRect().top < window.innerHeight - 50) {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }

    cards.forEach((card, index) => {
      const delay = index * 150;
      if (card.getBoundingClientRect().top < window.innerHeight - 50) {
        setTimeout(() => {
          card.classList.add('active');
        }, delay);
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();