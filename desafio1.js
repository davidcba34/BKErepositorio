class ProductManager{

    constructor () {
        this.products = []

    }
        
    getProducts (){
        return this.products
    }


    addProduct(title, description, price, thumbnail, code, stock){
        
        let id_product = this.getProducts().length;

        let product ={
            title:title,
            description : description,
            price: price,
            thumbnail : thumbnail,
            code : code,
            stock : stock,
            id : ++id_product,

            
        }
        this.products.push(product);
        return this.product
    }
        

    getProductsById(id_product){
         let product = this.products.find(
            (product)=> product.id === id_product
         )
            
        if (product){
        return product;
        } else {
        return console.log("not found");
        }
            
    }




}

const newProduct = new ProductManager();
newProduct.addProduct(
    "Mouse inalambrico",
    "mouse con conexión,por medio de bluetooth",
    600,
    "imaagen",
    "dns567",
    19
);
console.log(newProduct.getProducts());