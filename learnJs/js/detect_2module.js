// автоперевірка 2/1

// function checkAge(age) {
//   if (age >= 18) { // Change this line 
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if

// автоперевірка 2/2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

  

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//    } 
//     return "Access denied, wrong password!";
//   }

  
  // Change code above this line

// автоперевірка 2/3
// function checkStorage(available, ordered) {
//   // Change code below this line
  

//   if (ordered === 0) {
//     return "Your order is empty!" 
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you";

// }


// автоперевірка 2/4

// Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"]

// автоперевірка 2/5

// const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// автоперевірка 2/6

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// автоперевірка 2/7

// const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// const fruitsArrayLength = fruits.length

// автоперевірка 2/8

// что б получить значение єлемента ммассива!!!!!!!!!!
// 1 создай переменную с его индкесом
// 2 присвой новой переменной значение переменной с последним индексом!!!!!!!!!!!!

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// автоперевірка 2/9

// function getExtremeElements(array) {
//   // Change code below this line
//     // const firstElement = array[0];
//     // const lastElement = array.pop();
// // const lastElementIndex = array.length - 0;

//     // console.log(firstElement);
//     // console.log(lastElement);
//   const resultArray = [];
//   resultArray[0] = array[0];
//   resultArray[1] = array.pop();
//     console.log(resultArray);
//   // Change code above this line
// }
// // getExtremeElements([1, 2, 3, 4, 5])
// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// автоперевірка 2/10

// function splitMessage(message, delimiter) {
// let words = [];
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// };

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// автоперевірка 2/11

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const arrayResult = [] = message.split(" ");
//   result = arrayResult.length;
//   price = pricePerWord * result;
//   return price;


//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 20)

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// автоперевірка 2/12

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
// string = array.join(delimiter);


//   // Change code above this line
//   return string;
// }

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// автоперевірка 2/13

// function slugify(title) {
//   // Change code below this line

//  const slugLowerCase = title.toLowerCase();
//  const slug = slugLowerCase.split(' ').join('-'); 
//  return slug;

//   // Change code above this line
// }
// slugify("Arrays for begginers")

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// автоперевірка 2/14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
// Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

// автоперевірка 2/15


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// автоперевірка 2/16

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//    1й вариант
//   const arrayResult = firstArray.concat(secondArray).slice(0,maxLength);
  
//  2й вариант
//   // if (maxLength >= arrayResult.length) {
//   //   console.log(arrayResult)
//   // } else { 
//   //   arrayResult.length = maxLength;
//   // }
//   console.log(arrayResult)
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// автоперевірка 2/17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Change this line
//     console.log(i);
// }

// автоперевірка 2/18

// function calculateTotal(number) {
//  // Change code below this line

//  const array = [];
//   for (var i = 1; i <= number; i += 1) {
//     array.push(i);
    
//   }
   
//   console.log(array);
  
//   let result = array.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);

// return result;
// }

// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// автоперевірка 2/19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit

// автоперевірка 2/20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line


//   for (let i = 0; i < calculateTotalPrice.length; i += 1) { 

//   }
//    total = order.reduce(function(sum, elem) {
//  	return sum + elem;
//  }, 0);
//   // Change code above this line
//   return total;
// }
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// автоперевірка 2/20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line


//   for (let i = 0; i < calculateTotalPrice.length; i += 1) { 

//   }
//    total = order.reduce(function(sum, elem) {
//  	return sum + elem;
//  }, 0);
//   // Change code above this line
//   return total;
// }
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// ==================автоперевірка 2/21

// function findLongestWord(string) {
// return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// }

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// ==================автоперевірка 2/22

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   for (var i = 1; i < (max - min) + 2; i += 1) { 
     
//   numbers.push(min + i - 1);
//   }

//   console.log(numbers);
// }


// createArrayOfNumbers(1, 7)
// // повертає[1, 2, 3]
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// автоперевірка 2/23

// function filterArray(numbers, value) {
//    // Change code below this line
// const array = [];
//   for (var i = 0; i < numbers.length; i += 1) { 
    
//     if (numbers[i] > value) { 
//      array.push(numbers[i]);   
//     }  
//   }
// return array;

//   // Change code above this line
// }
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

// автоперевірка 2/24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return (fruits.includes(fruit)) ; // Change this line
// }


// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

// автоперевірка 2/25

// function getCommonElements(array1, array2) {
//   // Change code below this line
  
//   for (let i = 0; i < array2.length; i += 1) {
//     // console.log(array2[i]);
//     const arrayUnifying = [];
  
//     if (array1.includes(array2[i])) {
//       arrayUnifying.push(array2[i]);
//  console.log(arrayUnifying)
//     }
//   }
// }
//   getCommonElements([1, 2, 3], [2, 4])

//   //  повертає [2]

// автоперевірка 2/26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (total of order) {
//     total = order.reduce(function(sum, elem) {
//   	return sum + elem;
//   }, 0);
//      console.log(total) ;
//   }

// //   // Change code above this line
  
//  }

//  Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму


// calculateTotalPrice([12, 85, 37, 4]) 
// // повертає 138

// автоперевірка 2/27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   number = [0, 0, 0];
//   let i = 0;
//   for (numbers[i] of numbers) {
//     const number = numbers[i];

//   if (number > value) {
//       filteredNumbers.push(number);
  
//     }
//   }

//   console.log(filteredNumbers);
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3)
// // повертає[4, 5]
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

// автоперевірка 2/28

// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;


// let result;
// console.log(10 % 5 = 0)
// console.log(result);

// const arr = [10, 12, 15, 21, 36];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[5]);
//   });
// }

// автоперевірка 2/29
// function getEvenNumbers(start, end) {
// const arrayEvent = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i%2 === 0) {
      
//       arrayEvent.push(i); 
//     } 

//   }
//   console.log(arrayEvent) 
// }

// getEvenNumbers(6, 17)

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив
    
  

//    for (let i = 0; i > start && i < end; i += 1) { 
  
// =============рабочая
// function getEvenNumbers(start, end) {
// const arrayEvent = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i%2 === 0) {
      
//       arrayEvent.push(i); 
//     } 

//   }
//   return arrayEvent
// }

// автоперевірка 2/30


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// автоперевірка 2/31


// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//      return number = i;
     
//     }
//   }

//   return number;
//   // Change code above this line
// }
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// автоперевірка 2/32


// function includes(array, value) {
//   // Change code below this line
//   let checking = false; 
//   for (let i = 0; i < array.length; i += 1) {
    
//     if (array[i] !== value) {
//       continue
//     } else { 
//       checking = true;
//     }  
//     // Change code above this line
//   }
  
//    return checking;
// }
// includes([1, 2, 3, 4, 5], 3)


// // повертає true

// // ==================решение через filtre
// // const dision = array.filter(it=> it === value);
// // console.log(dision); // [3, 6, 9]

// // const arr = [];
// // console.log(arr);
// // console.log(arr && true);Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes