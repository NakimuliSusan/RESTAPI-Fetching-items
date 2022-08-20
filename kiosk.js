// fetching products from the database list
fetch('http://localhost:3001/products')
    .then((response)=> response.json())
    .then((data)=> {
         console.log(data);
         const oneproduct = document.getElementById('products');
         data.forEach(product => {
            const listitem = document.createElement("li")
              listitem.className = "listitem"
              
              const list = document.createElement("p")
              
              list.innerText = `${product.name}`
              listitem.style.color = "white"
              listitem.appendChild(list)
              
              oneproduct.appendChild(listitem)
            })
        }
    )
    .catch((err)=> console.log('error: ', err))


fetch ('http://localhost:3001/products/fruits')
.then((response)=> response.json())
.then((data)=> {
     console.log(data);
     let fruitList =  document.getElementById('fruList');
     data.forEach(product => {
        const listitem = document.createElement("li")
          listitem.className = "listitem"
          
          const list = document.createElement("p")
          
          list.innerText = `${product.name}`
          listitem.style.color = "white"
          listitem.appendChild(list)
          
          fruitList.appendChild(listitem)
        })
    }

)
fetch ('http://localhost:3001/products/vegetables')
.then((response)=> response.json())
.then((data)=> {
     console.log(data);
     let vegList =  document.getElementById('vegList');
     data.forEach(product => {
        const listitem = document.createElement("li")
          listitem.className = "listitem"
          
          const list = document.createElement("p")
          
          list.innerText = `${product.name}`
          listitem.style.color = "white"
          listitem.appendChild(list)
          
          vegList.appendChild(listitem)
        })
    }

)
let title = document.getElementById('title')
title.style.textAlign = 'center';
title.style.color = 'green';
title.style.textTransform = 'uppercase';
title.style.fontFamily = 'Helvetica';
// let target =  document.querySelector('body')[0];
// target.style.backgroundImage = "url('fruits.jpeg')";
// target.style.backgroundSize = "100%";







