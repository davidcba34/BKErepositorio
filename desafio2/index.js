import ProductManager from "../desafio2/managers/ProductManager.js";

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
  
   

    let verProductos = await manager.getProducts(Product);
     console.log(verProductos);   
}  



 export default env()