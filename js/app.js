`use strict`

// global variables

let votesAllowed = 4




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


function renderProduct(){
  let productOneIndex = getRandomIndex();
  let productTwoIndex = getRandomIndex();
  let productThreeIndex = getRandomIndex();
  
    let allProductIndex = [productOneIndex,productTwoIndex,productThreeIndex]
    for (let i = 0; i < allProductIndex.length; i++) {
      let value = allProduct[i]
      if (valuesAlreadySeen.indexOf(value) !== -1) {
        return true
      }
      valuesAlreadySeen.push(value)
    }
    return false
  }

    

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