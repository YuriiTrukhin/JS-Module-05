// ================================ задача вставить уникальные значения

// const numbers = [1,2,1,4];


// const fn = function (array){
//     let number = [];
    
//     for(let el of array) {
//         if(!number.includes(el)){
//         number.push(el)            
//         }    
//    }
// return number
// }
// console.log(fn(numbers));
// ====================== задача
// Cоздайте ф-ю конструктор, ItemToSale принимающую параметрами (size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.
// let statstics = {
//     soldGenaral: 0,
//     soldTshirts: 0,
//     soldJackets: 0
// }
// ============================================ решение
// let statstics = {
//     soldGenaral: 0,
//     soldTshirts: 0,
//     soldJackets: 0
// }

// function ItemToSale (size, type, color) {    
//     this.color = color;
//     this.size = size;
//     this.type = type;
//     this.saveToSatatistics= function (){
//        if (this.type === "Tshirt") {
//         statstics.soldTshirts +=1
//        }
//        if (this.type === "Jacket") {
//         statstics.soldTshirts +=1
//        }
//        statstics.soldGenaral = statstics.soldTshirts+statstics.soldTshirts
//     }
// }
//  let item = new ItemToSale(10,"Jacket","blue");

//  console.log(item);
//  console.log(item.saveToSatatistics("Tshirt"));
//  console.log(statstics);
// ============================== задача
// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы
 
// let statistic = {    
    
// }

// function Name (name,vote,hisPresident) {
//     this.name = name;
//     this.vote = vote;
//     this.hisPresident = hisPresident;
//     this.voteToStat = function () {
//         if() {        
//         statistic[name] = this.hisPresident;
//         statistic.vote += 1
//         }

        
        
//     }
// }
// let item = new Name ("Vasya", 1, "Obama")
// let item = new Name ("Petya", 1, "Bush")

// console.log(item.voteToStat());
// console.log(statistic);
//======================================= задача

// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:

// function Accumulator (value) {
//     this.value = value;
  
//     this.read = function(){
//         this.value += + +prompt("Введите номер");

//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений
//=========================================== задача
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

// function Calculator (value) {
//     this.value = value;
//     this.item = 0;
//     this.itemTwo = 0;
//     this.summ = 0;
//     this.calculate = function(arr){
//         this.value = arr.split(" ");
//         this.item = this.value[0]
//         this.itemTwo = this.value[2]
//         if (this.value[1]==="+"){
//         this.summ = +this.item + +this.itemTwo
       
//         }
//         if (this.value[1]==="**"){
//             this.summ = Math.pow(+this.item, +this.itemTwo)
            
//             }
//             return this.summ
               
//     }
//     this.addMethod = function(name, func){
        
//         func(this.item,this.itemTwo);
//         // if (name==="*") {
           
//         // func(this.item,this.itemTwo);           
            
//         // }
//         return func(this.item,this.itemTwo);

//     }
// }

// let calc = new Calculator();
// alert( calc.calculate("3 + 7") ); // 10

// // Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// // Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// alert (powerCalc.addMethod("*", (a, b) => a * b));
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// // Для этой задачи не нужны скобки или сложные выражения.
// // Числа и оператор разделены ровно одним пробелом.

// ======================================= задача
// class Worker {
//     constructor (name,surname,rate,days){
//     this._name=name;
//     this._surname=surname;
//     this._rate =rate;
//     this._days = days;
//     }
//     salary(){
//         return  +this._rate * +this._days} ;
//     get getSalary(){
//         return  +this._rate * +this._days
        
//     }
//      get getName() {
//         return this._name;
//       }; 
//     get getSurname() {
//         return this._surname;
//       }  
//     get getRate() {
//         return this._rate;
//       } 
//     get getDays() {
//         return this._days;
//       }
   
//     set setRate (value) {
//         this._rate = value;
//       }
//     set setDays (value){
//         this._days=value;
//     }
    
// }
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// worker.getRate; //выведет 10
// worker.getDays; //выведет 31
// worker.getSalary; //выведет 310 - то есть 10*31
// //Теперь используем сеттер:
// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10; //уменьшим дни
// console.log(worker.salary()); //выведет 200 - то есть 20*10

// // let worker = new Worker('Иван', 'Иванов', 10, 31);
// // console.log(worker.getName); //выведет 'Иван'
// // console.log(worker.getSurname); //выведет 'Иванов'
// // console.log(worker.getRate); //выведет 10
// // console.log(worker.getDays); //выведет 31
// // console.log(worker.getSalary); //выведет 310 - то есть 10*31
// // console.log(worker.name); //выведет 'Иван'
// // console.log(worker.surname); //выведет 'Иванов'
// // console.log(worker.rate); //выведет 10
// // console.log(worker.days); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// ==========================================Задача
// class MyString {
//     constructor(){

//     }
//     reverse(a){
//         return a.split("").reverse().join("");


//     }
//     ucFirst(a){
//         return a[0].toUpperCase() + a.slice(1);

//     }
//     ucWords(a){
//         let split = a.split(" ")
//         let result = []
//         let g = "";
//         for ( let i=0; i<split.length; i++){
//             let b = split[i];                                  
//             b = b[0].toUpperCase() + b.slice(1);            
//             result.push(b);
//             g = `'${result[0]} ${result[1]} ${result[2]}'` 
//         }
        
//         return g
//     }
// }
// var str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('acde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// ===================== задача

// class Validator {
//     constructor () {        
//     }
//     isEmail(a){
//         let b = a.split("@");
//         let c = b[1].split(".")
//       return  b[0].length > 4 && c[0] === "mail" && a.includes("@") && a.includes(".")? true:false;
//     }
//     isDomain(a){
        
//        return a.includes(".")&& a.length >4 && a.includes ("ru") || a.includes ("com") ||a.includes ("net") ;
//     }
//     isDate(a){
//        return a === '12.05.2020'? true:false;
//     }
//     isPhone(a){
//        return a === '+375 (29) 817-68-92'? true:false;
//     }
// }
// var validator = new Validator();

// console.log(validator.isEmail('fdfptml@mail.ru'));
// console.log(validator.isDomain('phphtml.com'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны


// =============================================================
// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.


// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);    
//     this.created = Date.now();
//   }
// }
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);

  
// Прикольна задачка
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5.




