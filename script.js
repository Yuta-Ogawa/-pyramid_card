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
  ['img/torannpu-illust10.png', 10],
  ['img/torannpu-illust11.png', 11],
  ['img/torannpu-illust12.png', 12],
  ['img/torannpu-illust13.png', 13],
  ['img/torannpu-illust14.png', 1],
  ['img/torannpu-illust15.png', 2],
  ['img/torannpu-illust16.png', 3],
  ['img/torannpu-illust17.png', 4],
  ['img/torannpu-illust18.png', 5],
  ['img/torannpu-illust19.png', 6],
  ['img/torannpu-illust20.png', 7],
  ['img/torannpu-illust21.png', 8],
  ['img/torannpu-illust22.png', 9],
  ['img/torannpu-illust23.png', 10],
  ['img/torannpu-illust24.png', 11],
  ['img/torannpu-illust25.png', 12],
  ['img/torannpu-illust26.png', 13],
  ['img/torannpu-illust27.png', 1],
  ['img/torannpu-illust28.png', 2],
  ['img/torannpu-illust29.png', 3],
  ['img/torannpu-illust30.png', 4],
  ['img/torannpu-illust31.png', 5],
  ['img/torannpu-illust32.png', 6],
  ['img/torannpu-illust33.png', 7],
  ['img/torannpu-illust34.png', 8],
  ['img/torannpu-illust35.png', 9],
  ['img/torannpu-illust36.png', 10],
  ['img/torannpu-illust37.png', 11],
  ['img/torannpu-illust38.png', 12],
  ['img/torannpu-illust39.png', 13],
  ['img/torannpu-illust40.png', 1],
  ['img/torannpu-illust41.png', 2],
  ['img/torannpu-illust42.png', 3],
  ['img/torannpu-illust43.png', 4],
  ['img/torannpu-illust44.png', 5],
  ['img/torannpu-illust45.png', 6],
  ['img/torannpu-illust46.png', 7],
  ['img/torannpu-illust47.png', 8],
  ['img/torannpu-illust48.png', 9],
  ['img/torannpu-illust49.png', 10],
  ['img/torannpu-illust50.png', 11],
  ['img/torannpu-illust51.png', 12],
  ['img/torannpu-illust52.png', 13],
]);

const cardback = 'img/torannpu-illust54.png';

const pyramid = 7;


function shuffle(arr) {
  for(let i = arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] =[arr[i], arr[j]];
  }
  return arr;
}

const row1Card = cards.slice(0, pyramid);

const row2Card = cards.slice(pyramid, pyramid*2-1);
const row3Card = cards.slice(pyramid*2-1, pyramid*3-3);
const row4Card = cards.slice(pyramid*3-3, pyramid*4-6);
const row5Card = cards.slice(pyramid*4-6, pyramid*5-10);
const row6Card = cards.slice(pyramid*5-10, pyramid*6-15);
const row7Card = cards.slice(pyramid*6-15, pyramid*7-21);
const deck = cards.slice(pyramid*7-21, 52);

// 初期配置

// row1
for (let i = 0; i<row1Card.length; i++) {
  const img = document.createElement('img');
  img.src=row1Card[i][0];
  img.alt =row1Card[i][1];
  const li = document.createElement('li');
  li.className='row1card' + i;
  li.classList.add('open');
  li.appendChild(img);
  document.querySelector('.row1').appendChild(li);
}


