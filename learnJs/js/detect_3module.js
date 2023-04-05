// const arr = [1, 5, 7, 22, 35, 19, 6,8,10];
// for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = Math.round(arr[i] * 1.1);

// }
// console.log(arr);

// let total = 0;
// for (const arrs of arr ) { 
//     if (arrs % 2 !== 0) { 
//         continue;
//     } 
//       total += arrs;  
//     }
    
// console.log("Сумма єлементов: ", total);


// напиши скрипт поиска логина
// 1 если логина нет вивести пользователь[] не найден

// const logins = ["m4nop", "p36jjpyr", "opopo15", "adslfkj66"];
// const loginToFind = "p36jjpyr";

// // 1 перебрать єлементи масива
// // 2сравнить с финд

// const message = logins.includes(loginToFind) ?  'логин найден' : "логин не найден";
// console.log(message);

// const string = "JavaScript";

// создать копию строки в нижнем регистре
// получить сивол єлемента новой и старой строки
// сравнить

// const newString = string.toLocaleLowerCase();

// for (let i = 0; i < string.length; i += 1) { 
//     if (string[0] < newString[0]) { 
//         string[0].toLocaleLowerCase()
//     }
//   console.log(string[0]);  
// }

// автоперевірка 3/1

// const apartment = {
// imgUrl : "https://via.placeholder.com/640x480",
// descr : "Spacious apartment in the city center",
// rating : 4,
// price : 2153,
// tags : ["premium", "promoted", "top"],
  
// };

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Об'єкт містить властивість imgUrl
// Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
// Об'єкт містить властивість descr
// Значення властивості descr - це рядок "Spacious apartment in the city center"
// Об'єкт містить властивість rating
// Значення властивості rating - це число 4
// Об'єкт містить властивість price
// Значення властивості price - це число 2153
// Об'єкт містить властивість tags
// Значення властивості tags - це масив ["premium", "promoted", "top"]

// автоперевірка 3/2

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name : "Henry",
//     phone : "982-126-1588",
//     email : "henry.carter@aptmail.com",
//   },
// };
// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tag зі значеннями
// В об'єкті apartment присутня властивість owner
// Значення властивості owner - це об'єкт
// В об'єкті owner присутня властивість name
// Значення властивості name - це "Henry"
// В об'єкті owner присутня властивість phone
// Значення властивості phone - це "982-126-1588"
// В об'єкті owner присутня властивість email
// Значення властивості email - це "henry.carter@aptmail.com"

// автоперевірка 3/3

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tag зі значеннями
// Оголошена змінна aptRating
// Значення змінної aptRating - це число 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це число 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це масив рядків ["premium", "promoted", "top"]

// автоперевірка 3/4

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.
// Оголошена змінна apartment за допомогою const
// Значення змінної apartment - це об'єкт
// Оголошена змінна ownerName за допомогою const
// Значення змінної ownerName - це рядок "Henry"
// Оголошена змінна ownerPhone за допомогою const
// Значення змінної ownerPhone - це "982-126-1588"
// Оголошена змінна ownerEmail за допомогою const
// Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// Оголошена змінна numberOfTags за допомогою const
// Значення змінної numberOfTags - це 3
// Оголошена змінна firstTag за допомогою const
// Значення змінної firstTag - це "premium"
// Оголошена змінна lastTag за допомогою const
// Значення змінної lastTag - це "top"

// автоперевірка 3/5

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна aptRating
// Значення змінної aptRating - це 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це ["premium", "promoted", "top"]

// автоперевірка 3/6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// // Change code below this line

// автоперевірка 3/7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country : "Jamaica",
//   city : "Kingston",
// };

// автоперевірка 3/8

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//  name, // Change code below this line
//  price,
//  image,
//  tags, // Change code above this line
// };

// автоперевірка 3/9

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line

// [emailInputName] : 'henry.carter@aptmail.com',
// [passwordInputName] : "jqueryismyjam",
//   // Change code above this line
// };
// console.log(credentials);



// автоперевірка 3/10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
// };
// for (const key in apartment) {
//   values.push(apartment[key]);
// };

// ==========================нормальний вариант
// const keys = Object.keys(apartment);

// for (const key of keys) { 
//   console.log(apartment[key]) -----------значение по ключу
// }

// const values = Object.values(apartment);---------проще всего так 
// console.log(values)получить значение

// автоперевірка 3/11


// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }
  

// автоперевірка 3/12


//   function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   propCount = Object.values(object).length;
//   // Change code above this line
//   return propCount;
// }

// countProps({ name: "Mango", age: 2 }) 

// // повертає 2

// автоперевірка 3/13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

//   for (const key of keys) { 
//   values.push(apartment[key]);
    
//   };

// console.log(values) ;


// автоперевірка 3/14
// console.log()


// function countProps(object) {
//   // Change code below this line
// let propCount = 0;

// const keys = Object.keys(object);  
//   propCount = keys.length;

//   console.log(propCount) ;
  
// }; 


// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })    

  
// автоперевірка 3/15
// console.log()  
  
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

 
//  console.log(values)


// автоперевірка 3/16
// console.log()  


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries);

//   for (const value of values) { 
//     totalSalary += value;
//   }
//   console.log(totalSalary); 
//   // Change code above this line
//   // return totalSalary;
// };

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) 
 
// повертає 330



// автоперевірка 3/17
// console.log() 



// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) { 
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);

// };


// console.log(hexColors);
// console.log(rgbColors);
 

// автоперевірка 3/18
// console.log() 

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) { 
//     // console.log(product.name);
 
//     if (productName === product.name
//       && productName !== undefined) { 
//     return product.price ;
//   } 
    
//   }
//   return null;
//   // Change code above this line
// }
// getProductPrice("Radar")


// автоперевірка 3/19
// console.log() 

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const productUnit = [];
//   for (const product of products) {
    
//     if (propName === "price") {
//       productUnit.push(product.price);
      
//     } else if (propName === "name"){ 
// productUnit.push(product.name);
//     } else if (propName === "quantity"){ 
// productUnit.push(product.quantity);
//     }
//   }
//    return productUnit;
// }
// getAllPropValues("name");
 
 
// автоперевірка 3/20
// console.log() 

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// let total = 0;
//  for (const product of products) {
  
//     if (product.name === productName) {
      
//       total = product.price * product.quantity;
//       return total;
//     }

//   }
// return total;
//   // Change code above this line
// }
//   calculateTotalPrice("Rada");



// автоперевірка 3/21
// console.log() 

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// =====================вместо оглашения трех переменних

// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ======================с оглашением трех переменних

//  const yesterday = highTemperatures.yesterday;
//  const today = highTemperatures.today;
//  const tomorrow = highTemperatures.tomorrow;



// автоперевірка 3/22
// console.log() 


// деструктуризация со значенем по умолчанию


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) /3;



// автоперевірка 3/23
// console.log() 

// ===================деструктуризация с переименовіванием переменних

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday: highYesterday,
//        today: highToday,
//        tomorrow: highTomorrow,
//        icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;





// console.log() 


// автоперевірка 3/24
// console.log()




// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
 
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }



// автоперевірка 3/25
// console.log()


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//       },
//     tomorrow: 
//     { low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",}    
// } = forecast;



// автоперевірка 3/26
// console.log()


// Change code below this line

//  const forecast = {
//    today: {
//      low: 28,
//      high: 32,
//      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//    },
//    tomorrow: {
//      low: 27,
//      high: 31,
//    },
//  };
// function calculateMeanTemperature(forecast) {
// const { today: {
//     low: todayLow,
//     high: todayHigh,
// },
//     tomorrow: {

//         low: tomorrowLow,
//         high: tomorrowHigh,
//     }
// } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }



// автоперевірка 3/27
// console.log()


// ================= ьаксимальное и минимальное число

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// автоперевірка 3/28
// console.log()


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// console.log()


// автоперевірка 3/29
// console.log()


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};




// автоперевірка 3/30
// console.log()
//  function makeTask(data) {

//     const dataRefactioing = {
//         category: "General",
//         priority: "Normal",
//         ...data,
//         completed: false,
//         };

//     return dataRefactioing;
//  };  
// makeTask();
// const data = {
//         text: "task",
//     category: "General",
//     priority: "Normal",
//     };

// автоперевірка 3/31
// console.log()


// function add(...args) {
//  let total = 0;
//     for (const arg of args) { 
//         total += arg;
        
//     }
//     return total ;
  
// }

// add(12, 4);


// автоперевірка 3/32
// console.log()

// Change code below this line

// function addOverNum(a, ...restProps) {
//   let total = 0;

