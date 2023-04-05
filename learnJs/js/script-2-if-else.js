// Напиши скрипт вібора отеля 1 * 20$, 2 * 30$, 3 * 70$, 4 * 120$, 
// если в строке цифра больше 4 - такого кол-ва звезд нет


// мой Вариант
// const stars = prompt('введи звезду');


// if (Number(stars) === 1) {
//     console.log("цена:", 20);
// } else if (Number(stars) === 2) {
//     console.log("цена:", 30);
    
// } else if (Number(stars) === 3) {
//     console.log("цена:", 70);
// } else if (Number(stars) === 4) {
//     console.log("цена:", 120);
// } else { 
//     console.log("такого кол-ва звезд нет");
// }


// Репета

// const stars = 2;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 70;
// } else if (stars === 4) {
//     price = 120;

// } else console.log("такого кол-ва звезд нет");
// console.log(price);


// если идет сравнение на РАВЕНСТВО, ТО КЕЙС / СВИЧ

// const stars = 2;
// let price;



// switch (stars) { 
//     case 1:
//         price = 20;
//         // здесь может бить произвольное кол во строк
//         break;
//     case 2:
//         price = 30;
//         // здесь может бить произвольное кол во строк
//         break;
//     case 3:
//         price = 70;
//         // здесь может бить произвольное кол во строк
//         break;
//     case 4:
//         price = 120;
//         break;
//     default:
//         console.log("такого кол-ва звезд нет");
// }


// console.log(price);



// Напиши скрипт доставки товара
// условия хранятся в переменной: opotion
// 1 самовивоз
// 2доставка курьером
// 3 доставка почтой
// вам перезвонит менеджер


// const option = 3;
// let mesage;
// switch (option) { 
//     case 1:
//         console.log("самовивоз");
//         // mesage = "самовивоз" можно так
//         break;
//     case 2:
//         console.log("доставка курьером");
//         break;
//     default:
//         console.log("вам перезвонит менеджер");
// }



// Цикл for

// for (let i = 5; i < 16; i += 10 ) { 
//     console.log(i);
// }
// console.log("sadSAF");


// просуммируй рандомную зарплату 5человек.генерируется от 500 до 5000
// запиши в totalSalary

// const emloyee = 5;
// const max = 5000;
// const min = 500;
// let salary;
// let totalSalary = 0;
// for (let i = 1; i <= emloyee; i += 1) { 
//     totalSalary = (Math.round(Math.random() * (max - min) + min)) + totalSalary;
// }
// console.log(totalSalary);

// напиши скрипт которий считает сумму четних чисел от 0 - 5


// if (i < 5 && i % 2)

// проверить число на четность
// 
// 
// let sum = 0;
// for (let i = 0; i < 10; i += 1) { 
//      (i % 2 === 0) ? sum = sum + i : console.log("не четное", i ); 
// }
// console.log(sum);



