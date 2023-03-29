import fs from 'fs';

const path = '../desafio2/files/Product.json';


 export default class ProductManager{
    constructor(path){
        this.product = [];
        this.path = path;
    }
    
        
    getProducts = async ()=>{
        if (fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8');
            const products = JSON.parse(data);
            return products;
        }else{
            return [];

        }
    }


    addProduct = async (product) => {
        const products = await this.getProduct();

        if (products.length === 0){
            product.id = 1;
        }else{
            product.id = products [products.length-1].id+1;
        }
        products.push(product);

        await fs.promises.whiteFile(path, JSON.stringify(users,null, '\t'))
        return product
    }

    addProduct(title, description, price, thumbnail, code, stock){
        
        let id_product = this.getProducts().length;

        let product ={
            title:title,
            description : description,
            price : price,
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

    updateProduct(id_product){
         let updateById = this.products.find(
            (product)=> product.id === id_product);
            updateById.stock = 19;
            if (updateById){
                return updateById;
            }else{
                return console.log("no existe el producto con ese ID")
            }    
    }
    
    deleteProducts = async (id_product) =>{
        const  products = await this.getProducts();
        const index = products -finIndex(product =>product.id === id_product);
        if (index !==-1){
            const deletedProduct = products.splice(index, 1);
            fs.writeFileSync(this.path, JSON.stringify(products));
            return deletedProduct;

        }
    }

}
console.log(ProductManager())
