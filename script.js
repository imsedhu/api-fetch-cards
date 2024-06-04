
/* const apiUrl = 'https://fakestoreapi.com/products'; */

/* fetch(apiUrl)
  .then((res)=>res.json())
  .then(data=>console.log(data))
  .catch(err=>console.log('error', err)); */

async function fetchApi(apiUrl){
  try{
    let res = await fetch(apiUrl);
    let data= await res.json();
    console.log(data);
  }catch(err){
    console.log('error', err);
  }
}  


async function cardRender() {
  
  const data = await fetchApi('https://fakestoreapi.com/products');

  data.forEach(item=>{
    const container = document.querySelector('.cards-container');
    container.innerHTML = 
    `
      <img src=${item.image} alt="image">
      <h1>${item.title}</h1>
      <h2>${item.price}</h2>
    `
  })
}

cardRender();