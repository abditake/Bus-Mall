`use strict`

// global variables

let votesAllowed = 2




// product storage

let allProduct = [];


// dom references

let myContainer = document.getElementById('grid1');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
// let resultsBtn = document.getElementById('show-results-btn');
// let showResults = document.getElementById('display-results');

let ctxWindow = document.getElementById('mychart');



// constructor

function Products(name, fileExtension = 'jpg') {
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
  return Math.floor(Math.random() * allProduct.length);
}


let allProductIndex = [];  // hint for lab today 6 numbers for 2 unique numbers

// queue first in first out -[1,2,3,4,5,6] 
// the array is outside function change something around that??

function renderProduct() {

  //  what i first had i was going to filter than add another random number is the new one added was the same as the previous one
  // for(let i = 0; i<allProductIndex.length;i++)
  //   if(allProductIndex[i] === allProductIndex[i]){
  //     let allProductIndex = allProductIndex.filter 
  //   }


  while (allProductIndex.length < 6) {
    let randomNum = getRandomIndex(); // 2 true
    while (!allProductIndex.includes(randomNum)) {
      // includes return boolean
      allProductIndex.push(randomNum);
    }
  }
  console.log(allProductIndex);

  // pop only removes from the back and shift removes from the front 
  let productOneIndex = allProductIndex.shift();
  let productTwoIndex = allProductIndex.shift();
  let productThreeIndex = allProductIndex.shift();

  console.log(allProductIndex);
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

function handleClick(event) {
  votesAllowed--;

  let clickedImg = event.target.alt;

  for (let i = 0; i < allProduct.length; i++) {
    if (clickedImg === allProduct[i].name) {
      allProduct[i].clicks++;
    }
  }

  renderProduct();

  if (votesAllowed === 0) {
    myContainer.removeEventListener('click', handleClick);

    renderChart();
  }


}

function renderChart() {
  let allProductNames = [];
  let allProductClicks = [];
  let allProductViews = [];

  for (let i = 0; i < allProduct.length; i++) {
    allProductNames.push(allProduct[i].name);
    allProductClicks.push(allProduct[i].clicks);
    allProductViews.push(allProduct[i].views);
  }


  let myObj = {
    type: 'bar',
    data: {
      labels: allProductNames,
      datasets: [{
        label: '# of clicks',
        data: allProductClicks,
        backgroundColor: [
          'blue'
        ],
        borderColor: [
          'blue'
        ],
        borderWidth: 1
      },
      {
        label: '# of views',
        data: allProductViews,
        backgroundColor: [
          'red'
        ],
        borderColor: [

          'red'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

  }
  const myChart = new Chart(ctxWindow, myObj);
}

myContainer.addEventListener('click', handleClick);


