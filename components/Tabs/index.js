// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const axios = require('axios');
const topics = document.querySelector('.topics')
axios.get('https://lambda-times-backend.herokuapp.com/topics')  
  .then(response => {
    response.data.topics.forEach(topic => topics.appendChild(createTab(topic)));

    })
      .catch(error => {
      console.error(error);
    });

  function createTab(topic){

    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    return tab;

    // const tab = document.createElement tab)
    // tab.setAttribute('class', 'tab')
    // tab.textContent = 'javascript'
    
    // const divTab2 = document.createElement(divTab2)
    // divTab2.setAttribute('class', 'tab')
    // divTab2.textContent = 'bootstrap'
    
    // const divTab3 = document.createElement(divTab3)
    // divTab3.setAttribute('class', 'tab')
    // divTab3.textContent = 'technology'
    
    // const divTab4 = document.createElement(divTab4)
    // divTab4.setAttribute('class', 'tab')
    // divTab4.textContent = 'jquery`'
    
    // const divTab5 = document.createElement(divTab5)
    // divTab5.setAttribute('class', 'tab')
    // divTab5.textContent = 'node.js'
    
    // tab.appendChild(divTab2)
    // tab.appendChild(divTab3)
    // tab.appendChild(divTab4)
    // tab.appendChild(divTab5)

    //return tab
}


//"javascript", "bootstrap", "technology", "jquery", "node.js"