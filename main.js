var saveBtn = document.querySelector('.save-btn');
var newQualityBtn = document.querySelector('.new-quality-btn');
var starredIdeasBtn = document.querySelector('.starred-ideas-btn');
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')
var cardDisplayArea = document.querySelector('#card-display-area')
var starBtn = document.querySelectorAll('.stars')
var ideas = JSON.parse(localStorage.getItem('ideas')) || [];
 

window.addEventListener('load', loadCards);
saveBtn.addEventListener('click',saveBtnHelper)
// starBtn.addEventListener('click', starredIdeasBtn)


function starredIdeasBtn(e){
  e.preventDefault();

};
function newQualityBtn(e){
  e.preventDefault();

};

function loadCards() {
  ideas.forEach(function(idea){
    appendCard(idea.title, idea.body);
  })
}

//for delete use filter

// var numbers = [1,2,1,1];

// var mappedNumbers = numbers.map(function(number){
//   if(number === 1){
//     return number+1;
//   }})

// var filteredNumbers = numbers.filter(function(number){
//   if(number === 1) {
//     return number;
//   }
// })


function appendCard(title, body) {
  var newCard = new Idea(title, body)
  var cardToAppend = 
  `  <article class="card-display"> 
    <body>
    <header>
      <img src='images/star.svg' class="stars star-default">
      <img src='images/star-active.svg' class="stars star-active" onclick="">
    </header>
    <h3 class="card-title">${title}</h3>
      <p class="card-body">${body}</p>
     <footer>
      <h5 class="card-footer">Quality: Swill</h5>
     </footer>
    </body>
  </article>`
  cardDisplayArea.insertAdjacentHTML('afterbegin', cardToAppend);
};

function saveBtnHelper(e){
  e.preventDefault();
  var title = titleInput.value;
  var body = bodyInput.value;
  appendCard(title, body);
  saveCard(title, body)
}

function saveCard(title, body) {
  var newCard = new Idea(title, body)
  ideas.push(newCard);
  newCard.saveToStorage(ideas);
}









