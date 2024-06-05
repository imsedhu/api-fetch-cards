
/* https://jsonplaceholder.typicode.com/photos */

const apiUrl = 'https://fakestoreapi.com/products';

async function fetchApi(apiUrl){
  try{
    let res = await fetch(apiUrl);
    let data= await res.json();
    console.log(data);
    cardsRender(data)
  }catch(err){
    console.log('error', err);
  }
}  

fetchApi(apiUrl);

const container = document.querySelector('.cards-container')

function cardsRender(data){
  data.forEach(item=>{
    const div = document.createElement('div');
    const image = document.createElement('img');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');

    div.classList.add('card-box');
    image.classList.add('card-img');

    image.src= item.image;
    h1.textContent = item.title; 
    h3.innerText = `price: ${item.price}`

    div.appendChild(image);
    div.appendChild(h1);
    div.appendChild(h3);
    container.appendChild(div);

  })
}



