import testimonials from "./modules/testimonials.js";

console.log("JS here...");

const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

let idx = 0;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  role.innerHTML = position;
  userName.innerHTML = name;
  if (idx > testimonials.length) {
    idx = 0;
  } else {
    idx++;
  }
};

updateTestimonial();

setInterval(updateTestimonial, 10000);
