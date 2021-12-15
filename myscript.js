const sidePhotos = document.querySelector('.sidePhotos');
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let itemsContent = '';
let elementActive = 1;


for(let i=0; i<items.length; i++){
    itemsContent += `
      <div class="ms_mainPhoto col-10" id="item-${i}">
          <img src="${items[i]}">
      </div>
      <div class="ms_textContainer align-self-end m-5 text-end">
          <h1 class="title text-white d-flex justify-content-end me-3 id="title-${i}">${title[i]}</h1>
          <p class="text text-white d-flex justify-conetid="text-${i}> ${text[i]}</p>
      </div>`;
    

}

let itemsContainer  = document.querySelector('.ms_itemsContainer');
itemsContainer.innerHTML = itemsContent;

let itemActive = document.getElementById('item-'+elementActive);
itemActive.classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function(){
    if(elementActive!=0){
        elementActive--;
        itemActive.classList.remove('active');
        itemActive= document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
    
    }

    
   
});
next.addEventListener('click', function(){
    if(elementActive<4){
        elementActive++;
        itemActive.classList.remove('active');
        itemActive= document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
    }
});

