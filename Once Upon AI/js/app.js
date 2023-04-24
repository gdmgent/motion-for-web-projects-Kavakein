let images = gsap.utils.toArray("img");

images.forEach((img) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      toggleActions: "play reverse plat reset",
      start: "top 80%",
      end: "bottom 20%",
    },
    duration: 0.5,
    x: 200,
    opacity: 0,
  });
});

let hoofdstuk = gsap.utils.toArray("img");

images.forEach((img) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: chapters,
      toggleActions: "play reverse plat reset",
      start: "top 80%",
      end: "bottom 20%",
    },
    duration: 0.5,
    y: 200,
    opacity: 0,
  });
});
