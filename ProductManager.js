class Product {
  constructor(code, name, price) {
    this.code = code;
    this.name = name;
    this.price = price;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
    this.currentId = 1;
  }

  addProduct(code, name, price) {
    // Validar campos obligatorios
    if (!code || !name || !price) {
      console.log("Error: Todos los campos son obligatorios.");
      return;
    }

    // Validar duplicados por código
    if (this.products.some((product) => product.code === code)) {
      console.log("Error: Ya existe un producto con el mismo código.");
      return;
    }

    // Crear producto con ID autoincrementable
    const newProduct = new Product(code, name, price);
    newProduct.id = this.currentId;
    this.currentId++;

    // Agregar producto al arreglo de productos
    this.products.push(newProduct);
    console.log("Producto agregado correctamente.");
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    const foundProduct = this.products.find(
      (product) => product.id === productId
    );
    if (foundProduct) {
      return foundProduct;
    } else {
      console.log("Error: Producto no encontrado.");
    }
  }
}

const productManager = new ProductManager();
productManager.addProduct("001", "Producto 1", 10.99);
productManager.addProduct("002", "Producto 2", 20.49);

const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);

const productIdToFind = 1;
const foundProduct = productManager.getProductById(productIdToFind);
if (foundProduct) {
  console.log(
    "Producto encontrado:",
    foundProduct.code,
    foundProduct.name,
    foundProduct.price
  );
}
