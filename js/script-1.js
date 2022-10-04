// const a  = 'переменная a';
// console.log(a);

// const userName = "asasasass"

// console.log('Учим js');
// ['учим', 'JS'].foeEach(alert);

// const num = 12;
// let rez;
// rez = (num >= 18 && num > 18);


// // if (num >= 0) {
// // 	let res = 1;
// // } else {
// // 	let res = 2;
// // }

// console.log(rez);

// const car = { 
//     a: 10,
//     b: true,
// }

// const carN = car;

// carN.a = 20;
// console.log(car.a);


// const mySity = {
//     sity: 'New-York'
// }



// console.log(mySity);

// mySity.sity = 'las-vegas';

// console.log(mySity);
// mySity.popular = true;
// console.log(mySity.popular);
// mySity.house = 12;
// console.log(mySity.house);
// mySity.contry = "USA";
// console.log(mySity.contry);
// console.log(mySity);
// delete mySity.contry;
// console.log(mySity)


// const myCar = {
//     tradeName: "VW",
//     colorCar: function () { 
//         console.log('white')
//     }
// }

// myCar.colorCar();
// 5 > 50
// 5 > 30
// 5 > 10
// 5 > 1
// условие не віполено



// let message = "привет Фрилансер";
// let b = 5;
// const a = b++; 

// if (a > 50) {
//     console.log("a больше 50");
   
// } else
//     if (a > 30) {
//         console.log("a больше 30");
//     } else
//         if (a > true) {
//             console.log("a больше 10");
//         } else { 
//             console.log("Условие не виполнено")
//         }

// const shouldRenew = confirm('хотите продлить');
// console.log(shouldRenew);

// let quaontity = prompt("введи число");
// quaontity = Number(quaontity);

// console.log(quaontity, typeof quaontity);

// console.log("" == 0);

// let elementWidth = "50.25px";
// let result = Number.parseFloat(elementWidth);
// console.log(result);

// let salary = 700.1578;

// console.log(Number(salary.toFixed(2)));


// console.log(Math.pow(2, 0.5));
// console.log(Math.sqrt(2, 2));



// const base = 2;
// const power = 4;
// console.log(Math.pow(base, power)); 

// Создай скрипт которий запрашивает число и степень и віводит результат в консоль

// let base = prompt("введи число");
// base = Number(base);
// let power = prompt("введи степень");
// power = Number(power);
// let rezult = Math.pow(base, power);
// console.log(rezult);

// рандомное число в интервале

// let rundomNomber = parseInt(Math.random() * 100);

// if (10 < rundomNomber && rundomNomber < 30) {
//     console.log(rundomNomber);
// } else { 
//     console.log("не подходит");
// }

// нормальний способ генерить числа в интервале!!!!!!!!!!!!



// const max = 90;
// const min = 20

// let rezult = Math.round((Math.random() * (max - min) + min)) ;
// console.log(rezult);


// Math.round - арифметическое округление

// const message = "я сегодня хорошо поработал и заработал"
// console.log(message.length);

// const brand = "Samsung";
// const normalizeBrand = brand.toLowerCase();
// const inID = "samsung";
// console.log(normalizeBrand);


// Нормализация регистра от нужного символа

// const brand = "saMsUNG";
// console.log(brand[5]);
// console.log(brand.toLowerCase(brand.slice(1)));


// const blaskListedWorld1 = "спам";
// const blaskListedWorld2 = "распродажа";

// const string1 = "Привет єто распродажа";
// const string2 = "Єто не СПАМ, а реклама";
// const string3 = "Рекламная компания";

// console.log(string1.includes(blaskListedWorld1));
// console.log(string1.includes(blaskListedWorld2));

// console.log(string2.toLocaleLowerCase().includes(blaskListedWorld1));
// console.log(string2.includes(blaskListedWorld2));

// console.log(string3.includes(blaskListedWorld1));
// console.log(string3.includes(blaskListedWorld2));


// напиши скрипт которий проверяет вхождение числа в отрезок х1 х2

// const x1 = 10;
// const x2 = 50;
// let a = 10;
// const rezult = (a <= x2 && a >= x1);
    
// console.log(rezult);


// напишир скрипт которій проверяет число на меньше х1 или больше х2


// const x1 = 15;
// const x2 = 45;
// const a = 58;
// const rez = (a <= x1 || a >= x2);
// console.log(rez);

// напиши скрипт откріть чат друг+онлайн+без режима не беспокоить

// МОЙ Варик
// const friend = (true || false);
// const onLine = (true || false);
// const worry = ( true || false);
// let openChat = (friend && onLine && worry);

// if (friend === true) {
//     openChat === true;
// } else (openChat === false);
// console.log(openChat)

// if (onLine === true) {
//     openChat === true;
// } else (openChat === false);
// console.log(openChat)

// if (worry === true) {
//     openChat === true;
// } else (openChat === false);
// console.log(openChat)

// РЕПЕТА

// const isOnLine = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnLine && !isDnd;
// console.log("Можно откріть чат?" , canOpenChat);


// Напиши скрипт проверки подписки(есть три типа подписки
// -вип
//     - про
//     - фри)
// подписку могут получить вип и про


// const vip = true;
// const pro = true;
// const free = false; если  "" - то доступ есть((((

// const subscriptionVerification = vip && pro && !free;

// console.log("откріть подписку? :", subscriptionVerification)


// РЕПЕТА

// const sub = "vip"; 

// const canAccessContent = sub === "pro" || sub === "vip";

// (sub= "vip") false || true => true
// (sub= "pro") true || false => true
// (sub= "free") false || false => false


// console.log("Есть доступ к контенту?", canAccessContent);


// if (5 < 30) {
//     console.log('x < y');
// } else { 
//     console.log('x > y');
// }

// Если зарплата 1000 денег
// и зп < 500  - то - уровень1
// и если зп > 500 < 1000 - то - уровень2
// и если зп > 3000  - то - уровень3

// const salary = 1001;

// if (salary < 500) {
//     console.log('Уровень 1');
// } else if (salary > 500 && salary < 1000) {
//     console.log('Уровень 2');
// } else if (salary > 1000 && salary < 3000) {
//     console.log('Уровень 3');
// } else {
//     console.log('Уровень 4');
// }


// Тернарний оператор
// const balance = 500;
// const message = balance >= 0 ? "Позитивний баланс" : "Негативний баланс";
// console.log(message);





