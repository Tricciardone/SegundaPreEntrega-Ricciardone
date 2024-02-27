const products = [
  { id: "1", name: "Collar para perro", img: "", price: 100, category: "perro", description: "Un collar para perro", stock: 10 },
  { id: "2", name: "Juguete para gato", img: "url-img", price: 100, category: "gato", description: "Un juguete para gato", stock: 10 },
  { id: "3", name: "Correa para perro", img: "url-img", price: 100, category: "perro", description: "Una correa para perro", stock: 10 },
  { id: "4", name: "Cama para gato", img: "url-img", price: 100, category: "gato", description: "Una cama para gato", stock: 10 },
  { id: "5", name: "Juguete para perro", img: "url-img", price: 100, category: "perro", description: "Un juguete para perro", stock: 10 },
  { id: "6", name: "Rascador para gato", img: "url-img", price: 100, category: "gato", description: "Un rascador para gato", stock: 10 },
  { id: "7", name: "Collar de identificación", img: "url-img", price: 100, category: "perro", description: "Un collar de identificación para perro", stock: 10 },
  { id: "8", name: "Collar para gato", img: "url-img", price: 100, category: "gato", description: "Un collar para gato", stock: 10 },
  { id: "9", name: "Comedero para perro", img: "url-img", price: 100, category: "perro", description: "Un comedero para perro", stock: 10 },
];


export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => { 

  return new Promise( (resolve, reject) => { 

    if(products.length > 0) {

      const item = products.find( product => product.id === id );

      setTimeout(() => { 
        if(item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
       }, 2000)


    } else {
      reject("No hay productos")
    }
    
   } )
 }