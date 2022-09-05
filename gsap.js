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

