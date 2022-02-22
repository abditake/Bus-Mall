`use strict`

// global variables

let votesAllowed = 5




// product storage

let allProduct = [];


// dom references

let myContainer = document.getElementById('grid-container');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let resultsBtn = document.getElementById('show-results-btn');
let showResults = document.getElementById('display-results');



// constructor

function Products(name,fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.src = `assets/${name}.${fileExtension}`;

  allProduct.push(this);

}

new Products('bag');
new Products('banana')
new Products('bathroom');
new Products('boots')
new Products('breakfast');
new Products('bubblegum')
new Products('chair');
new Products('cthulhu')
new Products('dog-duck');
new Products('dragon')
new Products('pen');
new Products('pet-sweep')
new Products('scissors');
new Products('shark')
new Products('sweep', 'png');
new Products('tauntaun')
new Products('unicorn');
new Products('water-can')
new Products('wine-glass');

console.log(allProduct);

// executable code

function getRandomIndex() {
  return Math.floor(Math.random()* allProduct.length);
}


let allProductIndex = [];  // hint for lab today 6 numbers for 2 unique numbers

// queue first in first out -[1,2,3,4,5,6] 
// the array is outside function change something around that??

function renderProduct(){
  
    // for(let i = 0; i<allProductIndex.length;i++)
    //   if(allProductIndex[i] === allProductIndex[i]){
    //     let allProductIndex = allProductIndex.filter 
    //   }

   
    
    while(allProductIndex.length < 3){
      let randomNum = getRandomIndex(); // 2 true
      while(!allProductIndex.includes(randomNum)){
        // includes return boolean
        allProductIndex.push(randomNum);
      }
    }
  let productOneIndex = allProductIndex.pop();
  let productTwoIndex = allProductIndex.pop();
  let productThreeIndex = allProductIndex.pop();

  img1.src = allProduct[productOneIndex].src;
  img1.alt = allProduct[productOneIndex].name;
  allProduct[productOneIndex].views++;

  img2.src = allProduct[productTwoIndex].src;
  img2.alt = allProduct[productTwoIndex].name;
  allProduct[productTwoIndex].views++;

  img3.src = allProduct[productThreeIndex].src;
  img3.alt = allProduct[productThreeIndex].name;
  allProduct[productThreeIndex].views++;
  
}

renderProduct();


//event handler

function handleClick(event){
  votesAllowed--;

  let clickedImg = event.target.alt;

  for(let i = 0; i<allProduct.length;i++){
    if(clickedImg === allProduct[i].name){
      allProduct[i].clicks++;
    }
  }

  renderProduct();

  if(votesAllowed === 0){
    myContainer.removeEventListener('click',handleClick);
  }

}



function handleShowResults(event){
  if(votesAllowed === 0){
    for(let i = 0; i < allProduct.length; i++){
      let li = document.createElement('li');
      li.textContent = `${allProduct[i].name} was viewed ${allProduct[i].views} times, and was voted for ${allProduct[i].clicks} times.`;
      showResults.appendChild(li);
    }
      
  }

}


myContainer.addEventListener('click',handleClick);

resultsBtn.addEventListener('click',handleShowResults);
