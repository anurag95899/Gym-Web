gsap.to("#hero", {
    scrollTrigger: {
      trigger: "#video",
      scroller: "#main",
      start: "top 45%",
      end: "top 10%",
      scrub: 2
    },
    opacity: 0,
  })