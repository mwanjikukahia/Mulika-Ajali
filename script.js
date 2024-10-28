function toggleMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  sideMenu.classList.toggle("open");
  overlay.classList.toggle("show");
}
// donate
function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');

  if (window.innerWidth > 768) {
    // Toggle side menu and overlay on larger screens
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('show');
  }
}
// NAV
let lastScrollTop = 0; // Store the last scroll position
    const topHeader = document.querySelector('.top-header'); // Select the top header

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Check if scrolling down
        if (currentScroll > lastScrollTop) {
            topHeader.style.top = '-50px'; // Adjust this value to hide the top header
        } else {
            topHeader.style.top = '0'; // Show the top header
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

// Counter animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 10000; // Adjust speed by changing this value
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });


  
     // Rotating Quotes JavaScript
     const quotes = [
        "\"A small action today can make a big impact tomorrow!\"",
        "\"Drive safe, save lives!\"",
        "\"Your safety is our priority.\"",
        "\"Join us in making roads safer for everyone.\""
    ];
    let quoteIndex = 0;

    function changeQuote() {
        document.getElementById("quote").innerText = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }

    setInterval(changeQuote, 3000); // Change quote every 3 seconds

 
    
      // get involved section
      const textElement = document.getElementById('dynamic-text');
      const iconElement = document.getElementById('dynamic-icon');
      const texts = [
          { text: "Volunteer", icon: "🤲", tooltip: "Join us as a volunteer." },
          { text: "Share safety tips", icon: "📢", tooltip: "Spread safety awareness." },
          { text: "Report incidents", icon: "⚠️", tooltip: "Help us keep roads safe." }
      ];
      let index = 0;
  
      setInterval(() => {
          textElement.textContent = texts[index].text;
          iconElement.textContent = texts[index].icon;
          textElement.setAttribute("data-tooltip", texts[index].tooltip);
          index = (index + 1) % texts.length;
      }, 3000);

    //   footer
    document.addEventListener('DOMContentLoaded', function() {
        const footerSections = document.querySelectorAll('.footer-section');
        footerSections.forEach((section, index) => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            setTimeout(() => {
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }, index * 300); // Delay each section
        });
    });
