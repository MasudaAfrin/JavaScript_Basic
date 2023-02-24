// primitive data type - has no methods or properties
// common practice - declare object with const keyword
const product = {
    title: "Books",
    price: 100,
    sku: "BFFS836636",
}

let y = product.price * .65;
console.log("Price of the product is: " + y);

// object is mutable, it is accessed by reference. So if any object is copied and change
// from there, the change will be reflected on the original object.

const newProduct = product;
newProduct.price = 200;
console.table(newProduct);
console.table(product);
console.log("Are two objects same? " + newProduct == product);

// property
// print the property of object
let properties = "";
for(let x in product) {
    console.log("each property: " + x); // this will print the key name.
    properties += product[x];
}
console.log("All properties: "+ properties);

// delete a property from the object
delete(product.sku);
console.log("After deletion sku, product object becomes: ");
console.table(product);

// adding the property
product.sku = "ABCddg352424";
console.log("After adding sku, product object becomes: ");
console.table(product);

// nested object
const book = {
    title: "New Book",
    price: 200,
    discount: "15%",
    attributes: {
        print_type: ["newsprint", "paperback", "online-copy"],
        color: ["red", "blue", "green"],
        size: ["small", "medium", "large"],
    }
}

// to get access the array in object use for..in loop or for..of loop
for(let i of book?.attributes?.print_type) {
    console.log("Print type are: " + i);
}
// of gives the direct access of element
console.log("\n");
for(let i in book?.attributes?.print_type) {
    console.log("Print type are: " + book?.attributes?.print_type[i]);
}
// in gives the index of array, to access the element you have to use the array and element, as convention

// object method: js property that contains function definition.

const address = {
    city: "Dhaka",
    road: "xyz",
    country: "Bangladesh",
    postCode: "7266",
    fullAddress: function(){
        return "Address: " + this.road + " " + this.city + " " + this.postCode + " " + this.country + ".";
    }
}
console.log(address.fullAddress());

// object to array
const arOb = Object.values(address);
console.log("convert object to array: " + arOb);