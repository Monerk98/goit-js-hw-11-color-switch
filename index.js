const colors = [
    '#F9F9F9',
    '#2156F3',
    '#4CAF50',
    '#FF4500',
    '#009688',
    '#795548',
    '#745702',
    '#8868377'
  ];
  
  

  
let start = document.querySelector('button[data-action="start"]')
let stop = document.querySelector('button[data-action="stop"]')
let back = document.querySelector('.body')


  start.addEventListener('click', turnOn);
  stop.addEventListener('click', turnOff);
  
  
  
  const randomInterval  = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const colorL = colors.length -1;
  
  let inter = null;
  let currentTime = null;
  
  function turnOn(){
    inter  = setInterval(() => {
    back.style.backgroundColor =
    colors[randomInterval (0, colorL)];      
    }, 500);
  }
  
  
  function turnOff(){
  clearInterval(inter)
  clearInterval(currentTime)  
  }