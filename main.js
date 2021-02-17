'use strict'

const card = document.querySelector('.card');
const contaner = document.querySelector('.contaner');
const tilte = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
// moving animation event
contaner.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
  
});
// animation in
contaner.addEventListener('mouseenter', (e) => {
  card.style.transform = `none`;
  tilte.style.transform = `translateZ(150px)`;
  sneaker.style.transform = `translateZ(150px) rotateZ(-45deg)`;
  description.style.transform = `translateZ(125px)`;
  sizes.style.transform = `translateZ(100px)`;
  purchase.style.transform = `translateZ(75px)`;
})

// animation out
contaner.addEventListener('mouseleave', (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  tilte.style.transform = `translateZ(0px)`;
  sneaker.style.transform = `translateZ(0px) rotateZ(0)`;
  description.style.transform = `translateZ(0px)`;
  sizes.style.transform = `translateZ(0px)`;
  purchase.style.transform = `translateZ(0px)`;
})