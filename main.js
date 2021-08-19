// 1.
// let button = document.getElementById("btn");
// let products = document.getElementById("items");
// let lists = document.getElementById("list");
// let array = [];
// button.onclick = function(){
//     if(array.indexOf(products.value) == -1){
//         array.push(products.value);
//         lists.innerHTML += `<li>${products.value}</li>`
//     };
// };

// 2.
// let button = document.getElementById("btn2");
// let firstInput = document.getElementById("number1");
// let secInput = document.getElementById("number2");
// button.addEventListener("click", function(){
//     console.log(Number(firstInput.value) + Number(secInput.value));  
// });

// 3.
// let button = document.getElementById("btn3");
// button.addEventListener("click", function(){
//     button.style.backgroundColor = "red";
// })

// 4.
// let button = document.getElementById("btn4");
// let par = document.getElementById("para4");
// button.addEventListener("click", function(){
//     par.innerText = Math.random();
// });

// 5.
// let items = [
//     {name:"yacht", img:"https://cdn.pixabay.com/photo/2018/05/25/23/48/luxury-yacht-3430348__340.jpg"},
//     {name:"privet jet", img:"https://media.istockphoto.com/photos/gulfstream-landing-at-hong-kong-picture-id637237868?k=6&m=637237868&s=612x612&w=0&h=hXVBTeZqGHSOJ8uFO2M75rOAZmCp_L9zSenokEH5ktA="},
//     {name:"super car", img:"https://media.istockphoto.com/photos/black-in-black-sinistro-picture-id509192854?k=6&m=509192854&s=612x612&w=0&h=5c-x4vCXhWygy_9dYFElJzbLuO21qDOFzUupT0jQ9ik="}
// ];

// let par = document.getElementById("itdiv");

// for(let i = 0; i < items.length; i++){
//     par.innerHTML+=`<h1>${items[i].name}</h1>`
//     par.innerHTML+=`<img src="${items[i].img}"><br>`
// };

// 6.
// let button = document.getElementById("btn6");
// let userPush = document.getElementById("innum");
// let array = [];
// button.onclick = function(){
//     if(userPush.value == Number(userPush.value)){
//         array.push(userPush.value);
//     };
// };

// 7.
// let par = document.getElementById("para");
// par.addEventListener("click", function(){
//     par.innerText = new Date();
// });

// 8.
// let par = document.getElementById("para1");
// par.addEventListener("click", function(){
//     par.innerText = new Date().getHours();
// });

// 9.
// let par = document.getElementById("para9");
// let userAge = document.getElementById("age");
// let button = document.getElementById("btn9");
// button.addEventListener("click", function(){
//     par.innerText = new Date().getFullYear() - userAge.value;
// });

// 10.
// let array = [1, 2, 3, 4, 5];
// let input = document.getElementById("numbers");
// let button = document.getElementById("btn10");
// let par = document.getElementById("para10");
// button.addEventListener("click", function(){
//     for(let i = 0; i < array.length; i++){
//         if(input.value == array[i]){
//             par.innerText = input.value;
//         };
//     };
// });

// 11.
// let input1 = document.getElementById("in1");
// let input2 = document.getElementById("in2");
// let par = document.getElementById("para11");
// let par2 = document.getElementById("para12");
// let button = document.getElementById("btn11");
// button.addEventListener("click", function(){
//   par.innerText = input1.value;
// par2.innerText = input2.value;  
// });

// 12.
// let firstName = document.getElementById("first");
// let lastName = document.getElementById("last");
// let button  = document.getElementById("btn12");
// button.onclick = function(){
//     let first = firstName.value
//     let last = lastName
//     if(first.length > last.length){
//         return console.log("first is longer then last");
//     }
//     return console.log("last is longer then first");
// };

// 13.
// let input1 = document.getElementById("fn");
// let input2 = document.getElementById("ei");
// let input3 = document.getElementById("age");
// let button = document.getElementById("btn13");
// let array = [];
// button.onclick = function(){
//     array.push({name:input1.value, email:input2.value, age:input3.value});
//     console.log(array);
// };