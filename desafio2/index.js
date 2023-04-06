import ProductManager from "./src/managers/ProductManager.js";

const manager = new  ProductManager();


const env = async ()=>{
     let Product = {
        
        title:"Mouse inalambrico",
        description:"mouse con conexión,por medio de bluetooth",
        price:600,
        thumbnail:"imagen",
        code:"dns567",
        stock:19
    };
  
   

    let result  = await manager.addProducts(Product);
     console.log(result);   

     let products = await manager.getProducts();
     console.log(products)
}  



env()