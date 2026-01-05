document.addEventListener("DOMContentLoaded", function () {
  // Menu Mobile (Hamburger)
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // Navigasi Aktif Saat Scroll
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinksItems.forEach((link) => {
            link.classList.remove("active");
          });

          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(
            `.nav-links a[href="#${id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Slider Testimonial
  const track = document.querySelector(".testimonial-track");

  if (track) {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const cards = track.querySelectorAll(".testimonial-card");

    let currentIndex = 0;
    let cardWidth = 0;
    let slidesToScroll = 1;

    function updateSliderParams() {
      if (cards.length === 0) return;

      const cardStyle = window.getComputedStyle(cards[0]);
      cardWidth =
        cards[0].offsetWidth +
        parseInt(cardStyle.marginLeft) +
        parseInt(cardStyle.marginRight);

      const containerWidth = track.parentElement.offsetWidth;
      if (containerWidth > 1000) {
        slidesToScroll = 3;
      } else if (containerWidth > 700) {
        slidesToScroll = 2;
      } else {
        slidesToScroll = 1;
      }
    }

    function updateTrackPosition() {
      if (cards.length === 0) return;

      let maxIndex = cards.length - slidesToScroll;
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
      if (currentIndex < 0) {
        currentIndex = 0;
      }

      track.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;

      prevBtn.style.display = currentIndex === 0 ? "none" : "block";
      nextBtn.style.display = currentIndex >= maxIndex ? "none" : "block";
    }

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex++;
        updateTrackPosition();
      });

      prevBtn.addEventListener("click", () => {
        currentIndex--;
        updateTrackPosition();
      });
    }

    updateSliderParams();
    updateTrackPosition();
    window.addEventListener("resize", () => {
      updateSliderParams();
      updateTrackPosition();
    });
  }
});