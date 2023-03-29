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
        let titleValid = (product.title == null || product.title == '')
        let descriptionValid = (product.description == null || product.title == '')
        let priceValid = (product.price == null || product.price =='')
        let thumbnailValid = ( product.thumbnail == null || product.thumbnail == '')
        let codeValid = (product.code == null || product.code == '')
        let stockValid = (product.stock == null || product.stock == '')


         if (titleValid || descriptionValid || priceValid || thumbnailValid || codeValid || stockValid){
            return console.log( `Todos los campos son requeridos, por favor ingrese el faltante`)
         }else {
            this.products.push(product)
            console.log(`El producto ha sido agregado`)
         }
         
        return this.products
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

    updateProduct(){
         
        
    }
    
    deleteProduct(){

    }


}

const newProduct = new ProductManager();
newProduct.addProduct(
    "Mouse inalambrico",
    "mouse con conexión,por medio de bluetooth",
    600,
    "imagen",
    "dns567",
    19
);
newProduct.addProduct(
    "Teclado inalambrico",
    "teclado con conexión, por medio de bluetooth",
    1200,
    "imagen1",
    "admo45",
    20
);
newProduct.addProduct(
    "Monitor 24´ ",
    "Monitor con resolución en 4K",
    79000,
    "imagen2",
    "amnpe2",
    30
)
console.log(newProduct.getProducts());