// let owlCarouselConfig_one_and_Half_Box = {
//   0: {
//     items: 1,
//     center: true,
//     stagePadding: 40,
//   },
//   576: {
//     items: 1,
//     center: true,
//     stagePadding: 150,
//   },
//   768: {
//     items: 1,
//     center: true,
//     stagePadding: 150,
//   },
//   992: {
//     items: 1,
//     center: true,
//     stagePadding: 180,
//   },
//   1200: {
//     items: 1,
//     center: true,
//     stagePadding: 230,
//   },
//   1440: {
//     items: 1,
//     center: false,
//     stagePadding: 380,
//   },
// };
// let owlConfig_two_and_half_box = {
//   0: {
//     items: 1.1,
//   },
//   576: {
//     items: 1.2,
//   },
//   768: {
//     items: 2.5,
//   },
//   992: {
//     items: 2.5,
//   },
// };

var activeIndex = 0;
var ticking = false;
var lastScrollY = window.scrollY;
var vh = window.innerHeight;
var imgs = document.querySelectorAll(".dac-parralex-effect");
var header = document.querySelector(".dac-sticky-header");
var cards = document.querySelectorAll(".events_card");
var hamburger = document.querySelector(".mobile-hambuger");
var mobileMenu = document.getElementById("mobileMenu");
var closeButton = document.querySelector(".menu-close");
header.classList.remove("hide");

document.addEventListener("DOMContentLoaded", () => {
  //   Initialize Owl Carousel
  // handleOWLcarous("#carousel-container", owlCarouselConfig_one_and_Half_Box);
  // handleOWLcarous("#owl-carousel-one", owlConfig_two_and_half_box);
  // handleOWLcarous("#owl-carousel-two", owlConfig_two_and_half_box);
  //sticky header functionality

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY == 0) {
      header.classList.remove("hide");
    }

    if (currentScrollY > lastScrollY && currentScrollY > 10) {
      // Scrolling down - hide header
      header.classList.add("hide");
    }
    if ((currentScrollY || lastScrollY) > 50) {
      header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;

    // Parallax effect for main image

    const image = document.querySelector(".main-image");
    const speed = 0.2;
    const offset = window.scrollY * speed;
    if (image) {
      image.style.transform = `translateY(${offset}px)`;
    }
  });

  // Mobile menu toggle

  if (mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      document.body.classList.add("no-scroll");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      mobileMenu?.classList.remove("open");
    }
  });

  // Intersection Observer for fade-in effect

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  if (window !== undefined) {
    setTimeout(() => {
      document.querySelectorAll("section").forEach((sec) => {
        sec.classList.add("fade-in-section");
        observer.observe(sec);
      });
    }, 5000);
  }

  // Card carousel functionality

  setTimeout(() => {
    document.querySelectorAll(".card__link").forEach((link) => {
      console.log(link);
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // Remove active class from current card
        cards[activeIndex].classList.remove("active");
        cards[activeIndex].classList.add("behind");

        // Move to next card
        activeIndex = (activeIndex + 1) % cards.length;

        // Show next card
        cards[activeIndex].classList.add("active");
        cards[activeIndex].classList.remove("behind");
      });
    });
  }, 6000);

  // Video play button functionality
  const video = document.getElementById("myVideo");
  const playBtn = document.getElementById("playBtn");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      video.play();
      playBtn.classList.add("hidden");
    });
  }
  if (video) {
    video.addEventListener("pause", () => {
      playBtn.classList.remove("hidden");
    });
  }

  // window.addEventListener("scroll", () => {
  //   if (!ticking) {
  //     requestAnimationFrame(updateParallax);
  //     ticking = true;
  //   }
  // });

  // window.addEventListener("resize", updateParallax);
  // updateParallax();
});

// function updateParallax() {
//   if (imgs) {
//     imgs.forEach((img) => {
//       const rect = img.parentElement.getBoundingClientRect();
//       if (rect.bottom <= 0 || rect.top >= vh) return;

//       const progress = rect.top / vh;
//       const yOffset = progress * -100; // adjust depth/speed
//       img.style.transform = `translate(0%, ${yOffset}px)`;
//     });
//   }
//   ticking = false;
// }

// function handleOWLcarous(className, responsive) {
//   let isRTL = $("html").attr("lang") === "ar";

//   // Destroy existing carousel before reinitializing
//   let carousel = $(className);
//   if (carousel.hasClass("owl-loaded")) {
//     carousel.trigger("destroy.owl.carousel").removeClass("owl-loaded");
//     carousel.find(".owl-stage-outer").children().unwrap();
//   }

//   let checkIfClassNameExists = $(className).length > 0;

//   if (checkIfClassNameExists) {
//     $(className).owlCarousel({
//       loop: true,
//       responsiveClass: true,
//       nav: false,
//       dots: false,
//       autoplay: true,
//       autoplayTimeout: 5000,
//       margin: 24,
//       responsive: responsive,
//       rtl: isRTL,
//       autoplayTimeout: 3000, // ⏱ Delay between slides (ms)
//       autoplaySpeed: 1000, // 🎞 Slide animation speed
//       autoplayHoverPause: true,
//     });
//   }
// }
