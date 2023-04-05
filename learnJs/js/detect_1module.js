// const a = 5;
// const b = 5;
// const c = 5;


// function add() { 
//     let result;
//     rezult = (a + b + c);
    
// }

// console.log(`Addition result equals: ${rezult}`);

// автопроверка 1/8
//  создай функцию, виведи в консоль сумму
// function add (a, b, c) { 
  
//     console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// автопроверка 1/9

// возврат данних через ретерн

// function add(a, b, c) {
//   // Change code below this line
//  return a + b + c;


//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// автопроверка 1/10


// function makeMessage(name, price) {
//     let message = `You picked ${name}, price per item is ${price} credits`;


//     if (name === 'Radar' && price === 6150) {
//         message =
//             console.log(message);
//     } else if (name === 'Scanner' && price === 3500) {
//         console.log(message);
//     } else if (name === 'Reactor' && price === 8000) {
//         console.log(message);
//     } else if (name === 'Engine' && price === 4070) {
//         console.log(message);
//     } 

// };
// makeMessage('Engine', 4070);

// автопроверка 1/11

// function calculateTotalPrice(orderedQuantity, pricePerItem) { 
//     const totalPrice = orderedQuantity * pricePerItem;
// console.log(totalPrice);
// }
// calculateTotalPrice(5, 100);

// автопроверка 1/12


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  
//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee
//         } credits. Delivery(${deliveryFee} credits) is included in total price.`;

//     // Change code above this line
//     return message;
// };

// автопроверка 1/13
// let age;
// let passed;
// function isAdult(age) { 
//     if (age >= 18) {
//         passed = true;
//     } else { 
//         passed = false
//     }
// console.log(passed);
    
// }

// isAdult(hu)





// function isAdult(age) {
   
//     const  passed = (age >= 18 || false);    
// console.log(passed);
// }

// isAdult(18);

// автопроверка 1/14
// const SAVED_PASSWORD = "jqueryismyja";

// function isValidPassword(password) {
// const isMatch = (SAVED_PASSWORD === password) 
//     console.log(isMatch);

// }



// автопроверка 1/15
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// автопроверка 1/16

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (ordered <= available){
//   message = "Order is processed, our manager will contact you.";
// } else {
//   message = "Not enough goods in stock!";
// }
//   // Change code above this line
//   return message;
// }

// автопроверка 1/17

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// автопроверка 1/18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
  
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;

// if (totalPrice > customerCredits) {
//   message = "Insufficient funds!"
// } else {
//   customerCredits -= totalPrice;  
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
// }

  
//   // Change code above this line
//   return message;
// }

// автопроверка 1/19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered = 0) {
//     message = 'There are no products in the order!';
//   }   continue; {
//   else if (ordered > available) {
//     return message = "Your order is too large, there are not enough items in stock!";
    
//   } else {
//     return message = "The order is accepted, our manager will contact you";
   
//   }
//   // Change code above this line
  
// }

// автопроверка 1/24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent < 20000 && totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 50000 && totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 50000) { 
//     discount = GOLD_DISCOUNT;
//   }
  
//     return discount;
//   };

// getDiscount(490000)

// автопроверка 1/25

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message = ordered > available ?
//     "Not enough goods in stock!" :
//     "The order is accepted, our manager will contact you";


//   console.log(message);
// }
// checkStorage(100, 50)

// автопроверка 1/26

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message = (password == ADMIN_PASSWORD) ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

// автопроверка 1/27

// !!!!!!!!!!!!!!!! SWICH + Function!!!!!!!!!!!!!!!!!!!!

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//    case "starter":// Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }




// автопроверка 1/28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// switch (password) {
//   case null:
//     message = "Canceled by user!";
//     break;

//   case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;

//   default:
//     message = "Access denied, wrong password!";
// }




  // if (password === null) {
  //   message = "Canceled by user!";
  // } else if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  

  // Change code above this line
//   console.log(message);
// }
// checkPassword("jqueryismyjam")


// автопроверка 1/29

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// let price;
//   switch (country) {
//     case 'China':
//       price = 100
//       message = `Shipping to ${country} will cost ${price} credits`
//       break;
//       case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//       case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//       case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country"
//   }
//   // Change code above this line
//   console.log(message);
// }
// getShippingCost("Australia");

// Оголошена функція getShippingCost(country)
// В тілі функції використана інструкція switch
// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
// Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
// Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
// Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
// Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"

// автопроверка 1/30

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// Оголошена функція getNameLength(name)
// Виклик функції getNameLength("Poly") повертає "Name Poly is 4 characters long"
// Виклик функції getNameLength("Harambe") повертає "Name Harambe is 6 characters long"
// Виклик функції getNameLength("Billy") повертає "Name Billy is 5 characters long"
// Виклик функції getNameLength("Joe") повертає "Name Joe is 3 characters long"

// автопроверка 1/31

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line

// Оголошена змінна courseTopic
// Значення змінної courseTopic - це рядок "JavaScript essentials"
// Оголошена змінна courseTopicLength
// Значення змінної courseTopicLength - це число 21
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "J"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "s"


// автопроверка 1/32

// function getSubstring(string, length) {
//    let substring = (string.slice(0, length));

//   console.log(substring);
// }
// getSubstring("Hello world")

// автопроверка 1/33

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// result = (message.length > maxLength) ?
//     message.slice(0, maxLength - 1) + '…' : message;
//   /// Change code above this line
//   console.log(result);
// };
// formatMessage("Curabitur ligula sapien", 16)

// =====работает
// function formatMessage(message, maxLength) {
//   let result;
//   const length = message.length;
//   // Change code below this line
// if (length <= maxLength) {
//   result = message;
// } else {
//   result = message.slice(0, maxLength) + "...";
// }
//   // Change code above this line
//   return result;
// };
// console.log(result);
// };
// formatMessage("Curabitur ligula sapien", 16);
// ++++++++++++++++++++++
//   // result = message.length > maxLength ?
//   //  `${message.slice(0, maxLength)}…`  : message;
  
// автоперевірка 1/34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// повертае рядок input в нижньому регістрі

// автоперевірка 1/35

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   console.log(result);
// }
// checkForName("egor Kolbasov", "Egor")

// автоперевірка 1/36

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//  message = message.toLowerCase();
//   if (message.includes("spam")) {
//     result = true;
//   } else if (message.includes("sale")) {
//     result = true;
//   } else { 
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }
// checkForSpam("Get best sale offers now!")