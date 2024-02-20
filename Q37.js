"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
class Shirt {
    constructor(size = "large", message = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }
    displayShirtInfo() {
        console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
}
function make_shirt(size = "large", message = "I love TypeScript") {
    return new Shirt(size, message);
}
// Large shirt with default message
const largeShirt = make_shirt();
largeShirt.displayShirtInfo();
// Medium shirt with default message
const mediumShirt = make_shirt("medium");
mediumShirt.displayShirtInfo();
// Custom shirt
const customShirt = make_shirt("small", "Hello, World!");
customShirt.displayShirtInfo();