//   for (const restProp of restProps) {
//       if (a < restProp) { 
//           total +=restProp 
//       }
//       continue;
//   }
    
//     console.log(total);
//     console.log(a);
//     console.log(restProps)
//   // Change code above this line
// }

// addOverNum(15, 32, 6, 13, 19, 8)

// console.log()


// автоперевірка 3/33
// console.log()

// function findMatches(standarts = [], ...restProps) {
//  const matches = [];
//     for (const restProp of restProps) { 
// //  
//         // console.log(standarts[i])
    
//     for (let i = 0; i < standarts.length; i += 1) { 
//         if (standarts[i] === restProp) { 
//             matches.push(restProp);
//         }

//         // console.log("rest: ", restProp);
//     }
//     }
  //   // Don't change this line

    
//     console.log(matches);
//   // Change code above this line
// //   return matches;
// }
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)

// console.log()


// автоперевірка 3/34
// console.log()


// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) { 
//   return `Deleting book ${bookName}`;
//   },
//     updateBook(oldName, newName) { 
//         return `Updating book ${oldName} to ${newName}`;
//     },
//   // Change code above this line
// };



// автоперевірка 3/35
// console.log()

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
    
//       const afterFor  = this.books.indexOf(oldName);
      
//           this.books.splice(afterFor, 1, newName);
     
//  return this.books;
   
//     },
   
// };
// bookShelf.updateBook('The last kingdom', 'Dune');



// автоперевірка 3/36
// console.log()


// const atTheOldToad = {
// };
// atTheOldToad.potions = [];



// автоперевірка 3/37
// console.log()

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//     getPotions() {
    
//   console.log(this.values.potions) ;
//     },
    
//   // Change code above this line
// };
// getPotions();


// автоперевірка 3/37
// console.log()


// const atTheOldToad = {
  
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line

  
//   getPotions() {
//       return this.potions;
  
//   },
//   // Change code above this line
// };


// автоперевірка 3/38
// console.log()

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//   this.potions.push(potionName);
//       return this.potions;


//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility")

//  автоперевірка 3/39
// console.log()

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
      
//       this.potions.splice(this.potions.indexOf(potionName), 1);
// console.log(this.potions)
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath")


//  автоперевірка 3/40
// console.log()


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// console.log(oldName)
//     const index = this.potions.indexOf(oldName);
//       console.log(index);
//       this.potions.splice(index, 1, newName)
//       console.log(this.potions)
//     // Change code above this line
//     //   this.potions.splice
//       return this.potions;
//   },
 
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");


//  автоперевірка 3/41
// console.log()


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions
//   },

//   addPotion(newPotion) {
//     this.potions.push(newPotion)
//   },

//   removePotion(potionName) {
//     const { potions } = this;
 
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
    
//       if (potionName === name) {
//         potions.splice(i, 1)
//       }
//     }
  
//   },
//   updatePotionName(oldName, newName) { 

 
//     for (let i = 0; i < this.potions.length; i += 1) {
      
    
//       if (oldName === this.potions[i].name) {
//         console.log("gghjfj");
//         oldName = newName;
//       }
//     }
//   },

// };




// // atTheOldToad.removePotion("Dragon breath")
// // atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// // atTheOldToad.addPotion({ name: "Moody", price: 520 })
// // atTheOldToad.addPotion({ name: "frogs", price: 420 })
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// console.table(atTheOldToad.getPotions());

  // getPotions() {
    
  //   console.log(this.potions)
  // }
  




// const bdKievSt = {
//   users: [
//     { name: "Ivan", lastName: "Petrov", tel: "050" },
//     { name: "Ivancho", lastName: "Petrovcho", tel: "05055" },
//     { name: "Olex", lastName: "Petrovich", tel: "0503" },
//   ],
  
//   getBDKievSt () { 
//     return this.users;
//   },
//    addUsers(userUpdate) { 
    
//         this.users.push(userUpdate)
  
//   },
//   remuveUsers(userUpdate) { 
//     for (let i = 0; i < this.users.length; i += 1) { 
//       if (userUpdate == this.users.name) { 
//         console.log(i) ;
//       }

      
//     }  
//   },

// }



// bdKievSt.addUsers({ name: "Power potion", lastName: "eee", tel: "069" })
// bdKievSt.remuveUsers({ name: "Power potion", lastName: "eee", tel: "069" })
// console.table(bdKievSt.getBDKievSt())


 




