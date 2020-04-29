'use strict';

const cards = shuffle([
  ['img/torannpu-illust1.png', 1],
  ['img/torannpu-illust2.png', 2],
  ['img/torannpu-illust3.png', 3],
  ['img/torannpu-illust4.png', 4],
  ['img/torannpu-illust5.png', 5],
  ['img/torannpu-illust6.png', 6],
  ['img/torannpu-illust7.png', 7],
  ['img/torannpu-illust8.png', 8],
  ['img/torannpu-illust9.png', 9],
  ['img/torannpu-illust10.png',10],
  ['img/torannpu-illust11.png', 11],
  ['img/torannpu-illust12.png', 12],
  ['img/torannpu-illust13.png', 13],
]);


const pyramid = 5;


// function init() {
//   for (let i = 1; i<cards.length; i++){
//     document.getElementById('stage').appendChild(createCard(i));
//   }
// }
// init();

// function createCard(num) {
//   let container;
//   let card;
//   let inner;
//   inner = '<div value=' + num + ' class="card-front"></div><div class="card-back"></div>';
//   card = document.createElement('div');
//   card.innerHTML = inner;
//   card.className = 'card';
//   container = document.createElement('div');
//   container.className = 'card-container';
//   container.appendChild(card);
//   return container;
// }
function shuffle(arr) {
  for(let i = arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] =[arr[i], arr[j]];
  }
  return arr;
}

const row1Card = cards.slice(0, pyramid);
const row2Card = cards.slice(pyramid, pyramid*2-1);


for (let i = 0; i<row1Card.length; i++) {
  const img = document.createElement('img');
  img.src=row1Card[i][0];
  img.alt =row1Card[i][1];
  
  const li = document.createElement('li');
  li.className='row1card' + i;
  li.appendChild(img);
  document.querySelector('.row1').appendChild(li);
}

for (let i = 0; i<row2Card.length; i++) {
  const img = document.createElement('img');
  img.src=row2Card[i][0];
  img.alt =row2Card[i][1];
  
  const li = document.createElement('li');
  li.className='row2card' + i;
  li.appendChild(img);
  document.querySelector('.row2').appendChild(li);
}

 

  let cols = document.querySelectorAll('li');
    function onPageLoad() {
      for (let i = 0; i < row1Card.length; i++) {
        cols[i].addEventListener('click', ListItemClick, false);
        
      }
    }
    
    function ListItemClick(event) {
      this.classList.toggle('choice');
      const img = document.querySelectorAll('li> img');
      

        if(this.classList.contains('choice')) {
        
          
          let el = document.querySelectorAll(".choice >img");
          let choice = document.querySelectorAll('.choice');
          
         Object.keys(el).forEach(function(key) {
           if(key > 2){return;}
            if(parseInt(el[0].alt) ===13){
              el[0].style.visibility = "hidden";
              choice[0].classList.remove('choice');
             
        
            }else{
              let sum = parseInt(el[0].alt);
   
                 sum += parseInt(el[key].alt);
                 console.log(sum);
                 console.log(el);
                 if(sum === 13) {
                   
                   el[0].style.visibility = "hidden";
                   el[1].style.visibility = "hidden";
                   choice[0].classList.remove('choice');
                   choice[1].classList.remove('choice');
            }
              }
            }, el);

        }

        
      }
    
  
  
onPageLoad();











// console.log(s1);
// console.log(s1);
// sum = s1.value + s12.value;
// console.log(sum);
// for(let i = 0; i <2 i++) {

// }

// function choiceCard(card) {
//   if(firstCard !== null && secondCard !== null) {
//     return;
//   }
// }
  // li.addEventListener('click',() => {
  //   li.classList.toggle('choice');
  // });
  // s12.addEventListener('click',() => {
  //   s12.classList.toggle('choice');
  // });
  // s13.addEventListener('click',() => {
  //   s13.classList.toggle('choice');
  // });

  

  // const choice = document.querySelector('.choice');
  // console.log(li.classList.contains('choice'));
  // if (li.classList.contains('choice') === true && li.classList.contains('choice') === true){
  //   console.log(choice);
  //   if(li.value + li.value === 13) {
  //     choice.style.visibility = "hidden";
  //     choice.style.visibility = "hidden";
    
  //   }
  // }
