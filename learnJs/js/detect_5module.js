// // задача1

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };


// задача2

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// задача3

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//    getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };


// задача4

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// задача5

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent)
// child.name = "Jason";
// child.age = 27;

// Change code above this line


// задача6

// class car { };
// new car();
// console.log(car)

// задача7
// class Car {
//   // Change code below this line
// constructor(brand, model, price){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }




// задача8

// class Car {
//   // Change code below this line
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }


// задача9
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

  
//   // Change code below this line
// getPrice() {
//   return this.price;
// }
// changePrice(newPrice) {
//   this.price = newPrice;
// }

//   // Change code above this line
// }

// задача10

// class Storage {
//   constructor(items) {
//     this.items = ["Nanitoids", "Prolonger", "Antigravitator"];
    
//   };

//   getItems() {
//     // console.log(this)
     
//     return this.items
//   }
//   addItem(newItem) {
    
//     return  this.items.push(newItem)
    
//   }
  
//   removeItem(itemToRemove) {
    
    
//    return this.items = this.items.filter(item=>item!==itemToRemove)
    
//   }
//   }
  
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// задача11

// class StringBuilder { 
//   constructor(initialValue) {  
//     this.value = initialValue;
//     }
  

//   getValue() { 
//     return this.value
//   }

//   padEnd(str) { 
//     this.value = this.value + str;
    
//   }
//   padStart(str) { 
//     this.value = str + this.value;
//   }

//   padBoth(str) { 
//     this.value = str + this.value + str;
//   }
// };
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// // builder.padBoth("=");
// // console.log(builder.getValue()); // "=^.^="


// задача12
// class Car {
//   // Change code below this line
// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   get getBrand(){
//     return this.#brand
//   }
  
//  set changeBrand(newBrand){
//     this.#brand = newBrand
//   // Change code above this line
// }

// }
// const car1 = new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// car1.changeBrand = "Acura"

// console.log(car1)


// задача16

// class Car {
//   static MAX_PRICE = 50000;
   
//   // Change code below this line
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       this.#price;
//     }
//     else { this.#price   = newPrice}

//     // Change code above this line
//   }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// задача17

// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price) { 
//     if (this.#MAX_PRICE < price) {
//       return "Error! Price exceeds the maximum";
//     } else { return "Success! Price is within acceptable limits"; }
//   }
//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// задача18

// class User {

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User{ 
//    static AccessLevel = 
//     {
//       BASIC: "basic",
//       SUPERUSER: "superuser"
//     }
//     constructor() { 
//   }
// }

// задача19

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
    
    
//     super(email);
    
//     this.accessLevel  = accessLevel;
//    }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// задача20


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails }) {
    
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }
//   isBlacklisted(email) {
//     if(this.blacklistedEmails.includes(email)) {
// return true      
//     }
//     return false
//   }
// }
//   // Change code above this line


// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true







// ==========================================
// =======Родитель, он же     Prototype
// =====================================

// const parent = {
//   name: "parent",

//   sayHello() { 
//     console.log(`Привет, я ${this.name}`);
//   }
// }
// // ================================================
// // =====єкземпляр класу
// // =================================================

// const obj = Object.create(parent)
// console.log(obj)



class Furniture { 
  #email;
  constructor(bed, safa, email) { 
    this.#email = email;
    this.bed = bed;
    this.safa = safa;
  }
  sayHello() {
    return `Привет я ${this.bed}`
  }
  createValue(value) { 
    this.value = value;
  }
};


// const room1 = new Furniture("white", "wood", "test@gmai.com")

// room1.bed = "comp";
// console.log(room1)

// const room2 = new Furniture("red", "red")


// const room3 = new Furniture("metal", "blue")
// console.log(room1, room1.sayHello())
// console.log(room2, room2.sayHello())
// console.log(room3, room3.sayHello(222), room3.createValue(555))



// var myObj = new Object(),
//     str = "myString",
//     // rand = Math.random(),
//     obj = new Object();

// myObj.type              = "Dot syntax";
// myObj["date created"]   = "String with space";
// myObj[str]              = "String value";
// // myObj[rand]             = "Random Number";
// myObj[obj]              = "Object";
// myObj[""]               = "Even an empty string";

// console.log(myObj);

// const arr = [1,2,3,4,5,1]
// const aaa = arr.filter((el, index, array) =>  array.indexOf(el) === index )


// console.log(arr)
// console.log(aaa)




// class Car {
//   // Change code below this line
//     constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
//     getBrand(){ 
//     return this.brand;
//     }
//     changeBrand(newBrand) { 
//         this.brand = newBrand;
//     }
// }

// const BMW = new Car({ brand: "BMW", model: "X5", price: 58900 })



// const aaa = BMW.getBrand();
// const bbb = BMW.changeBrand("YYY")

// console.log(aaa)
// console.log(BMW)
// console.log(BMW)

// const petya = {
//   username: "Petya",
//   music: ["Track1", "Track2", "Track3"],
//   showName(a) {
//     // console.log(this.username);
//   },
//   showMusicTrack() { 
//     // console.log(this.music);
//     console.log(this)
//   },
//   newTrack(){
//     this.music.push("new");
//     console.log(this)
//   },
// };

// const start = petya.showName(5);

// const bbb = petya.newTrack();
// petya.showMusicTrack();
// // console.log(aaa)
// petya.newTrack();
// console.log(petya);

// const Fedya = Object.create(petya)

// Fedya.friend = ["Kolya"];
// Fedya.getFriend = console.log(Fedya.friend)
// Fedya.getFriend = 
// console.log(Fedya)
 

// petya.showMusicTrack();
// console.log(Fedya)