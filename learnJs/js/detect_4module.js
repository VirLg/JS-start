// function makePizza() {
//   console.log("Your pizza is being prepared, please wait.") ;
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(pointer)




// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     for (const pizza of this.pizzas) { 
//     if (pizzaName === pizza) {
//       return makePizza(pizzaName);
//     }
   
//     }
    
//        return onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }
// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);


// const fnA = function(fff, callback, fnB) { 
//   console.log(fff);
// console.log(callback);
//   //  callback();
//    fnB(100)
// }

// const fnB = function () { 
//   console.log(555);
// }

// fnA([1, 2, 3], {}, fnB);



// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

// задача 5
// function calculateTotalPrice(orderedItems) { 
  
//   let totalPrice = 0;
// orderedItems.forEach(function (element) {
//   totalPrice += element;
  
// });
//   console.log(totalPrice);
// }

// calculateTotalPrice([12, 85, 37, 4])

// задача 6


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return filteredNumbers;
// }


// function filterArray(array, value) {
//   const filteredNumbers = [];
 
//   array.forEach(function (element) {
   
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//     return
//   });
//   return filteredNumbers;
// }


// filterArray([1, 2, 3, 4, 5], 3);

// задача 7

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(function (element) {
//     secondArray.forEach(function (item) {
//       if (element === item) {
//         commonElements.push(element);
      
//       }
    
//       });

//      });
   
//    return commonElements
   

//   }
//  [22,16,8,20,20,11,15,15]

// getCommonElements([22,9,16,8,20,23,20,11,10,12,15,15,21,19], [15,22,16,11,7,24,14,16,20,8,7,16,17,20]) 


// задача 8

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// задача 9

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Change code above this line


// задача 10

// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line


// задача 11

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach( (number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// задача 12

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach( element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// задача 13

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// const changeEven = (numbers, value) => {
//   const newEvenArray = [];
  
//   numbers.forEach(function (element) {
  
  
//     if (element % 2 !== 0) {
//       newEvenArray.push(element);
      
//     } else { 
//      newEvenArray.push(element + value);
//    }
//   });
// return newEvenArray

// }  
  
// changeEven([1, 2, 3, 4, 5], 10) 
// повертає новий масив[1, 12, 3, 14, 5]

// задача 14



// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
// const planetsLengths = planets.map( planet => planet.length
// );

// 



// const planetsLengths = planets.map(planet =>  
//     planet.length
//  )
// console.log(planetsLengths)


// const planatLength = (planet) => {
// return  planet.length
// }
// console.log(planatLength)
  


// задача 15


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(function callback(book) { 
//     return book.title
// })

//увеличить рейтинг на +1



// function edit(books, editReyting) {
//   books.map(function (book) { 
//     return edit = { 
//     ...books,
//       rating:book.rating + editReyting,
//   }

//   })

//   return edit
  
//  }

// const edit = (books, editReyting) => {
//   return books.map(book => {
//     return {
//       ...book,
//       rating: book.rating + editReyting
//     }
//   })
// }
// const editBook = edit(books, 1);
// console.log(editBook)

// задача 19

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// 1й вариант
// // Change code below this line
// const evenNumbers = numbers.filter(number=>number %2 ===0);

// const oddNumbers = numbers.filter(number => number % 2 !== 0);


// 2й вариант
// numbers.filter((number,) => {
//   if (number % 2 === 0) { 
//     evenNumbers.push(number)
//     return
//   }
//   oddNumbers.push(number)
//   return
//  })

// console.log(evenNumbers)
// console.log(oddNumbers)

// задача 20

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure", "15", "10"],
//   },
// ];



// Change code below this line
// const allGenres = books.flatMap(books => books.genres);

// const uniqueGenres = books.filter((el, index) => allGenres.indexOf(el) === index);
  


// const arr = allGenres.filter(allGenre=>allGenre);
// for (const ar of arr) { 
//   if (arr.indexOf(ar)) { 
//     uniqueGenres.push(ar)
//   }
   
// }


// .indexOf(uniqueGenres.indexOf(uniqueGenre))

// console.log(allGenres)
// console.log(uniqueGenr)


// задача 21



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);

// const booksByAuthor = books.filter((book) => book.author === AUTHOR);



// задача 22





// задача 23

// const getUsersWithAge = (users, minAge, maxAge) => {
//    const reternUserAge = users.filter((user) => { 
        
//         return minAge < user.age && user.age < maxAge
        
//     })
//  return reternUserAge
// };


// задача 24

// const getUsersWithFriend = (users, friendName) => users.filter(user=>user.friends.includes(friendName));

// задача 25

//  const getFriends = (users) => {
   
//    return [...new Set(users.flatMap(user => user.friends))]
   
//  }


// // задача 26

// const getActiveUsers = (users) => {
//    const ActiveUsers = users.filter((user) => {
//     if (user.isActive === true) 
//   return 1
//    })
  
//   return ActiveUsers;

// };

// // задача 27

// // Change code below this line
// const getInactiveUsers = (users) => {

//    const InactiveUsers = users.filter((user) => {
//     if (user.isActive === false) 
//   return 1
//    })
  
//   return InactiveUsers;

// };



// задача 28


// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);


// задача 29

// const getUserWithEmail = (users, email) => users.find((user) => user.email === email )
// ;

// задача 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(a=> a%2 ===0);
// const eachElementInFirstIsOdd = firstArray.every(a=> a%2 !==0);

// const eachElementInSecondIsEven = secondArray.every(a=> a%2 ===0);
// const eachElementInSecondIsOdd = secondArray.every(a=> a%2 !==0);

// const eachElementInThirdIsEven = thirdArray.every(a=> a%2 ===0);
// const eachElementInThirdIsOdd = thirdArray.every(a=> a%2 !==0);

// задача 31


// const isEveryUserActive = (users) => users.every(user => user.isActive === true);

// задача 32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(a=>a%2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(a=>a%2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(a=>a%2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(a=>a%2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(a=>a%2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(a=>a%2 !== 0);

// задача 33
// const isAnyUserActive = users => users.some(user => user.isActive === true);

// задача 34

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players);


// const totalPlayTime = playtimes.reduce((acc, number) => { 
//   return acc+number
// },0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes.length)

// задача 35
// const playtime = (players.map((player) => (player.playtime/player.gamesPlayed))).reduce((a, val) => (a+ val),0)

// console.log(playtime)



// задача 36

// const calculateTotalBalance = users => (users.map((user) => user.balance)).reduce((a, val) => (a + val), 0);
   

// задача 37

// // =========================================
// const arrs = ((users.map((user) => user.friends)))
// const rez = arrs.map((arr) => arr.length )
// const getTotalFriendCount = rez.reduce((a, val) => (a + val), 0)

// console.log(rez)
// console.log(getTotalFriendCount)
// // ===========================
// const getTotalFriendCount = users => ((users.map((user) => user.friends))).map((arr) => arr.length).reduce((a, val) => (a + val), 0);
// //===============================  


// задача 38

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();



// console.log(alphabeticalAuthors)

// // ['Bernard Cornwell', 'Tanith Lee', 'Robert Sheckley', 'Fyodor Dostoevsky']`



// задача 39

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((a,b)=> b-a)
// console.log(descendingReleaseDates)


// задача 40


// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort();

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a))

// задача 41

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=>b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) =>
//   a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) =>
//   b.rating - a.rating);

// задача 42

// const sortByAscendingBalance = users =>  [...users].sort((a, b) =>
//    a.balance - b.balance);

// задача 43

//    const sortByDescendingFriendCount = users => 
// [...users].sort((a,b) => b.friends.length - a.friends.length)

// задача 44

// const sortByName = users => [...users].sort((a, b) =>  a.name.localeCompare(b.name) );



// задача 45

// Change code below this line

// 1)// const names = books.filter((book) => 
// //   book.rating > MIN_BOOK_RATING);

// 2)// const filter1 = (names.map(name => name.author))

// 3)// const filter2 = filter1.sort((a,b) => a.localeCompare(b) )


// console.log(names)

// console.log(filter1)

// console.log(filter2)

// ====================================================
// const names = books.filter
//   ((book) => book.rating > MIN_BOOK_RATING).map(name => name.author).sort((a,b) => a.localeCompare(b));

// ======================================================

// задача 46

// const getNamesSortedByFriendCount = users => {
//   // 1 отсортировали по количеству друзей
//   const sort1 = [...users].sort((a, b) => 
//     a.friends.length - b.friends.length
//    )
// // 2 вернули только имена
//   const onlyName = sort1.map(sort => sort.name)
//   console.log(onlyName)
//   return sort1
// };

// const rez = getNamesSortedByFriendCount(users);
// console.table(rez)



// задача 47


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// // Change code below this line
// const getSortedFriends = users => {
//     //1  виберем массив друзей
//     const rez1 = users.flatMap((user) => user.friends);
//     // сортируем по алфавиту
//     const rez2 = rez1.sort();
//     // убираем повтори
//     const rez3 =rez2.filter((el, index, arr) => {arr.indexOf(el)===index })
// return rez2
// }
// // ===================================
// const getSortedFriends = users => users.flatMap((user) => user.friends).sort().sort().filter((el, index, arr) => arr.indexOf(el)===index )
// // ===================================



// const start = getSortedFriends(users)
// console.log(start)



// задача 48

// const getTotalBalanceByGender = (users, gender) => {
//   const rez1 = users.filter((user) => user.gender === gender);
//     const rez2 = rez1.reduce((acc, user) => (acc + user.balance), 0)
  
//   console.table(rez1)
//   console.log(rez2)
  
//   return
  
// };

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];






// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]



// const tests = users.map((user) => user.eyeColor )


// console.log(tests)

// const test2 = tests.filter((el, index, arr) => {
//   console.log("================iter============")
//   console.log(arr.indexOf(el) === index)
//   // console.log(el)
//   console.log(arr.indexOf(el))
//   console.log(index)
//   console.log(arr)
  
//   return 
  
// })


// const glaza = ['blue', 'blue', 'green', 'green', 'blue', 'brown', 'brown']


// console.log(test2);




// const start = getTotalBalanceByGender(users, "male")
// console.table(start)

    // const allFriends = users.map(user =>  user.friends)

// // 2 распилить в один массив
  

//   const unic = new Set(allFriends.flat())
  
// return unic;
// };
// // Change code above this line

  
  

// ['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes']`


// const getUsersWithFriend = (users, friendName) => users.filter(user=>user.friends.includes(friendName));


// ;
// ================only men

// const getActiveUsers = (users) => {
//   const allGeger = users.map(user => user.gender)

//   const onlyMen = allGeger.filter(el => el === "male")
//   return onlyMen
// };


// =====================метод sort

// const getActiveUsers = (users) => {

//   const newBalanse = [...users];
  
//     newBalanse.sort((a, b) => {
//       if (a.balance > b.balance) return 1
      
//       return -1
//     })

  

//   return newBalanse;
// }


// const getActiveUsers = (users) => { 
//   const newAge = [...users];
//   newAge.sort((a,b) => { 
//     if (a.age > b.age) return 1;
//     return -1;
//   })
//   return newAge;
// }


  



  //   const rezs = getUserWithEmail(users, "elmahead@omatom.com")
  // console.table(rezs) 

// const getSerchFriend = (rezs, friendName) => { 
//     const best = rezs.filter((rez) => {
//         rez === friendName
//         return true
//     })
//     return best
// }



// console.log(users.map((user) => { 
//     return user.name
// }))

// const reternUserAge = []
// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//    const reternUserAge = users.filter((user) => { 
//         // console.log(user.name)
//         // console.log(user.age<minAge)
//         return minAge < user.age && user.age < maxAge
        
//         // return reternUserAge.push(user.name)
        
//     })
//  return reternUserAge
// };
// const getUsersWithAge = (users, minAge, maxAge) => {
//     const reternUserAge = users.filter(user => 
//         return {
//         minAge<user.age && user.age < maxAge
//     };
// }  
    


// const aaaa = getUsersWithAge((users, friendName)
// )
// console.log(aaaa)


// Change code above this line






// (ganres, index, allGenres) => array.indexOf(course) === index
// const new_array = arr.map(function callback( currentValue[, index[, array]]) {
//     // Возвращает элемент для new_array
// }[, thisArg])






// const fnA = function (parametr) {

//   const inerFunction = function () { 
//     const rez = parametr + 5;
//  console.log(parametr);
//   }
// inerFunction();
//  console.log(inerFunction)
// };
 
// console.log(rez)

// fnA(10)



// const filterArray = function (array, test) { 
//   const newArray = []
  
//   for (const el of array) { 
// const passed = test(el)
//     // console.log(callback1)
//     if (passed) { 
//       newArray.push(el)
//     }

//   }

//   return newArray;
// }

// const callback1 = function (value) {
//   // console.log(value)
//   return value <= 18;
// }


// const r1 = filterArray([1, 5, 18, 66,], callback1)
// console.log(r1)



// const fnA = function (parametr) { 
//   const innerVariable = "значение"
 
//   const innerFanction = function () { 

//     console.log(parametr)
//     console.log("єто визов fnB") 
//   }
//   return innerFanction
// }

// const fnB = fnA(555); 
// fnB()




// const salaryMenegerFactory = function (employeName, baseSalary = 0) { 
//   let salary = baseSalary;

//   const changeBy = function (amount) {
//     salary += amount;    
//   };
//   return {
// manager: "Ivanov",
// barmen: "Petrov",
//     lower(amount) { 
//       changeBy(amount)
//     },
//     current(amount) { 
//       return `Текущая зарплата ${employeName} ${salary}`
//     }
//   };

// }

// const salaryMeneger = salaryMenegerFactory("Mango", 5000);
// console.log(salaryMeneger);

// console.dir(salaryMeneger.current)

// const inSale = (typePetrol, oneIsMany) => { 
//   for (const el of typePetrol) { 
//     oneIsMany(el)
//     if (passed) { 
//       console.log("!есть!")
//       }
//   }
// }; 



// const callback1 = (position) => { 
//   return position.geolocation === east;
// };

// const typePetrol = [
//   {e95: 45, brand:"okko", geolocation:"east"},
//   {e98: 60, brand:"okko", geolocation:"west"},
//   {gas: 26, brand:"okko", geolocation:"sose"},
// ]

