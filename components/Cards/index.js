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
//Program execution code begins here
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(hSuccess)
.catch(hError)


function CardCreator({headline,authorPhoto,authorName}) {
    const div = document.createElement('div');
    div.setAttribute('class','card');

    const div1 = document.createElement('div');
    div1.setAttribute('class','headline');
    div1.textContent = headline;

    const div2 = document.createElement('div');
    div2.setAttribute('class','author');


    const div2a = document.createElement('div');
    div2a.setAttribute('class','img-container');
    const img = document.createElement('img');
    img.src = authorPhoto;

    div2a.appendChild(img);
    const span = document.createElement('span');
    span.textContent = `By ${authorName}`;

    div2.append(div2a,span);

    div.append(div1,div2);
    console.log(div)

    return div;
}

function hSuccess(response) {
    const articles = response.data.articles;
    console.log(articles)
    let allArticles = [];

    for(let key in articles) {
        allArticles = [...allArticles,...articles[key]]
    }

    let Card;
    const cardDiv = document.querySelector(".cards-container")
    allArticles.forEach(article => {
         Card = CardCreator(article);
         cardDiv.appendChild(Card);
    })

}

function hError(e) {
    console.log(e)
}

