

import fs from 'fs';


 export default class ProductManager{
    constructor(){
       this.path = "./desafio2/files/product.json"
    }
    
    getProducts = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, "utf-8");
                const products = JSON.parse(data);
                return products
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)
        }
    }
    addProduct = async (title, description, price, thumbnail, code, stock) => {
        try {
            const products = await this.getProducts();
            let product = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
            
            };
            let id_product = product.id;
            if (products.length === 0) {
                product.id = 1;
            } else {
                product.id = products[products.length - 1].id + 1;
            }
            if (
                Object.values(product).includes(" ") ||
                Object.values(product).includes("")
            ) {
                return console.log("Todos los campos son obligatorios");
            }
            let code = products.find((ele) => ele.code == product.code);
            if (code) {
                return console.log(
                    "El 'code' del producto ya existe, intente cambiarlo."
                );
            } else {
                products.push(product);
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
                console.log(product);
                return product;
            }
        } catch (error) {
            console.log(error)
        }
    }

    getProductsById = async (id_product) => {
        try {
            const products = await this.getProducts();
            const product = products.find((product) => product.id == id_product);
            if (product) {
                return console.log(product);
            } else {
                return "not found";
            }
        } catch (error) {
            console.log(error)
        }
    };

    deleteProduct = async (id_product) => {
        try {
            const products = await this.getProducts();
            const indexProduct = products.findIndex(product => product.id == id_product);
            if (indexProduct !== -1) {
                const deleteP = products.splice(indexProduct, 1)[0];
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t")
                );
                console.log("El producto fue eliminado");
                return deleteP
            } else {
                return "El producto que quiere eliminar no existe";
            }
        } catch (error) {
            console.log(error)
        }
    };

    updateProduct = async (id_product, title, description, price, thumbnail, code, stock) => {
        try {
            let product = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
                id: id_product
            };
            const products = await this.getProducts();
            const indexProduct = products.findIndex(product => product.id === id_product);
            if (indexProduct !== -1) {
                if (Object.values(product).includes(" ") ||
                    Object.values(product).includes("")) {
                    return console.log("Todos los campos son obligatorios");
                }
                let codigo = products.find((ele) => ele.code == product.code);
                if (codigo) {
                    return console.log(
                        "El 'code' del producto ya existe, intente cambiarlo."
                    );
                } else {
                    const deleteP = products.splice(indexProduct, 1)[0];
                    await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
                    deleteP;
                    products.push(product);
                    await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
                    console.log("El producto se modificó con exito")
                    return product;
                }
            } else {
                return "El producto que quiere modificar no existe"
            }
        } catch (error) {
            console.log(error)
        }
    }
}