//    console.log(Object.keys[potions[0]])

    // addPotion(newPotion) {

    // }
 


    
//     return this.potions;
//   },
//    {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// =========================================
// function removeChar(str){
//  //You got this!
//     console.log(str)
//     return str.slice(1, str.length - 1);

//   console.log(refactorStr)  
// }

// removeChar('adgsfkjgdsfkj');

// ===========================================
// function greet(name, owner) {
//     // Add code here
//     if (name === name && owner === name) {
//        return 'Hello boss'; 
//     }
//    return 'Hello guest'; 
// }

    

// greet("John", "Deep");
// ==========================================
// function invert(array) {
//     const reveres = array;
//     for (const revers of reveres) { 
//         revers *= -1;
//     }
//    console.log(reveres);
// }

// invert([1, 3, 4, 5, 6,]);




// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })











// { category: "Homemade", priority: "Low", text: "Take out the trash" }

// повертає { category: 'Finance', priority: 'Normal', text: 'Take interest', completed: false }


// function makeTask(data) {
// const data = {
//     text: "Task",
//     category: "General"
// }
  
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// const  {text, catcategory} = dataRed;
//     // const data = {category, priority, };
//   // Change code above this line
//     console.log(data);
// }

// makeTask({});


// const Types = {
//   DEPOSITE: "deposit",
//   WITHDROW: "withdrow",
// };

// const account = {
//   balance: 0,
//   transaction:[],


//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transaction.length,
//     }
//   },
//   deposit(amount) { 
//     amount = Math.abs(amount);
//     const newTransaction = this.createTransaction(amount, Types.DEPOSITE); 
//     this.transaction.push(newTransaction);
//     this.balance += amount;
//   },
//   withdrow(amount) { 
// amount = Math.abs(amount);
//     const newTransaction = this.createTransaction(amount, Types.WITHDROW);

//     if (amount > this.balance) { 
//       console.log("nema babla");
//       return;
//     }
//     this.transaction.push(newTransaction);
//     this.balance -= amount;
//   },
//   getBalance() { 
//     return this.balance;
//   },
//   getTransactionById(id) { 
//     for (const transaction of this.transaction) { 
//       if (id === transaction.id) { 
//         return transaction;
//       }
//     }
//   },
//   getTransactionTotal(type) { 
//     let result = 0;
//     for (const transaction of this.transaction) { 
//       if (type === transaction.type) { 
//         result += transaction.amount;
//       }
//     }
//     return result;
//   },

// }

// account.deposit(34);
// account.deposit(-134);
// account.withdrow(-100);
// console.log(account.balance);
// console.log(account.transaction);

// const budgetbed = account.getTransactionById(1)
// console.log(budgetbed)

// const totalMetod = account.getTransactionTotal(Types.DEPOSITE);
// console.log(totalMetod)



















// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;





console.log()


// console.log(hexColors)

//  const myLib = {
//    name: "Bily",
//    car: "BlueCar",
//    lastname: "Jily",
//   country: ["Ukrain", "Poland", "Zeland"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//    changeName(newName) { 
//      this.owner.name = newName;
//    },   
//    addCountry(newCountry) { 
//      this.country.push(newCountry);
//      this.totalCountry = this.country.length;
//    },
//    updateCar(newCar) { 
//      this.car = newCar;
//    },
//    getTotalCountry() { 
//      return this.country.length;
//    },
//  };

// myLib.changeName("новое имя");
// myLib.addCountry("new Country");
// myLib.updateCar("red-corall Car");



// // myLib.owner.name = "Henry Sibola";
//  console.log(myLib);

// const object = {
//   a: 5, 
//   b: 10,
//   c: 50,
//   d: 100,
//     e: 150,
  
// }

// const f = ['book', 'paper', 'table'];
// const arr = [...[f]];

// console.log(arr);
// console.log(f);

// const arr2 = [];
// for (let i = 0; i < arr.length; i += 1) { 
    
//     arr2.push(arr[i]);
    
// }

// console.log(arr2);
// const bloc = [
//     {book: 300, paper: 100, table: 400},
//     {book: 300, paper: 150, table: 400},
//     {book: 300, paper: 100, table: 400},
// ]

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// Change code above this line
// const meanTemperature = values[yesterday];
// console.log(meanTemperature);




// const ar = Object.values(object);
// console.log(Object.keys(bloc));
