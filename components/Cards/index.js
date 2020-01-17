// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const javascript = response.data.articles.javascript;
    javascript.forEach(item => {
        // console.log(item);
        injectCardsToHTML.append(createCards(item));
    })
    const bootstrap = response.data.articles.bootstrap;
    bootstrap.forEach(item => {
        injectCardsToHTML.append(createCards(item));
    })
    const technology = response.data.articles.technology;
    technology.forEach(item => {
        // console.log(item);
        injectCardsToHTML.append(createCards(item));
    })
    const jquery = response.data.articles.jquery;
    jquery.forEach(item => {
        // console.log(item);
        injectCardsToHTML.append(createCards(item));
    })
    const node = response.data.articles.node;
    node.forEach(item => {
        // console.log(item);
        injectCardsToHTML.append(createCards(item));
    })
})
.catch(err => {
    console.log("ERROR", err);
})


const injectCardsToHTML = document.querySelector('.cards-container')
function createCards(object){
    const cardMain = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    cardMain.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container')

    cardMain.append(headline);
    cardMain.append(author);
    author.append(imgCont);
    imgCont.append(image);
    author.append(authorName);

    headline.textContent = object.headline;
    image.src = object.authorPhoto;
    authorName.textContent = `By ${object.authorName}`;

    return cardMain;
};