import { ProductManager } from './classes/ProductManager.js';
import { __dirname } from './utils.js';

console.log('dirname', __dirname);
let myFirstStore = new ProductManager('/products.json');
myFirstStore.getProducts().then((data) => console.log(data));