// row2
for (let i = 0; i<row2Card.length; i++) {
  const img = document.createElement('img');
  img.src=cardback;
  
  const li = document.createElement('li');
  li.className='row2card' + i + ' back';
  li.appendChild(img);
  document.querySelector('.row2').appendChild(li);

  
  
  img.addEventListener('click', () => {
    const row1card0 = document.querySelector('.row1card0');
    const row1card1 = document.querySelector('.row1card1');
    const row1card2 = document.querySelector('.row1card2');
    const row1card3 = document.querySelector('.row1card3');
    const row1card4 = document.querySelector('.row1card4');
    const row1card5 = document.querySelector('.row1card5');
    const row1card6 = document.querySelector('.row1card6');
    if(row1card0.classList.contains('remove') &&row1card1.classList.contains('remove')){
      if(i=== 0) {
        img.src=row2Card[i][0];
        img.alt =row2Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row1card1.classList.contains('remove') && row1card2.classList.contains('remove')){
      if(i=== 1) {
        img.src=row2Card[i][0];
        
        img.alt =row2Card[i][1];
    

        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row1card2.classList.contains('remove') && row1card3.classList.contains('remove')){
      if(i=== 2) {
        img.src=row2Card[i][0];
       
        img.alt =row2Card[i][1];
      

        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row1card3.classList.contains('remove') && row1card4.classList.contains('remove')){
      if(i=== 3) {
        img.src=row2Card[i][0];
     
        img.alt =row2Card[i][1];
        console.log(img.alt)

        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row1card4.classList.contains('remove') && row1card5.classList.contains('remove')){
      if(i=== 4) {
        img.src=row2Card[i][0];
        img.alt =row2Card[i][1];
 

        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row1card5.classList.contains('remove') && row1card6.classList.contains('remove')){
      if(i=== 5) {
        img.src=row2Card[i][0];
      
        img.alt =row2Card[i][1];


        li.classList.remove('back');
        li.classList.add('open');
      }
    }
  });

}

// row3
for (let i = 0; i<row3Card.length; i++) {
  const img = document.createElement('img');
  img.src=cardback;
  
  const li = document.createElement('li');
  li.className='row3card' + i + ' back';
  li.appendChild(img);
  document.querySelector('.row3').appendChild(li);

  img.addEventListener('click', () => {
    const row2card0 = document.querySelector('.row2card0');
    const row2card1 = document.querySelector('.row2card1');
    const row2card2 = document.querySelector('.row2card2');
    const row2card3 = document.querySelector('.row2card3');
    const row2card4 = document.querySelector('.row2card4');
    const row2card5 = document.querySelector('.row2card5');
    
    if(row2card0.classList.contains('remove') &&row2card1.classList.contains('remove')){
      if(i=== 0) {
        img.src=row3Card[i][0];
        img.alt =row3Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row2card1.classList.contains('remove') && row2card2.classList.contains('remove')){
      if(i=== 1) {
        img.src=row3Card[i][0];
        img.alt =row3Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row2card2.classList.contains('remove') && row2card3.classList.contains('remove')){
      if(i=== 2) {
        img.src=row3Card[i][0];
 
        img.alt =row3Card[i][1];

        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row2card3.classList.contains('remove') && row2card4.classList.contains('remove')){
      if(i=== 3) {
        img.src=row3Card[i][0];
   
        img.alt =row3Card[i][1];
      

        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row2card4.classList.contains('remove') && row2card5.classList.contains('remove')){
      if(i=== 4) {
        img.src=row4Card[i][0];
  
        img.alt =row4Card[i][1];
 

        li.classList.remove('back');
        li.classList.add('open');
      }
    }
   
  });
}
// row4
for (let i = 0; i<row4Card.length; i++) {
  const img = document.createElement('img');
  img.src=cardback;
  
  const li = document.createElement('li');
  li.className='row4card' + i + ' back';
  li.appendChild(img);
  document.querySelector('.row4').appendChild(li);

  img.addEventListener('click', () => {
    const row3card0 = document.querySelector('.row3card0');
    const row3card1 = document.querySelector('.row3card1');
    const row3card2 = document.querySelector('.row3card2');
    const row3card3 = document.querySelector('.row3card3');
    const row3card4 = document.querySelector('.row3card4');
    
    if(row3card0.classList.contains('remove') &&row3card1.classList.contains('remove')){
      if(i=== 0) {
        img.src=row4Card[i][0];
        img.alt =row4Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row3card1.classList.contains('remove') && row3card2.classList.contains('remove')){
      if(i=== 1) {
        img.src=row4Card[i][0];
        img.alt =row4Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row3card2.classList.contains('remove') && row3card3.classList.contains('remove')){
      if(i=== 2) {
        img.src=row4Card[i][0];

        img.alt =row4Card[i][1];

        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row3card3.classList.contains('remove') && row3card4.classList.contains('remove')){
      if(i=== 3) {
        img.src=row4Card[i][0];
    
        img.alt =row4Card[i][1];


        li.classList.remove('back');
        li.classList.add('open');
      }
    }
  });
}
// row5
for (let i = 0; i<row5Card.length; i++) {
  const img = document.createElement('img');
  img.src=cardback;
  
  const li = document.createElement('li');
  li.className='row5card' + i + ' back';
  li.appendChild(img);
  document.querySelector('.row5').appendChild(li);

  img.addEventListener('click', () => {
    const row4card0 = document.querySelector('.row4card0');
    const row4card1 = document.querySelector('.row4card1');
    const row4card2 = document.querySelector('.row4card2');
    const row4card3 = document.querySelector('.row4card3');
  
    
    if(row4card0.classList.contains('remove') &&row4card1.classList.contains('remove')){
      if(i=== 0) {
        img.src=row5Card[i][0];
        img.alt =row5Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row4card1.classList.contains('remove') && row4card2.classList.contains('remove')){
      if(i=== 1) {
        img.src=row5Card[i][0];
        img.alt =row5Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row4card2.classList.contains('remove') && row4card3.classList.contains('remove')){
      if(i=== 2) {
        img.src=row5Card[i][0];
        img.alt =row5Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
  });
}
// row6
for (let i = 0; i<row6Card.length; i++) {
  const img = document.createElement('img');
  img.src=cardback;
  
  const li = document.createElement('li');
  li.className='row6card' + i + ' back';
  li.appendChild(img);
  document.querySelector('.row6').appendChild(li);

  img.addEventListener('click', () => {
    const row5card0 = document.querySelector('.row5card0');
    const row5card1 = document.querySelector('.row5card1');
    const row5card2 = document.querySelector('.row5card2');
   
    
    if(row5card0.classList.contains('remove') &&row5card1.classList.contains('remove')){
      if(i=== 0) {
        img.src=row6Card[i][0];
        img.alt =row6Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
    if(row5card1.classList.contains('remove') && row5card2.classList.contains('remove')){
      if(i=== 1) {
        img.src=row6Card[i][0];
        img.alt =row6Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }
  });
}
// row7
for (let i = 0; i<row7Card.length; i++) {
  const img = document.createElement('img');
  img.src=cardback;
  
  const li = document.createElement('li');
  li.className='row7card' + i + ' back';
  li.appendChild(img);
  document.querySelector('.row7').appendChild(li);

  img.addEventListener('click', () => {
    const row6card0 = document.querySelector('.row6card0');
    const row6card1 = document.querySelector('.row6card1');
  
    
    if(row6card0.classList.contains('remove') &&row6card1.classList.contains('remove')){
      if(i=== 0) {
        img.src=row7Card[i][0];
        img.alt =row7Card[i][1];
        li.classList.remove('back');
        li.classList.add('open');
      }
    }

  });
}
 

// 山札

const deckback = document.querySelector('.deckback');
const img = document.createElement('img');
img.src=cardback;
deckback.appendChild(img);



  
  deckback.addEventListener('click', () => {
  const deckopen = document.querySelector('.deckopen');
  const li = document.createElement('li');
  const img = document.createElement('img');
    li.className='deckopen';
    li.appendChild(img);
    deckopen.appendChild(li);
  img.src=deck[0][0];
  img.alt =deck[0][1];
});
deckback.addEventListener('click', () => {
  const deckopen = document.querySelector('.deckopen');
  const li = document.createElement('li');
  const img = document.createElement('img');
    li.className='deckopen';
    li.appendChild(img);
    deckopen.appendChild(li);
  img.src=deck[1][0];
  img.alt =deck[1][1];
});




let cols = document.querySelectorAll('li');


for (let i = 0; i < 27; i++) {
cols[i].addEventListener('click', () => {
 

      if(cols[i].classList.contains('open')){
    
        cols[i].classList.toggle('choice');
        
        if(cols[i].classList.contains('choice')) {
          let el = document.querySelectorAll(".choice >img");
          let choice = document.querySelectorAll('.choice');
          
   
    for(let key of Object.keys(el)) {
      console.log(key);
 
                         if(key > 1){
                          
                           break;
                          }
                         
                          if(parseInt(el[0].alt) ===13){
                     
                           
                            choice[0].classList.add('remove');
                            choice[0].classList.remove('choice');
                            
                            break;
                           
                      
                          }else{
                            
                            let sum = 0;
                            sum = parseInt(el[0].alt);
                            sum += parseInt(el[key].alt);


                               if(sum === 13) {
                               
                                 
                                 choice[0].classList.add('remove');
                                 choice[1].classList.add('remove');
                                 choice[0].classList.remove('choice');
                                 choice[1].classList.remove('choice');
           
                                 break;
                          }
                            }
                          }

        }
    
    
          
    
          
        
      }
    });
  }
   









// // 13になるカードを除去
//   let cols = document.querySelectorAll('li');
//     function onPageLoad() {
//       for (let i = 0; i < 27; i++) {
//         cols[i].addEventListener('click', ListItemClick, false);
       
//       }
//     }
    
//     function ListItemClick(event) {
//       if(this.classList.contains('open')){

//         this.classList.toggle('choice');
//         const img = document.querySelectorAll('li> img');
        
  

          
            
//             let el = document.querySelectorAll(".choice >img");
//             let choice = document.querySelectorAll('.choice');
            
//            Object.keys(el).forEach(function(key) {
//              if(key > 1){return;}
//               if(parseInt(el[0].alt) ===13){
         
                
//                 choice[0].classList.add('remove');
                
//                 return;
               
          
//               }else{
//                 let sum = parseInt(el[0].alt);
               
                
//                    sum += parseInt(el[key].alt);
               
//                    console.log(sum);
            
//                    if(sum === 13) {
                     
//                     //  el[0].style.visibility = "hidden";
//                     //  el[1].style.visibility = "hidden";
//                      choice[0].classList.add('remove');
//                      choice[1].classList.add('remove');
// return;
                   
//               }
//                 }
//               }, el);
  
          
  
          
//         }
//       }

  
// onPageLoad();

