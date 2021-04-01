"use strict"

const thumbnails = document.querySelectorAll(".thumbnail");
const details = document.querySelectorAll(".detail");
const closes = document.querySelectorAll(".close");
const body = document.querySelector("body");

new Slider(".swiper-container");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", () => {
    details[i].classList.remove("hidden");
    body.style.overflow = "hidden"
  });
}

for (let i = 0; i < closes.length; i++) {
  closes[i].addEventListener("click", () => {
    details[i].classList.add("hidden");
    body.style.overflow = "visible"
    const videos = details[i].querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    })
  });
}


