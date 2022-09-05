// IMAGE SLIDER //
const slideBtns = document.querySelectorAll('[data-slideBtn]');
const slideContainer = document.querySelector('[data-slideContainer]');
const slides = [...document.querySelectorAll('[data-slide]')];
let currentIndex = 0;
let isMoving = false;

// btn handle function
function handleSlideBtnClick(e) {
    if (isMoving) return;
    isMoving = true;
    e.currentTarget.id === "prev"
        ? currentIndex--
        : currentIndex++;

    slideContainer.style.transform = `translateX(-${currentIndex * slides[0].clientWidth}px)`
    removeDisabledAttribute(slideBtns);
    currentIndex === 0 && addDisabledAttribute([slideBtns[0]]);

}

// remove/add attirubte function
const removeDisabledAttribute = (els) => els.forEach(el => el.removeAttribute('disabled'));
const addDisabledAttribute = (els) => els.forEach(el => el.setAttribute('disabled', 'true'));

// event listeners
slideBtns.forEach(btn => btn.addEventListener('click', handleSlideBtnClick));


// transition end event
slideContainer.addEventListener('transitionend', () => isMoving = false);

// disable image drag events
document.querySelectorAll('[data-slide] img').forEach(img => img.ondragstart = () => false);

// intersection observer for slider
const slideObserver = new IntersectionObserver((slide) => {
    if (slide[0].isIntersecting) {
        addDisabledAttribute([slideBtns[1]]);
    }
}, { threshold: .75 });

slideObserver.observe(slides[slides.length - 1]);




const parallaxContainer = document.getElementById(".parallax")


gsap.from("#header-1", { opacity: 0, duration: 1 });
gsap.from("#book-trip-button", { opacity: 0, duration: 2 });

gsap.from("#headline-1", {
    opacity: 0, yPercent: 100,
    scrollTrigger: {
        trigger: "#headline-1",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        toggleActions: "restart pause reverse pause",
    }
})

gsap.from("#slider", {
    opacity: 0, yPercent: 100,
    scrollTrigger: {
        trigger: "#slider",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        toggleActions: "restart pause reverse pause",
    }
})

gsap.from("#map", {
    opacity: 0, xPercent: 50,
    scrollTrigger: {
        trigger: "#map",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        toggleActions: "restart pause reverse pause",
    }
})
gsap.from("#contact-us", {
    opacity: 0, xPercent: -50,
    scrollTrigger: {
        trigger: "#contact-us",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        toggleActions: "restart pause reverse pause",
    }
})

